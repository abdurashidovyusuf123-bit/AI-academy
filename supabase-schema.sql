-- ============================================================
-- AI ACADEMY — SUPABASE DATABASE SETUP
-- Qayta ishga tushirishga xavfsiz variant
-- ============================================================


-- ============================================================
-- 1. PROFILES
-- ============================================================

create table if not exists public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  is_vip boolean not null default false,
  stripe_customer_id text,
  lessons_used_today int not null default 0,
  images_used_today int not null default 0,
  last_used_date date not null default current_date,
  points int not null default 0,
  nickname text,
  created_at timestamptz not null default now()
);

alter table public.profiles enable row level security;


-- Eski policy'larni o'chirish
drop policy if exists "Foydalanuvchi faqat o'z profilini ko'radi" on public.profiles;

drop policy if exists "Foydalanuvchi faqat o'z taxallusini o'zgartira oladi"
on public.profiles;


-- SELECT policy
create policy "Foydalanuvchi faqat o'z profilini ko'radi"
  on public.profiles
  for select
  using (auth.uid() = user_id);


-- UPDATE policy
create policy "Foydalanuvchi faqat o'z taxallusini o'zgartira oladi"
  on public.profiles
  for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ============================================================
-- 2. YANGI USER UCHUN AVTOMATIK PROFILE
-- ============================================================

create or replace function public.handle_new_user()
returns trigger
as $$
begin
  insert into public.profiles (user_id)
  values (new.id);

  return new;
end;
$$ language plpgsql security definer;


drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
  after insert on auth.users
  for each row
  execute procedure public.handle_new_user();


-- ============================================================
-- 3. DARS LIMITI
-- ============================================================

create or replace function public.check_and_increment_lesson(
  daily_limit int default 5
)
returns json
as $$
declare
  prof public.profiles%rowtype;
  allowed boolean;
begin

  select *
  into prof
  from public.profiles
  where user_id = auth.uid();

  if prof is null then
    insert into public.profiles (user_id)
    values (auth.uid())
    returning * into prof;
  end if;

  if prof.last_used_date <> current_date then

    update public.profiles
    set
      lessons_used_today = 0,
      images_used_today = 0,
      last_used_date = current_date
    where user_id = auth.uid()
    returning * into prof;

  end if;

  if prof.is_vip then

    allowed := true;

  else

    allowed := prof.lessons_used_today < daily_limit;

    if allowed then

      update public.profiles
      set lessons_used_today = lessons_used_today + 1
      where user_id = auth.uid()
      returning * into prof;

    end if;

  end if;

  return json_build_object(
    'allowed', allowed,
    'is_vip', prof.is_vip,
    'lessons_used_today', prof.lessons_used_today,
    'daily_limit', daily_limit
  );

end;
$$ language plpgsql security definer;


-- ============================================================
-- 4. RASM LIMITI
-- ============================================================

create or replace function public.check_and_increment_image(
  daily_limit int default 5
)
returns json
as $$
declare
  prof public.profiles%rowtype;
  allowed boolean;
begin

  select *
  into prof
  from public.profiles
  where user_id = auth.uid();

  if prof is null then

    insert into public.profiles (user_id)
    values (auth.uid())
    returning * into prof;

  end if;

  if prof.last_used_date <> current_date then

    update public.profiles
    set
      lessons_used_today = 0,
      images_used_today = 0,
      last_used_date = current_date
    where user_id = auth.uid()
    returning * into prof;

  end if;

  if prof.is_vip then

    allowed := true;

  else

    allowed := prof.images_used_today < daily_limit;

    if allowed then

      update public.profiles
      set images_used_today = images_used_today + 1
      where user_id = auth.uid()
      returning * into prof;

    end if;

  end if;

  return json_build_object(
    'allowed', allowed,
    'is_vip', prof.is_vip,
    'images_used_today', prof.images_used_today,
    'daily_limit', daily_limit
  );

end;
$$ language plpgsql security definer;


-- ============================================================
-- 5. IMTIHON BALLARI
-- ============================================================

create or replace function public.award_exam_points(
  amount int
)
returns void
as $$
begin

  update public.profiles
  set points = points + amount
  where user_id = auth.uid();

end;
$$ language plpgsql security definer;


-- ============================================================
-- 6. LEADERBOARD
-- ============================================================

create or replace view public.public_leaderboard as
select
  coalesce(nickname, 'Anonim') as nickname,
  points
from public.profiles
where points > 0
order by points desc
limit 50;


grant select on public.public_leaderboard
to anon, authenticated;


-- ============================================================
-- 7. SUBJECT PROGRESS
-- ============================================================

create table if not exists public.subject_progress (
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  unlocked_module int not null default 1,
  completed_lessons int[] not null default '{}',
  certified boolean not null default false,
  level_label text,
  updated_at timestamptz not null default now(),

  primary key (user_id, subject_id)
);

alter table public.subject_progress enable row level security;


drop policy if exists
"Foydalanuvchi faqat o'z progressini ko'radi/o'zgartiradi"
on public.subject_progress;


create policy "Foydalanuvchi faqat o'z progressini ko'radi/o'zgartiradi"
  on public.subject_progress
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ============================================================
-- 8. WEEKLY SCHEDULE
-- ============================================================

create table if not exists public.weekly_schedule (
  user_id uuid references auth.users(id) on delete cascade,
  day_of_week int not null check (day_of_week between 0 and 6),
  subject_id text not null,

  primary key (user_id, day_of_week, subject_id)
);

alter table public.weekly_schedule enable row level security;


drop policy if exists
"Foydalanuvchi faqat o'z jadvalini ko'radi/o'zgartiradi"
on public.weekly_schedule;


