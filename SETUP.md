# Monograph Setup Checklist

Before deploying your Monograph portfolio, complete this checklist to ensure everything is configured correctly.

## Essential Configuration

### 1. Site Configuration (`src/config/site.ts`)
This is the **most important step**. All your site metadata comes from this single file.

- [ ] Updated `name` with your portfolio name
- [ ] Updated `title` with your name or brand
- [ ] Updated `description` with your portfolio description
- [ ] Updated `url` with your actual domain (not `monograph.vercel.app`)
- [ ] Updated `author.name` with your name
- [ ] Updated `author.email` with your email (optional)
- [ ] Updated `author.twitter` with your Twitter handle (optional)
- [ ] Updated `author.github` with your GitHub username (optional)
- [ ] Customized navigation menu in `nav` array
- [ ] Configured feature toggles (`search`, `darkMode`, `analytics`)

### 2. Content Files
- [ ] Updated `src/content/pages/home.md` with your bio/intro
- [ ] Updated `src/content/pages/cv.md` with your CV/contact info
- [ ] Updated `src/content/pages/about.md` with your about page content
- [ ] Updated `src/content/pages/links.md` (if using) with your social links

### 3. Projects
- [ ] Deleted **all** demo projects (files starting with `00-`, `01-`, `02-`, etc.)
- [ ] Added your own projects in `src/content/projects/`
- [ ] Each project has proper frontmatter: `title`, `type`, `year`, `medium`, `role`
- [ ] Project descriptions added for better context and search

### 4. Assets & Media
- [ ] Created custom `/public/og-image.png` (1200x630px recommended)
- [ ] Updated `/public/favicon.svg` with your favicon
- [ ] Added project images to `/public/images/` directory
- [ ] **Optimized all images** before uploading (use TinyPNG, Squoosh, etc.)
- [ ] Verified image file sizes (aim for <500KB for large images, <300KB for gallery images)

### 5. SEO Files
- [ ] Updated sitemap URL in `/public/robots.txt` with your actual domain
- [ ] Verified `src/pages/sitemap.xml.ts` pulls from correct site config

## Optional Customization

### Visual Design
- [ ] Customized CSS variables in `src/styles/global.css` (colors, fonts, spacing)
- [ ] Updated font selection if different from Atkinson Hyperlegible
- [ ] Adjusted color scheme for light/dark modes
- [ ] Modified typography scales if needed
- [ ] Tested layout consistency across all pages

### Features
- [ ] Decided on search functionality (enable/disable in `src/config/site.ts`)
- [ ] Set up analytics if desired (Google Analytics ID in site config)
- [ ] Customized footer text if desired
- [ ] Tested touch/swipe navigation on mobile devices
- [ ] Verified keyboard navigation works properly

### SEO & Social
- [ ] Verified all meta tags pull from `src/config/site.ts`
- [ ] Created social media preview images (1200x630px OG image)
- [ ] Tested Open Graph tags with social media validators
- [ ] Confirmed canonical URLs are correct

### Development Warning
- [ ] **Warning disappears automatically** once you update `src/config/site.ts`
- [ ] Optional: Remove warning component entirely if preferred (see Setup Guide)

## Technical Checklist

