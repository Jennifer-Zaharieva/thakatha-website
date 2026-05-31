# Thakatha — Photography Studio Website

Fine Art Reproduction · Product / E-commerce · Events · Layout & Design
Built with **Next.js (App Router)**, **Tailwind CSS**, **Supabase** and **Resend**, deployable on **Vercel**.

---

## What's in here

```
app/
  page.tsx                 Landing page (4 sections + descriptions)
  art-reproduction/        Art Reproduction (gallery from your archive)
  product/                 Product / E-commerce photography
  events/                  Events photography
  layout-design/           Layout & Design + the brief → quote form
  api/brief/route.ts       Saves the brief to Supabase + emails you
components/                Nav, Footer, Gallery, BriefForm, etc.
lib/
  content.ts               All copy, contact details, client list
  images.ts                Image manifest + Supabase URL switch
  supabase.ts              Supabase clients
supabase/schema.sql        Run this in Supabase to create the briefs table
.env.local.example         Copy to .env.local and fill in
```

The font is **Plus Jakarta Sans** throughout, loaded via `next/font` and used
across its full weight range (200–800) for a chic, gallery-grade hierarchy.

---

## 1. Run it locally

Requires Node 18.18+ (or 20+).

```bash
npm install
cp .env.local.example .env.local   # fill in your keys (see below)
npm run dev                         # http://localhost:3000
```

The site works immediately with built-in fallback images, even before you
configure Supabase — so you can see the full design first.

## 2. Push to GitHub

Create an empty repo, then from this folder:

```bash
git init
git add .
git commit -m "Thakatha website"
git branch -M main
git remote add origin https://github.com/YOU/thakatha.git
git push -u origin main
```

## 3. Deploy on Vercel

1. Vercel → **Add New → Project** → import your GitHub repo.
2. Framework preset is auto-detected as **Next.js** — no changes needed.
3. Add the environment variables from `.env.local.example` under
   **Settings → Environment Variables**.
4. Deploy.

---

## 4. Supabase setup

1. In your Supabase project: **SQL Editor → New query**, paste the contents of
   `supabase/schema.sql`, run it. This creates the private `briefs` table.
2. **Storage → New bucket** → name it `site-images` and toggle **Public** on.
3. Upload your downloaded images using the paths listed in `lib/images.ts`
   (e.g. `art-reproduction/art-01.jpg`, `sections/product.jpg`).
4. Copy your public storage base URL and set:
   ```
   NEXT_PUBLIC_SUPABASE_STORAGE_URL=https://YOURPROJECT.supabase.co/storage/v1/object/public/site-images
   ```
   Every image now serves from your Supabase bucket automatically.

### Where your leads go

Each submitted brief is inserted into the `briefs` table. View them in
Supabase → **Table Editor → briefs**, newest first.

## 5. Email quotes (optional, via Resend)

So you get an email the moment a brief comes in:

1. Sign up at [resend.com](https://resend.com), verify a sending domain,
   create an API key.
2. Set `RESEND_API_KEY`, `QUOTE_NOTIFICATION_EMAIL` (your inbox) and
   `QUOTE_FROM_EMAIL` (an address on your verified domain).

If these are left blank, briefs are still saved to Supabase — you just won't
get the email ping. You then reply to the client with your quote.

---

## Editing content

- **Copy, contact, client list, section descriptions** → `lib/content.ts`
- **Gallery images / image paths** → `lib/images.ts`
- **Form questions** → `components/BriefForm.tsx` (and add matching columns in
  `supabase/schema.sql` if you add fields you want stored)
- **Colours & type scale** → `tailwind.config.ts`

## Notes

- The three founders' personal names have been removed everywhere; the brand
  **Thakatha** and the client/gallery roster are retained.
- Images currently fall back to the original CDN so the site looks complete out
  of the box — switch to Supabase any time by setting the storage URL.
