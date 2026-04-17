-- Kör detta i Supabase SQL Editor (supabase.com → ditt projekt → SQL Editor)

-- Användarprofiler
create table if not exists user_profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  name text,
  organisation text,
  created_at timestamptz default now()
);

-- Kursframsteg (vilka sektioner som är klara)
create table if not exists user_progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  module_id int not null,
  section_id text not null,
  completed_at timestamptz default now(),
  unique(user_id, module_id, section_id)
);

-- Reflektionssvar
create table if not exists user_reflections (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  reflection_key text not null,
  content text,
  updated_at timestamptz default now(),
  unique(user_id, reflection_key)
);

-- Genomförda övningar
create table if not exists user_exercises (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade,
  exercise_key text not null,
  completed_at timestamptz default now(),
  unique(user_id, exercise_key)
);

-- Row Level Security
alter table user_profiles enable row level security;
alter table user_progress enable row level security;
alter table user_reflections enable row level security;
alter table user_exercises enable row level security;

create policy "Egen profil" on user_profiles for all using (auth.uid() = id);
create policy "Eget framsteg" on user_progress for all using (auth.uid() = user_id);
create policy "Egna reflektioner" on user_reflections for all using (auth.uid() = user_id);
create policy "Egna övningar" on user_exercises for all using (auth.uid() = user_id);
