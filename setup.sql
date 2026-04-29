-- Kör detta i Supabase SQL Editor (supabase.com → ditt projekt → SQL Editor)

-- Användarprofiler
create table if not exists public.user_profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  name text,
  organisation text,
  created_at timestamptz default now()
);

-- Skapa profil automatiskt från registreringsmetadata när sådan finns
create or replace function public.handle_new_bob_user()
returns trigger language plpgsql security definer set search_path = public as $$
begin
  insert into public.user_profiles (id, name, organisation)
  values (
    new.id,
    new.raw_user_meta_data->>'name',
    new.raw_user_meta_data->>'organisation'
  )
  on conflict (id) do nothing;
  return new;
end;
$$;

drop trigger if exists on_bob_auth_user_created on auth.users;
create trigger on_bob_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_bob_user();

-- Kursframsteg (vilka sektioner som är klara)
create table if not exists public.user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  module_id int not null,
  section_id text not null,
  completed_at timestamptz default now(),
  unique(user_id, module_id, section_id)
);

-- Reflektionssvar
create table if not exists public.user_reflections (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  reflection_key text not null,
  content text,
  updated_at timestamptz default now(),
  unique(user_id, reflection_key)
);

-- Genomförda övningar
create table if not exists public.user_exercises (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null,
  exercise_key text not null,
  completed_at timestamptz default now(),
  unique(user_id, exercise_key)
);

-- Row Level Security
alter table public.user_profiles enable row level security;
alter table public.user_progress enable row level security;
alter table public.user_reflections enable row level security;
alter table public.user_exercises enable row level security;

drop policy if exists "Egen profil" on public.user_profiles;
drop policy if exists "Eget framsteg" on public.user_progress;
drop policy if exists "Egna reflektioner" on public.user_reflections;
drop policy if exists "Egna övningar" on public.user_exercises;
drop policy if exists "Visa egen profil" on public.user_profiles;
drop policy if exists "Skapa egen profil" on public.user_profiles;
drop policy if exists "Uppdatera egen profil" on public.user_profiles;
drop policy if exists "Visa egna framsteg" on public.user_progress;
drop policy if exists "Visa egna reflektioner" on public.user_reflections;
drop policy if exists "Visa egna övningar" on public.user_exercises;

create policy "Visa egen profil" on public.user_profiles
  for select using (auth.uid() = id);

create policy "Skapa egen profil" on public.user_profiles
  for insert with check (auth.uid() = id);

create policy "Uppdatera egen profil" on public.user_profiles
  for update using (auth.uid() = id) with check (auth.uid() = id);

create policy "Visa egna framsteg" on public.user_progress
  for select using (auth.uid() = user_id);

create policy "Visa egna reflektioner" on public.user_reflections
  for select using (auth.uid() = user_id);

create policy "Visa egna övningar" on public.user_exercises
  for select using (auth.uid() = user_id);

-- Kontrollerade skrivfunktioner för kursdata
create or replace function public.mark_course_section_done(
  p_module_id int,
  p_section_id text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'not_authenticated';
  end if;

  if p_module_id < 1 or p_module_id > 7 then
    raise exception 'invalid_module';
  end if;

  if p_section_id is null or p_section_id !~ '^[a-z0-9_-]+$' then
    raise exception 'invalid_section';
  end if;

  insert into public.user_progress (user_id, module_id, section_id)
  values (v_user_id, p_module_id, p_section_id)
  on conflict (user_id, module_id, section_id) do nothing;

  return true;
end;
$$;

create or replace function public.save_course_reflection(
  p_reflection_key text,
  p_content text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'not_authenticated';
  end if;

  if p_reflection_key is null or p_reflection_key !~ '^[a-z0-9_-]+$' then
    raise exception 'invalid_reflection';
  end if;

  insert into public.user_reflections (user_id, reflection_key, content, updated_at)
  values (v_user_id, p_reflection_key, coalesce(p_content, ''), now())
  on conflict (user_id, reflection_key) do update
    set content = excluded.content,
        updated_at = now();

  return true;
end;
$$;

create or replace function public.mark_course_exercise_done(
  p_exercise_key text
)
returns boolean
language plpgsql
security definer
set search_path = public
as $$
declare
  v_user_id uuid := auth.uid();
begin
  if v_user_id is null then
    raise exception 'not_authenticated';
  end if;

  if p_exercise_key is null or p_exercise_key !~ '^[a-z0-9_-]+$' then
    raise exception 'invalid_exercise';
  end if;

  insert into public.user_exercises (user_id, exercise_key)
  values (v_user_id, p_exercise_key)
  on conflict (user_id, exercise_key) do nothing;

  return true;
end;
$$;

grant execute on function public.mark_course_section_done(int, text) to authenticated;
grant execute on function public.save_course_reflection(text, text) to authenticated;
grant execute on function public.mark_course_exercise_done(text) to authenticated;
