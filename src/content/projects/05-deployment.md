---
title: "Deployment"
type: "Documentation"
year: "2026"
tags: ["guide", "hosting"]
description: "How to deploy Monograph to production"
---

# Deployment

Monograph is a static site and can be deployed anywhere.

## Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com/new](https://vercel.com/new)
3. Import your repository
4. Vercel auto-detects Astro
5. Click "Deploy"

**Build settings are automatic.** No configuration needed.

## Netlify

1. Push to GitHub
2. Go to [app.netlify.com](https://app.netlify.com)
3. "Add new site" → "Import from Git"
4. Build command: `npm run build`
5. Publish directory: `dist`

## GitHub Pages

Add to `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/monograph',
});
```

Then enable GitHub Pages in repo settings.

## Custom Domain

After deployment:

1. Add your domain in hosting settings
2. Update DNS records (A or CNAME)
3. Update `siteUrl` in `ThreeColumnLayout.astro` for Open Graph tags

## Pre-Deployment Checklist

- [ ] Delete documentation projects (files starting with `00-`, `01-`, etc.)
- [ ] Add your own projects
- [ ] Update `src/content/pages/cv.md`
- [ ] Update footer text
- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Update `siteUrl` in layout for meta tags
- [ ] Test build locally: `npm run build && npm run preview`
