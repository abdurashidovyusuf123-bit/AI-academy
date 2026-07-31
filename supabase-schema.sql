-- AI Academy: foydalanuvchi profili, kunlik limit va VIP holatini saqlash uchun.
-- Buni Supabase loyihangizda: SQL Editor > New query > shu faylni joylashtirib, "Run" bosing.

create table if not exists profiles (
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

alter table profiles enable row level security;

create policy "Foydalanuvchi faqat o'z profilini ko'radi"
  on profiles for select
  using (auth.uid() = user_id);

create policy "Foydalanuvchi faqat o'z taxallusini o'zgartira oladi"
  on profiles for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Yangi foydalanuvchi ro'yxatdan o'tganda avtomatik profil qatori yaratish
create or replace function handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (user_id) values (new.id);
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure handle_new_user();

-- Dars boshlashdan oldin chaqiriladigan funksiya: kunlik limitni tekshiradi va oshiradi.
-- VIP foydalanuvchilar uchun cheklov yo'q. Kun almashganda hisoblagich avtomatik nolga tushadi.
create or replace function check_and_increment_lesson(daily_limit int default 5)
returns json as $$
declare
  prof profiles%rowtype;
  allowed boolean;
begin
  select * into prof from profiles where user_id = auth.uid();

  if prof is null then
    insert into profiles (user_id) values (auth.uid()) returning * into prof;
  end if;

  if prof.last_used_date <> current_date then
    update profiles set lessons_used_today = 0, images_used_today = 0, last_used_date = current_date
      where user_id = auth.uid() returning * into prof;
  end if;

  if prof.is_vip then
    allowed := true;
  else
    allowed := prof.lessons_used_today < daily_limit;
    if allowed then
      update profiles set lessons_used_today = lessons_used_today + 1
        where user_id = auth.uid() returning * into prof;
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

-- Rasm yuborishdan oldin chaqiriladigan funksiya: kunlik rasm limitini tekshiradi va oshiradi.
create or replace function check_and_increment_image(daily_limit int default 5)
returns json as $$
declare
  prof profiles%rowtype;
  allowed boolean;
begin
  select * into prof from profiles where user_id = auth.uid();

  if prof is null then
    insert into profiles (user_id) values (auth.uid()) returning * into prof;
  end if;

  if prof.last_used_date <> current_date then
    update profiles set lessons_used_today = 0, images_used_today = 0, last_used_date = current_date
      where user_id = auth.uid() returning * into prof;
  end if;

  if prof.is_vip then
    allowed := true;
  else
    allowed := prof.images_used_today < daily_limit;
    if allowed then
      update profiles set images_used_today = images_used_today + 1
        where user_id = auth.uid() returning * into prof;
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

-- Imtihondan o'tganda ball qo'shish uchun
create or replace function award_exam_points(amount int)
returns void as $$
begin
  update profiles set points = points + amount where user_id = auth.uid();
end;
$$ language plpgsql security definer;

-- Reyting jadvali uchun: faqat taxallus va ball ko'rinadigan ochiq ko'rinish (view).
-- Bu boshqa maxfiy ustunlarni (masalan is_vip, stripe_customer_id) ochiq qilmaydi.
create or replace view public_leaderboard as
  select coalesce(nickname, 'Anonim') as nickname, points
  from profiles
  where points > 0
  order by points desc
  limit 50;

grant select on public_leaderboard to anon, authenticated;

-- ================== Progress, Jadval va Faollik tarixi ==================
-- Har bir fan bo'yicha progress (endi brauzerda emas, hisobga bog'langan)
create table if not exists subject_progress (
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  unlocked_module int not null default 1,
  completed_lessons int[] not null default '{}',
  certified boolean not null default false,
  level_label text,
  updated_at timestamptz not null default now(),
  primary key (user_id, subject_id)
);
alter table subject_progress enable row level security;
create policy "Foydalanuvchi faqat o'z progressini ko'radi/o'zgartiradi"
  on subject_progress for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Haftalik takrorlanuvchi dars rejasi (0=Yakshanba ... 6=Shanba)
create table if not exists weekly_schedule (
  user_id uuid references auth.users(id) on delete cascade,
  day_of_week int not null check (day_of_week between 0 and 6),
  subject_id text not null,
  primary key (user_id, day_of_week, subject_id)
);
alter table weekly_schedule enable row level security;
create policy "Foydalanuvchi faqat o'z jadvalini ko'radi/o'zgartiradi"
  on weekly_schedule for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Har kuni qaysi fandan dars boshlangani (avtomatik ✓/✗ va streak uchun)
create table if not exists lesson_activity (
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  activity_date date not null default current_date,
  primary key (user_id, subject_id, activity_date)
);
alter table lesson_activity enable row level security;
create policy "Foydalanuvchi faqat o'z faolligini ko'radi/o'zgartiradi"
  on lesson_activity for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Har bir fan bo'yicha suhbat tarixi (fanni qayta tanlaganda davom etadi)
create table if not exists chat_history (
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  messages jsonb not null default '[]',
  updated_at timestamptz not null default now(),
  primary key (user_id, subject_id)
);
alter table chat_history enable row level security;
create policy "Foydalanuvchi faqat o'z suhbat tarixini ko'radi/o'zgartiradi"
  on chat_history for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Har bir imtihon/test urinishi tarixi
create table if not exists exam_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references auth.users(id) on delete cascade,
  subject_id text not null,
  exam_type text not null,      -- 'level' yoki 'module'
  module_idx int,                -- module_exam uchun (level testda bo'sh)
  score int not null,
  total int not null,
  passed boolean not null,
  created_at timestamptz not null default now()
);
alter table exam_attempts enable row level security;
create policy "Foydalanuvchi faqat o'z urinishlarini ko'radi"
  on exam_attempts for select
  using (auth.uid() = user_id);
create policy "Foydalanuvchi faqat o'z urinishini qo'sha oladi"
  on exam_attempts for insert
  with check (auth.uid() = user_id);