### Development
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` and site loads without errors
- [ ] Tested search functionality (if enabled)
- [ ] Tested navigation between all pages
- [ ] Verified responsive design on mobile (320px, 768px, 1024px widths)
- [ ] Tested image galleries with touch/keyboard navigation
- [ ] Verified development warning appears with default config (then disappears when updated)

### Build & Deploy
- [ ] Ran `npm run build` successfully with **zero errors**
- [ ] Tested built site with `npm run preview`
- [ ] Verified all images load correctly
- [ ] Checked that all internal links work
- [ ] Confirmed external links open in new tabs (if desired)
- [ ] Tested gallery functionality in production build
- [ ] Confirmed no development warnings in production

### Deployment Platform
- [ ] Connected repository to deployment platform (Vercel, Netlify, etc.)
- [ ] Set custom domain (if not using platform subdomain)
- [ ] Configured SSL certificate (usually automatic)
- [ ] Set up redirects if needed
- [ ] Tested deployment URL thoroughly

## Pre-Launch Validation

### Content Review
- [ ] Proofread all text content for typos and grammar
- [ ] Verified all project information is accurate and up-to-date
- [ ] Confirmed all external links are working (use a link checker)
- [ ] Checked that contact information is correct
- [ ] Added proper alt text for all images
- [ ] Verified image file names are descriptive

### Performance & Accessibility
- [ ] Tested site speed (use Lighthouse or PageSpeed Insights)
- [ ] Verified images are optimized (check file sizes in Network tab)
- [ ] Confirmed images load without layout shift
- [ ] Tested accessibility with screen readers
- [ ] Verified keyboard navigation works for galleries
- [ ] Checked color contrast meets WCAG AA standards
- [ ] Tested touch navigation on actual mobile devices
- [ ] Confirmed reduced motion preferences are respected

### Browser Testing
- [ ] Tested in Chrome/Chromium (latest)
- [ ] Tested in Firefox (latest)
- [ ] Tested in Safari (if possible)
- [ ] Tested on iOS Safari (iPhone/iPad)
- [ ] Tested on Android Chrome
- [ ] Verified dark/light mode switching works
- [ ] Checked that site works with JavaScript disabled (for core content)

## Final Steps

1. **Remove Demo Content**
   - Delete all documentation projects (`00-`, `01-`, etc. files)
   - Ensure no placeholder text remains

2. **Final Configuration Check**
   - Verify `src/config/site.ts` has your real information
   - Update robots.txt with your actual domain
   - Check footer text

3. **Image Audit**
   - Verify all images are optimized (use ImageOptim, TinyPNG, Squoosh)
   - Check file sizes in browser DevTools Network tab
   - Target: <500KB for hero images, <300KB for gallery images

4. **Performance Check**
   - Run Lighthouse audit (aim for 95+ performance score)
   - Test on slow 3G connection
   - Verify lazy loading works

5. **SEO Verification**
   - Test with [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
   - Test with [Twitter Card Validator](https://cards-dev.twitter.com/validator)
   - Verify sitemap is accessible at `/sitemap.xml`

6. **Final Testing**
   - Clear browser cache and test fresh load
   - Test on multiple devices
   - Check analytics are tracking (if enabled)

7. **Backup & Deploy**
   - Commit all changes to version control
   - Tag release as v1.0.0
   - Push to hosting platform
   - Monitor deployment logs for errors

8. **Post-Deployment**
   - Verify live site loads correctly
   - Test all pages and links
   - Check mobile experience
   - Monitor analytics for first 24 hours

## Quick Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview

# Type check
npx astro check
```

## Image Optimization Guide

**Important:** Monograph serves images directly from `/public/images/`, so you must optimize them before uploading.

### Recommended Tools
- **[TinyPNG](https://tinypng.com/)** - Simple drag-and-drop (free, 20 images at a time)
- **[Squoosh](https://squoosh.app/)** - Google's web tool with manual control
- **[ImageOptim](https://imageoptim.com/)** - Mac app for batch processing
- **[Sharp CLI](https://sharp.pixelplumbing.com/)** - Command-line tool for automation

### Quick Optimization Script (Optional)
If you have many images, use Sharp CLI:

```bash
# Install Sharp CLI globally
npm install -g sharp-cli

# Optimize all JPGs in a folder
sharp -i "public/images/*.jpg" -o "public/images/optimized/" --quality 85 --progressive

# Convert to WebP (25-35% smaller)
sharp -i "public/images/*.jpg" -o "public/images/optimized/" -f webp --quality 85
```

### Target Sizes
| Image Type | Width | File Size | Quality |
|------------|-------|-----------|---------|
| Hero images | 1200-1600px | < 500KB | 80-85% |
| Gallery images | 800-1200px | < 300KB | 75-85% |
| Thumbnails | 400-600px | < 150KB | 70-80% |

## Troubleshooting

### Build fails?
- Check all markdown files have valid frontmatter
- Verify image paths start with `/images/`
- Ensure `site.ts` has valid TypeScript syntax
- Run `npx astro check` for detailed errors

### Images not loading?
- Verify images are in `/public/images/` directory
- Check file paths are correct (case-sensitive)
- Ensure image files aren't corrupted
- Clear browser cache

### Configuration warning won't disappear?
- Check you've updated **multiple** fields in `src/config/site.ts`
- Ensure URL doesn't include "monograph.vercel.app" or "localhost"
- Restart dev server after changes
- Warning only checks multiple indicators to avoid false positives

### Gallery not working?
- Verify Gallery component is imported correctly
- Check image array format matches documentation
- Ensure JavaScript is enabled
- Test in different browsers

### Content not appearing?
- Check file paths in `src/content/`
- Verify frontmatter schema matches `src/content/config.ts`
- Ensure markdown files have `.md` extension
- Restart dev server

### Mobile layout broken?
- Test on actual device, not just browser resize
- Check viewport meta tag is present
- Verify media queries in CSS
- Clear mobile browser cache

## Need Help?

- **GitHub Issues**: [https://github.com/tandukuda/monograph/issues](https://github.com/tandukuda/monograph/issues)
- **Documentation**: Read the in-app documentation projects (before deleting them)
- **Astro Docs**: [https://docs.astro.build](https://docs.astro.build)

## Version Note

This checklist is for **Monograph v1.0.0**. Future versions may include:
- Automatic image optimization (WebP/AVIF conversion)
- Advanced search with fuzzy matching
- Print stylesheet
- More customization options

---

**Ready to launch?** Once you've completed this checklist, your Monograph portfolio is ready for production!

**Post-launch tip:** Keep a local backup and document any customizations you make for future reference.