create policy "Foydalanuvchi faqat o'z jadvalini ko'radi/o'zgartiradi"
  on public.weekly_schedule
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ============================================================
-- 9. LESSON ACTIVITY
-- ============================================================

create table if not exists public.lesson_activity (
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  activity_date date not null default current_date,

  primary key (user_id, subject_id, activity_date)
);

alter table public.lesson_activity enable row level security;


drop policy if exists
"Foydalanuvchi faqat o'z faolligini ko'radi/o'zgartiradi"
on public.lesson_activity;


create policy "Foydalanuvchi faqat o'z faolligini ko'radi/o'zgartiradi"
  on public.lesson_activity
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ============================================================
-- 10. CHAT HISTORY
-- ============================================================

create table if not exists public.chat_history (
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  messages jsonb not null default '[]',
  updated_at timestamptz not null default now(),

  primary key (user_id, subject_id)
);

alter table public.chat_history enable row level security;


drop policy if exists
"Foydalanuvchi faqat o'z suhbat tarixini ko'radi/o'zgartiradi"
on public.chat_history;


create policy "Foydalanuvchi faqat o'z suhbat tarixini ko'radi/o'zgartiradi"
  on public.chat_history
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ============================================================
-- 11. EXAM ATTEMPTS
-- ============================================================

create table if not exists public.exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  exam_type text not null,
  module_idx int,
  score int not null,
  total int not null,
  passed boolean not null,
  created_at timestamptz not null default now()
);

alter table public.exam_attempts enable row level security;


drop policy if exists
"Foydalanuvchi faqat o'z urinishlarini ko'radi"
on public.exam_attempts;

drop policy if exists
"Foydalanuvchi faqat o'z urinishini qo'sha oladi"
on public.exam_attempts;


create policy "Foydalanuvchi faqat o'z urinishlarini ko'radi"
  on public.exam_attempts
  for select
  using (auth.uid() = user_id);


create policy "Foydalanuvchi faqat o'z urinishini qo'sha oladi"
  on public.exam_attempts
  for insert
  with check (auth.uid() = user_id);


-- ============================================================
-- 12. DO'STIM / COMPANION PROFILE
-- ============================================================

create table if not exists public.companion_profile (
  user_id uuid primary key references auth.users(id) on delete cascade,
  name text,
  age int,
  gender text,
  personality text,
  goals text,
  strengths text,
  weaknesses text,
  skills text,
  onboarded boolean not null default false,
  updated_at timestamptz not null default now()
);

alter table public.companion_profile enable row level security;


drop policy if exists
"Foydalanuvchi faqat o'z Do'stim profilini ko'radi/o'zgartiradi"
on public.companion_profile;


create policy "Foydalanuvchi faqat o'z Do'stim profilini ko'radi/o'zgartiradi"
  on public.companion_profile
  for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ============================================================
-- 13. ADMIN
-- ============================================================
-- MUHIM:
-- Quyidagi emailni O'ZINGIZNING Google/Supabase login emailingizga
-- almashtiring.

create or replace function public.is_admin()
returns boolean
as $$
begin

  return (
    select email
    from auth.users
    where id = auth.uid()
  ) = 'abdurashidovyusuf123@gmail.com';

end;
$$ language plpgsql security definer;


-- ============================================================
-- 14. ADMIN STATISTIKA
-- ============================================================

create or replace function public.admin_get_stats()
returns json
as $$
begin

  if not public.is_admin() then
    raise exception 'Ruxsat yo''q';
  end if;

  return json_build_object(

    'total_users',
      (select count(*) from public.profiles),

    'total_vip',
      (select count(*) from public.profiles where is_vip),

    'total_points',
      (select coalesce(sum(points), 0) from public.profiles),

    'signups_7d',
      (
        select count(*)
        from auth.users
        where created_at > now() - interval '7 days'
      ),

    'signups_30d',
      (
        select count(*)
        from auth.users
        where created_at > now() - interval '30 days'
      ),

    'total_exam_attempts',
      (select count(*) from public.exam_attempts),

    'total_certificates',
      (
        select count(*)
        from public.subject_progress
        where certified
      ),

    'total_lessons_completed',
      (
        select coalesce(
          sum(array_length(completed_lessons, 1)),
          0
        )
        from public.subject_progress
      )

  );

end;
$$ language plpgsql security definer;


-- ============================================================
-- 15. ADMIN — FANLAR MASHHURLIGI
-- ============================================================

create or replace function public.admin_get_subject_popularity()
returns table(
  subject_id text,
  activity_count bigint
)
as $$
begin

  if not public.is_admin() then
    raise exception 'Ruxsat yo''q';
  end if;

  return query

    select
      la.subject_id,
      count(*) as activity_count

    from public.lesson_activity la

    group by la.subject_id

    order by activity_count desc;

end;
$$ language plpgsql security definer;


-- ============================================================
-- 16. ADMIN — SO'NGGI FOYDALANUVCHILAR
-- ============================================================

create or replace function public.admin_get_recent_signups(
  limit_n int default 15
)
returns table(
  email text,
  created_at timestamptz,
  is_vip boolean
)
as $$
begin

  if not public.is_admin() then
    raise exception 'Ruxsat yo''q';
  end if;

  return query

    select
      u.email,
      u.created_at,
      coalesce(p.is_vip, false)

    from auth.users u

    left join public.profiles p
      on p.user_id = u.id

    order by u.created_at desc

    limit limit_n;

end;
$$ language plpgsql security definer;


-- ============================================================
-- TAYYOR
-- ============================================================
