---
title: "Deployment"
type: "Documentation"
year: "2026"
tags: ["guide", "hosting"]
description: "How to deploy Monograph to production"
medium: ["docs"]
role: ["Developer"]
---

# Deployment

Monograph is a static site optimized for performance and can be deployed anywhere. With built-in image optimization and modern formats, your portfolio will load blazingly fast on any hosting platform.

## Vercel (Recommended)

1. **Configure your site** - Update `src/config/site.ts` with your domain
2. Push your code to GitHub
3. Go to [vercel.com/new](https://vercel.com/new)
4. Import your repository
5. Vercel auto-detects Astro settings
6. Click "Deploy"

**Build settings are automatic.** Vercel handles image optimization and static generation perfectly.

**Performance Features:**
- Automatic Edge Network distribution
- Image optimization works seamlessly
- WebP/AVIF formats supported
- Fast global CDN delivery

## Netlify

1. **Update configuration** - Set your domain in `src/config/site.ts`
2. Push to GitHub
3. Go to [app.netlify.com](https://app.netlify.com)
4. "Add new site" → "Import from Git"
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Deploy site

**Optimization Benefits:**
- Automatic image compression
- Modern format delivery (WebP/AVIF)
- Global CDN distribution
- Performance monitoring included

## GitHub Pages

1. **Update site configuration:**

In `astro.config.mjs`:
```javascript
export default defineConfig({
  site: 'https://yourusername.github.io',
  base: '/monograph',
  // Image optimization still works
  image: {
    experimentalLayout: true,
  },
});
```

2. **Update your site config** in `src/config/site.ts`:
```typescript
export const siteConfig = {
  url: "https://yourusername.github.io/monograph",
  // ... rest of your config
};
```

3. Enable GitHub Pages in repository settings
4. Choose source: GitHub Actions (recommended) or Deploy from branch

**Note:** Image optimization works perfectly with GitHub Pages static hosting.

## Custom Domain

After deployment with your custom domain:

1. **Add domain to hosting platform** (Vercel/Netlify settings)
2. **Update DNS records** - A record or CNAME as required
3. **Update site configuration** in `src/config/site.ts`:
   ```typescript
   export const siteConfig = {
     url: "https://yourdomain.com", // Your actual domain
     // ... rest of config
   };
   ```
4. **Redeploy** to update all meta tags and canonical URLs
5. **Test social sharing** to verify Open Graph images work

**SSL certificates** are automatically provisioned by most hosting platforms.

## Pre-Deployment Checklist

**Complete Checklist:** For a comprehensive pre-deployment checklist with detailed steps and validation, see [SETUP.md](https://github.com/tandukuda/monograph/blob/main/SETUP.md).

**Essential quick checks:**

### Essential Configuration
- [ ] **Configure site settings** - Update `src/config/site.ts` with your information
- [ ] **Delete documentation projects** - Remove files starting with `00-`, `01-`, etc.
- [ ] **Add your projects** - Create `.md` files in `src/content/projects/`
- [ ] **Update content pages** - Edit `src/content/pages/cv.md`, `home.md`, `about.md`

### Images & Assets
- [ ] **Create OG image** - Add `/public/og-image.png` (1200x630px)
- [ ] **Add project images** - Use `/public/images/` directory
- [ ] **Use optimized components** - Replace `<img>` with `<OptimizedImage>`
- [ ] **Add galleries** - Use `<Gallery>` component for image carousels

### Performance & SEO
- [ ] **Test image optimization** - Verify WebP/AVIF generation
- [ ] **Check Core Web Vitals** - Test with Lighthouse
- [ ] **Verify meta tags** - Ensure site config populates correctly
- [ ] **Test social sharing** - Check OG image and descriptions

### Final Testing
- [ ] **Build locally** - Run `npm run build && npm run preview`
- [ ] **Test all features** - Search, galleries, navigation
- [ ] **Mobile testing** - Touch navigation and responsive images
- [ ] **Remove dev warnings** - Ensure no configuration warnings appear

## Performance After Deployment

Your deployed Monograph portfolio includes:

**Image Optimization:**
- 60-75% smaller file sizes through WebP/AVIF
- Responsive images for all device sizes
- Progressive loading with lazy loading
- Layout stability (no content jumping)

**Core Web Vitals:**
- **LCP (Largest Contentful Paint)** - Optimized with image preloading
- **FID (First Input Delay)** - Minimal JavaScript for fast interaction
- **CLS (Cumulative Layout Shift)** - Explicit image dimensions prevent shifts

**SEO Benefits:**
- Structured data markup for rich snippets
- Optimized meta tags from centralized config
- Semantic HTML for better search ranking
- Fast loading speeds boost search rankings

## Monitoring Performance

After deployment, monitor your site's performance:

1. **Google PageSpeed Insights** - Test your live URL
2. **Core Web Vitals** - Monitor real user metrics
3. **Lighthouse** - Regular performance audits
4. **Analytics** - Track user engagement and loading times

Your optimized Monograph portfolio should consistently score 95+ in performance metrics!
