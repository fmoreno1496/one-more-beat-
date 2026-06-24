# One More Beat Movement

A movement for people who keep going.
One More Beat. One More Breath. One More Day.

A premium black-and-white lifestyle site built with Next.js, TypeScript, and
Tailwind CSS — calm, editorial, and intentional.

## Tech stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Google Fonts** via `next/font` (Fraunces, Newsreader, IBM Plex Mono)
- Vercel-ready

## Run locally

```bash
npm install
npm run dev
# open http://localhost:3000
```

Build for production:

```bash
npm run build
npm run start
```

## Project structure

```
app/
  layout.tsx              Root layout, fonts, SEO metadata
  page.tsx                Home page — assembles all sections + JSON-LD
  globals.css             Design tokens, beat-line + reveal animations
  sitemap.ts / robots.ts  SEO
  api/subscribe/route.ts  Email capture endpoint (PLACEHOLDER backend)
  components/
    Hero.tsx              Black hero — OMB logo + monospace mantra
    Manifesto.tsx         The spine — continuous editorial founder letter
    WhoThisIsFor.tsx      Minimal large-type section
    Join.tsx              Email capture form
    Footer.tsx            Footer
    Reveal.tsx            Scroll-reveal wrapper (respects reduced-motion)
    Signature.tsx         Handwritten "Fernando Moreno" signature (Mr Dafoe)
```

## Design system

Black and white only. No gradients, no color, no icons, no stock photos, no
medical or heart imagery. The whole page reads as one continuous founder
manifesto on black — a magazine spread, not a website. Two typographic voices
carry it: a serif reading column for the letter, and oversized monospace caps
for the lines worth hanging on a wall (the pull quotes).

- **Display:** Fraunces (light, large, tight)
- **Body:** Newsreader (editorial reading serif — the letter)
- **Utility / mantra / pull quotes:** IBM Plex Mono (tracked-out caps)
- **Signature:** Mr Dafoe (handwritten "Fernando Moreno")

The logo file lives at `public/omb-logo.png` (black background removed so it
sits cleanly on the hero). Swap that file to update the mark.

All tokens live in `app/globals.css` under `:root` and `@theme inline`.

## Connecting the email form

The form at **Join the Movement** posts to `app/api/subscribe/route.ts`, which
is currently a **placeholder** — it validates input and logs server-side, then
returns success. No data is stored or sent until you wire a provider.

Open `app/api/subscribe/route.ts`. The file contains copy-paste-ready snippets
for **ConvertKit (Kit)**, **Mailchimp**, and a note for any other provider
(Resend, Beehiiv, Loops, Buttondown). Pick one, add the documented environment
variables in Vercel, and replace the `PLACEHOLDER` block.

### ConvertKit (quickest)
Add in Vercel → Settings → Environment Variables:
```
CONVERTKIT_API_KEY=...
CONVERTKIT_FORM_ID=...
```
Then swap the placeholder block per the in-file instructions.

### Mailchimp
```
MAILCHIMP_API_KEY=...
MAILCHIMP_LIST_ID=...
MAILCHIMP_SERVER=us21
```

## Deploy to Vercel

1. Push this repo to GitHub.
2. In Vercel, **Add New → Project** and import the repo.
3. Framework preset auto-detects **Next.js** — no config needed.
4. (Optional) Add email-provider env vars from the section above.
5. **Deploy.**
6. Add your domains in **Settings → Domains**:
   `onemorebeatmovement.com` and `ombmovement.com`.

Update the `SITE_URL` constant in `app/layout.tsx` and the URLs in
`app/sitemap.ts` / `app/robots.ts` if your primary domain differs.

## Accessibility & performance

- Semantic landmarks, labelled headings, skip link.
- Visible keyboard focus; form inputs have associated labels.
- `prefers-reduced-motion` disables all animation.
- Self-hosted fonts via `next/font` (no layout shift, no external requests).
- Fully static home route — fast first load.


## Update the Facebook Group link

The "Join the Facebook Group" button (Community section) and the footer link
point to a PLACEHOLDER URL until you create the group. When it exists, update
the same line in BOTH files:

- app/components/Community.tsx
- app/components/Footer.tsx

Change `FACEBOOK_GROUP_URL` to your real group URL, then commit and push:
`git add . && git commit -m "Add Facebook group link" && git push`

## New in this version

- Top nav (real OMB logo + links; collapses to logo + Reminders on mobile)
- Community section ("You don't have to do this alone")
- Free Reminders teaser on the home page
- New /reminders page: phone wallpapers + watch faces, free downloads (no email)
- Footer updated with social links (Facebook, TikTok, Instagram, Free Reminders)
- Downloadable assets live in public/downloads/ (swap these files to update them)
