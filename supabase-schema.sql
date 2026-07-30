-- ==========================
-- AI Academy Database Setup
-- ==========================

-- 1. Jadvalni yaratish
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

-- 2. Eski jadval bo'lsa ustunlarni qo'shish
alter table public.profiles
  add column if not exists is_vip boolean not null default false;

alter table public.profiles
  add column if not exists stripe_customer_id text;

alter table public.profiles
  add column if not exists lessons_used_today int not null default 0;

alter table public.profiles
  add column if not exists images_used_today int not null default 0;

alter table public.profiles
  add column if not exists last_used_date date not null default current_date;

alter table public.profiles
  add column if not exists points int not null default 0;

alter table public.profiles
  add column if not exists nickname text;

alter table public.profiles
  add column if not exists created_at timestamptz not null default now();

-- ==========================
-- RLS
-- ==========================

alter table public.profiles enable row level security;

drop policy if exists "Foydalanuvchi faqat o'z profilini ko'radi" on public.profiles;

create policy "Foydalanuvchi faqat o'z profilini ko'radi"
on public.profiles
for select
using (auth.uid() = user_id);

drop policy if exists "Foydalanuvchi faqat o'z taxallusini o'zgartira oladi" on public.profiles;

create policy "Foydalanuvchi faqat o'z taxallusini o'zgartira oladi"
on public.profiles
for update
using (auth.uid() = user_id)
with check (auth.uid() = user_id);

-- ==========================
-- Trigger
-- ==========================

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
as $$
begin
  insert into public.profiles (user_id)
  values (new.id)
  on conflict (user_id) do nothing;

  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;

create trigger on_auth_user_created
after insert on auth.users
for each row
execute procedure public.handle_new_user();

-- ==========================
-- Lesson limit
-- ==========================

create or replace function public.check_and_increment_lesson(
  daily_limit int default 5
)
returns json
language plpgsql
security definer
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
    insert into public.profiles(user_id)
    values(auth.uid())
    on conflict(user_id) do nothing;

    select *
    into prof
    from public.profiles
    where user_id = auth.uid();
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
$$;

-- ==========================
-- Image limit
-- ==========================

create or replace function public.check_and_increment_image(
  daily_limit int default 5
)
returns json
language plpgsql
security definer
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
    insert into public.profiles(user_id)
    values(auth.uid())
    on conflict(user_id) do nothing;

    select *
    into prof
    from public.profiles
    where user_id = auth.uid();
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
$$;

-- ==========================
-- Exam points
-- ==========================

create or replace function public.award_exam_points(amount int)
returns void
language plpgsql
security definer
as $$
begin
  update public.profiles
  set points = points + amount
  where user_id = auth.uid();
end;
$$;

-- ==========================
-- Leaderboard
-- ==========================

create or replace view public.public_leaderboard as
select
  coalesce(nickname, 'Anonim') as nickname,
  points
from public.profiles
where points > 0
order by points desc
limit 50;

grant select on public.public_leaderboard to anon, authenticated;
  order by points desc
  limit 50;

grant select on public_leaderboard to anon, authenticated;
