-- AI Academy: foydalanuvchi profili, kunlik limit va VIP holatini saqlash uchun.
-- Buni Supabase loyihangizda: SQL Editor > New query > shu faylni joylashtirib, "Run" bosing.

create table if not exists profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  is_vip boolean not null default false,
  stripe_customer_id text,
  lessons_used_today int not null default 0,
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
    update profiles set lessons_used_today = 0, last_used_date = current_date
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
