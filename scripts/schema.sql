-- =========================================================
-- Agape Academy International - Media CMS Supabase Schema
-- =========================================================

-- 1. Table: Fixed Site Media Slots
create table if not exists public.site_media_slots (
  id text primary key,
  section text not null,
  label text not null,
  description text,
  aspect_ratio text not null default '16:9',
  recommended_dimensions text not null default '1920x1080',
  cloudinary_url text not null,
  cloudinary_public_id text,
  alt_text text,
  updated_at timestamp with time zone default now()
);

-- 2. Table: Campus Gallery Photos (/gallery)
create table if not exists public.campus_gallery (
  id uuid primary key default gen_random_uuid(),
  category text not null,
  title text not null,
  caption text,
  cloudinary_url text not null,
  cloudinary_public_id text,
  sort_order int default 0,
  created_at timestamp with time zone default now(),
  updated_at timestamp with time zone default now()
);

-- Enable Row Level Security (RLS)
alter table public.site_media_slots enable row level security;
alter table public.campus_gallery enable row level security;

-- Policies: Everyone can read public site media
create policy "Allow public read access on site_media_slots"
  on public.site_media_slots for select
  using (true);

create policy "Allow public read access on campus_gallery"
  on public.campus_gallery for select
  using (true);

-- Policies: Allow updates/inserts with anon/service key (or protected via our Next.js API)
create policy "Allow all operations for site_media_slots"
  on public.site_media_slots for all
  using (true)
  with check (true);

create policy "Allow all operations for campus_gallery"
  on public.campus_gallery for all
  using (true)
  with check (true);

-- 3. Initial Seed Data for Site Media Slots
insert into public.site_media_slots (id, section, label, description, aspect_ratio, recommended_dimensions, cloudinary_url, alt_text)
values
  ('brand_logo', 'brand', 'School Logo / Crest', 'Main school emblem displayed in navigation, preloader, and footer.', '1:1', '512x512', '/school_logo.png', 'Agape Academy International Logo'),
  ('home_hero', 'homepage', 'Homepage Hero Background', 'Full-bleed background photography introducing the school on the homepage.', '16:9', '2560x1440', '/banner.jpg', 'Agape Academy campus and students'),
  ('home_intro_cover', 'homepage', 'Our Philosophy Editorial Photo', 'Editorial photo alongside core pillars.', '4:3', '1600x1200', '/cover.jpg', 'Teacher speaking with Agape Academy students'),
  ('home_wellbeing', 'homepage', 'Wellbeing & Pastoral Care Photo', 'Featured photography in Wellbeing section.', '4:3', '1400x1050', '/together.jpg', 'Students connecting on campus'),
  ('home_principal', 'homepage', 'Principal Official Portrait', 'Official portrait accompanying the Welcome Message.', '3:4', '900x1200', '/girl_grad.jpg', 'Principal, Agape Academy International'),
  ('about_hero', 'about', 'About Page Hero Banner', 'Cinematic full-width background photo at top of About page.', '16:9', '2560x1440', '/banner.jpg', 'Agape Academy community banner'),
  ('academics_hero', 'academics', 'Academics Hero Background', 'Hero parallax image on the academics journey overview.', '16:9', '2200x1240', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2200&q=90', 'Students learning together'),
  ('academics_stage_early_years', 'academics', 'Early Years Stage (Ages 3–5)', 'Early childhood learning and exploration.', '4:3', '1400x1050', 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&w=1800&q=85', 'Early Years students exploring and learning'),
  ('academics_stage_primary', 'academics', 'Primary School Stage (Ages 6–10)', 'Foundational primary classroom learning.', '4:3', '1400x1050', 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1800&q=85', 'Primary school students engaged in study'),
  ('academics_stage_middle', 'academics', 'Middle School Stage (Ages 11–13)', 'Middle school learners developing critical thinking.', '4:3', '1400x1050', 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1800&q=85', 'Middle school students in discussion'),
  ('academics_stage_high_school', 'academics', 'High School Stage (Ages 14–18)', 'Senior students preparing for university.', '4:3', '1400x1050', '/grad_01.jpg', 'Senior high school students'),
  ('academics_abeka_feature', 'academics', 'Abeka Curriculum Feature Card', 'Showcase image for the Abeka Christian curriculum.', '4:3', '1200x900', '/abek.jpg', 'Abeka curriculum at Agape Academy International'),
  ('admissions_hero', 'admissions', 'Admissions Hero Background', 'Welcome photo for prospective families on the admissions page.', '16:9', '2400x1350', 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=90', 'Students learning and connecting together'),
  ('admissions_campus_preview', 'admissions', 'Book a Visit / Campus Tour Card', 'Campus environment photo for visit bookings.', '16:9', '1600x900', 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=1600&q=90', 'Agape Academy campus grounds'),
  ('student_life_hero', 'student_life', 'Student Life Hero Banner', 'Vibrant photo showcasing student activities.', '16:9', '2400x1350', 'https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=2400&q=90', 'Student life at Agape Academy'),
  ('student_life_sports', 'student_life', 'Sports & Athletics Feature', 'Students participating in athletics and games.', '4:3', '1400x1050', '/games_3.jpg', 'Students competing on sports day'),
  ('student_life_community', 'student_life', 'Growing Together Grid Photo', 'Fellowship and student community.', '16:9', '1800x1000', '/together.jpg', 'Students growing together'),
  ('contact_hero', 'about', 'Contact Page Hero Background', 'Hero background on the Contact page.', '16:9', '2000x1125', '/changed.png', 'Agape Academy International campus')
on conflict (id) do nothing;
