-- AI Academy: foydalanuvchi profili, kunlik limit va VIP holatini saqlash uchun.
-- Buni Supabase loyihangizda: SQL Editor > New query > shu faylni joylashtirib, "Run" bosing.

create table if not exists profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  is_vip boolean not null default false,
  stripe_customer_id text,
  lessons_used_today int not null default 0,
  last_used_date date not null default current_date,
  created_at timestamptz not null default now()
);

alter table profiles enable row level security;

create policy "Foydalanuvchi faqat o'z profilini ko'radi"
  on profiles for select
  using (auth.uid() = user_id);

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
