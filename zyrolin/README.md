# Zyrolin 🚀

The "how-to hub" — a multi-niche tutorial blog built with **Astro + React + Tailwind CSS**.
Static, fast, SEO-friendly, and ready for AdSense + affiliates.

## Stack

- **Astro 5** — static site generation (great for SEO + AdSense)
- **React 19** — interactive islands (search, newsletter)
- **Tailwind CSS 4** — styling
- **Content Collections** — Markdown articles organized by category cluster
- **@astrojs/sitemap** — automatic sitemap for Google

## Commands

```bash
npm run dev      # start dev server (http://localhost:4321)
npm run build    # build the static site to ./dist
npm run preview  # preview the built site
```

## How it's organized

```
src/
├── data/
│   ├── site.ts          # site name, nav, social links — edit to rebrand
│   └── categories.ts    # the 16 category clusters (add new ones here)
├── content/
│   ├── content.config.ts            # article schema
│   └── articles/<category>/<slug>.md # one Markdown file per article
├── components/          # Header, Footer, cards, SearchBar (React), etc.
├── layouts/             # BaseLayout (SEO head)
├── pages/
│   ├── index.astro      # homepage (hero, search, categories, latest)
│   ├── categories.astro # all topics
│   ├── [category]/index.astro      # category listing
│   ├── [category]/[slug].astro     # article page
│   └── about, contact, privacy, cookie-policy, terms, 404
└── styles/global.css    # design tokens + article prose styling
```

## Adding a new article

Create a Markdown file under `src/content/articles/<category>/`:

```markdown
---
title: "How to Do Something"
description: "One-sentence summary for SEO and cards."
category: "ai"          # must match a slug in src/data/categories.ts
type: "tutorial"        # tutorial | guide | list | comparison | fix
pubDate: 2026-06-24
featured: false         # true = show in homepage "Trending"
tags: ["example"]
---

Your content here. Use ## H2 headings — they auto-populate the
table of contents. Add a ## FAQ section near the end.
```

The homepage grid, category page, routing, sitemap and search index update
automatically — no other wiring needed.

## Adding a new category

Append an entry to `src/data/categories.ts` (slug, name, emoji, blurb,
description, accent color, tier). The folder, routing and navigation follow.

## Categories grow at their own pace

The homepage sorts categories by article count and shows a per-category count
("12 guides" / "Coming soon"). You do **not** need every category filled equally
— publish where it makes sense and the site stays coherent.

## Languages (i18n)

English is the base language (served at `/`). Spanish, German and French live
under `/es`, `/de`, `/fr`. A language switcher is in the header.

- **UI strings:** `src/i18n/ui.ts`
- **Category names/blurbs:** `src/i18n/categories.ts`
- **Article translations:** put a Markdown file with the *same slug* under
  `src/content/articles/<lang>/<category>/`. The language switcher links
  translations automatically; untranslated articles simply stay English-only.

## Dark mode & theme

Dark is the default; a toggle (persisted in `localStorage`) switches to light.
Colors are semantic CSS variables in `src/styles/global.css` that flip with
`[data-theme]` — use `bg-bg`, `bg-surface`, `text-fg`, `text-muted`,
`border-line`, `text-brand`, etc.

## Ads

`AdSlot.astro` (in-content) and `SideRailAds.astro` (fixed side skyscrapers,
shown ≥1500px) are placeholders. Drop in your AdSense code once approved.

## Deploy (static site)

Any static host works. The app is in the `zyrolin/` subfolder, so set the root
accordingly:

- **Netlify:** uses the included `netlify.toml` (base `zyrolin`).
- **Vercel:** set Root Directory = `zyrolin` (Astro auto-detected).
- **Cloudflare Pages:** Build = `npm run build`, Output = `zyrolin/dist`,
  Root = `zyrolin`.

## Generating articles with Claude

A project skill lives at `.claude/skills/zyrolin-article/`. Ask Claude to
"write a Zyrolin article about X in category Y" and it produces a correctly
formatted file. (Note: `.claude/` is gitignored, so it stays local to this
machine.)

## Before going live (checklist)

- [ ] Replace `site` URL and social links in `src/data/site.ts` / `astro.config.mjs`
- [ ] Add a real `public/og-default.png` (1200×630) for social sharing
- [ ] Wire `NewsletterForm.tsx` to your email provider
- [ ] Wire the contact form (Formspree or similar)
- [ ] Have the legal pages reviewed and add a cookie-consent banner
- [ ] Replace the `AdSlot` / `SideRailAds` placeholders with AdSense once approved
