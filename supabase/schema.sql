-- Thakatha — Supabase schema
-- Run this in the Supabase SQL Editor (Dashboard → SQL → New query).

create table if not exists public.briefs (
  id           uuid primary key default gen_random_uuid(),
  created_at   timestamptz not null default now(),
  name         text not null,
  email        text not null,
  phone        text,
  organisation text,
  services     text[] default '{}',
  brief        text not null,
  quantity     text,
  dimensions   text,
  location     text,
  deliverables text,
  timeline     text,
  budget       text,
  handled      boolean not null default false
);

-- Enable Row Level Security. The website writes via the service-role key
-- (used only on the server in app/api/brief/route.ts), which bypasses RLS,
-- so we do NOT add a public insert policy. This keeps the table private:
-- no one with the anon key can read or write your leads.
alter table public.briefs enable row level security;

-- Optional: an index for sorting your inbox of leads by date.
create index if not exists briefs_created_at_idx on public.briefs (created_at desc);

-- ---------------------------------------------------------------------------
-- STORAGE
-- Create a PUBLIC bucket named `site-images` (Dashboard → Storage → New bucket,
-- toggle "Public bucket" on). Upload images using the paths in lib/images.ts,
-- e.g.  art-reproduction/art-01.jpg,  sections/product.jpg
-- Then set NEXT_PUBLIC_SUPABASE_STORAGE_URL (see .env.local.example).
-- ---------------------------------------------------------------------------
