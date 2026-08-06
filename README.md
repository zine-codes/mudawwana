# مدونة — Mudawwana

> **مدونتي بالعربية** — My Arabic blog, built with Astro.

A simple, free, and fully **RTL Arabic blog** built with [Astro](https://astro.build)
and deployed on **Cloudflare Pages**. Write a Markdown file, push it, and the post
goes live in about a minute. No database, no backend, no cost.

The repo also works as a **template** — clone it, fill in your details, and you
have your own Arabic blog.

[![Live](https://img.shields.io/badge/live-mudawwana.pages.dev-blue)](https://mudawwana.pages.dev)
![Astro](https://img.shields.io/badge/Astro-7-5f43e9)
[![License](https://img.shields.io/badge/license-All%20rights%20reserved-blue)](#license)

## Why this blog?

- **100% free** — Astro + Cloudflare Pages free tier. No servers to rent.
- **Right-to-left by default** — designed for Arabic, works out of the box.
- **One file per post** — articles are plain Markdown in `src/content/articles/`.
- **Auto-generated pages** — categories, post pages, home page, 404, RSS feed, sitemap, and a PWA (installable as an app, works offline).
- **Dark mode** included.
- **Type-safe** — every article is validated against a schema, so a typo in a post won't silently break the build.
- **Tested** — Vitest covers categories and i18n helpers.

## Quick start

Requires **Node.js ≥ 22.12** (Astro 7's minimum).

```bash
npm install        # install dependencies
npm run dev        # preview at http://localhost:4321
npm run build      # build the site into dist/
npm run check      # type-check and lint errors
npm test           # run tests
```

A welcome post ships at `src/content/articles/first.md` so the site works out of the box — keep it, edit it, or delete it once you start writing.

## Write your first post

Add a file like `src/content/articles/my-post.md`:

```markdown
---
title: "عنوان المقال"
description: "وصف قصير يظهر في نتائج البحث."
date: 2026-08-01
category: tools
url: "https://example.com"
featured: true
---

اكتب محتوى المقال هنا...
```

Frontmatter fields:

| Field         | Required | Notes |
|---------------|----------|-------|
| `title`       | Yes      | Post title |
| `description` | No       | Short summary for search results & sharing |
| `date`        | Yes      | `YYYY-MM-DD` |
| `category`    | Yes      | Any word — new categories appear automatically |
| `url`         | No       | Shows a "Visit" button when set |
| `featured`    | No       | `true` pins the post to the featured section |

## Project structure

```
src/
├── content/articles/   ← your Markdown posts live here
├── data/
│   ├── site.ts         ← site name, URL, email (edit before deploying)
│   └── categories.ts   ← optional category labels & ordering
├── layouts/Layout.astro
├── components/         ← article card, category card
├── pages/              ← home, categories, post, 404, RSS
├── styles/global.css
└── content.config.ts   ← article schema
```

## Before you deploy

| What | Where |
|------|-------|
| Site name | `src/data/site.ts` and `public/manifest.webmanifest` |
| Contact email | `src/data/site.ts` and `public/.well-known/security.txt` |
| Site URL | `src/data/site.ts`, `astro.config.mjs`, `public/robots.txt`, `public/.well-known/security.txt` |
| App icons | PNGs in `public/` (regenerate from `public/icon.svg`) |

## Deploy on Cloudflare Pages (free)

1. Create a new GitHub repository and push this project to it.
2. In the [Cloudflare dashboard](https://dash.cloudflare.com): **Workers & Pages → Create → Pages → Connect to Git**.
3. Pick the repository and set:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Click **Save and Deploy**. You'll get a `*.pages.dev` URL.

> The site URL is set in `src/data/site.ts` (`https://mudawwana.pages.dev`) — update it if your domain changes.

## Security notes

- The `Content-Security-Policy` in `public/_headers` uses **sha256 hashes** for the two tiny inline scripts (the theme-init script in `src/layouts/Layout.astro` and the reload script in `public/offline.html`). If you edit those scripts, the hashes no longer match and the scripts get blocked — regenerate them by building and hashing the output:

  ```bash
  npm run build && node -e '
  const fs = require("fs"), crypto = require("crypto");
  for (const file of ["dist/index.html", "dist/offline.html"]) {
    for (const m of fs.readFileSync(file, "utf8").matchAll(/<script>([\s\S]*?)<\/script>/g)) {
      console.log(file, "sha256-" + crypto.createHash("sha256").update(m[1]).digest("base64"));
    }
  }'
  ```

- All other scripts are bundled by Astro into `/_astro/*.js` and load same-origin, so `script-src 'self'` covers them.

## Tech stack

- [Astro](https://astro.build) — content-first static site framework
- [Cloudflare Pages](https://pages.cloudflare.com) — global free hosting
- [@astrojs/rss](https://github.com/withastro/astro) + [@astrojs/sitemap](https://github.com/withastro/astro) — feeds & SEO
- PWA features (manifest, service worker, offline page)

## Related projects

More apps by the same author:

- **مدونة (Mudawwana)** — this project: <https://mudawwana.pages.dev>
- All other apps: <https://zinedev.pages.dev>

## Contact

- Email: **send.zine@gmail.com**

## License

**All rights reserved.** No license is granted — this repository is not open source.

