# Monograph Setup Checklist

Before deploying your Monograph portfolio, complete this checklist to ensure everything is configured correctly and you're using all the latest features.

## Essential Configuration

### 1. Site Configuration (`src/config/site.ts`)
- [ ] Updated `name` with your portfolio name
- [ ] Updated `title` with your name or brand
- [ ] Updated `description` with your portfolio description
- [ ] Updated `url` with your actual domain (not the demo URL)
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
- [ ] Updated `src/content/pages/links.md` (if using) with your links

### 3. Projects
- [ ] Deleted all demo projects (files starting with `00-`, `01-`, `02-`, etc.)
- [ ] Added your own projects in `src/content/projects/`
- [ ] Each project has proper frontmatter with `title`, `type`, `year`
- [ ] Project descriptions are added for better search functionality

### 4. Assets & Media
- [ ] Created custom `/public/og-image.png` (1200x630px recommended)
- [ ] Updated `/public/favicon.svg` with your favicon
- [ ] Added project images to `/public/images/` directory
- [ ] Used HTML img tags for single images and `Gallery` component for carousels
- [ ] Verified image formats (JPG, PNG, WebP supported)

## Optional Customization

### Visual Design
- [ ] Customized CSS variables in `src/styles/global.css`
- [ ] Updated font selection (if different from Atkinson Hyperlegible)
- [ ] Adjusted color scheme for light/dark modes
- [ ] Modified typography scales and spacing
- [ ] Tested layout consistency across all pages

### Image Optimization
- [ ] Used HTML img tags for single images
- [ ] Used `Gallery` component for image carousels
- [ ] Configured image quality settings (75-95% recommended)
- [ ] Set up responsive breakpoints for different devices
- [ ] Tested image loading performance and lazy loading

### Features
- [ ] Configured search functionality (enabled/disabled)
- [ ] Set up analytics (Google Analytics ID in site config)
- [ ] Customized footer text or branding
- [ ] Tested touch/swipe navigation on mobile devices
- [ ] Verified keyboard navigation accessibility

### SEO & Social
- [ ] Verified all meta tags are pulling from your site config
- [ ] Created social media preview images (1200x630px OG image)
- [ ] Set up proper canonical URLs
- [ ] Added structured data for rich snippets
- [ ] Tested page load speeds and Core Web Vitals

### Development Warning (Optional)
- [ ] Removed development warning if desired (see instructions below)

## Technical Checklist

### Development
- [ ] Ran `npm install` successfully
- [ ] Ran `npm run dev` and site loads without errors
- [ ] Tested search functionality (if enabled)
- [ ] Tested navigation between pages
- [ ] Verified responsive design on mobile
- [ ] Tested image galleries with touch/keyboard navigation
- [ ] Confirmed image optimization is working (WebP/AVIF formats)
- [ ] Verified development warning appears with default config

### Build & Deploy
- [ ] Ran `npm run build` successfully with no errors
- [ ] Tested built site with `npm run preview`
- [ ] Verified all images and assets load correctly
- [ ] Checked that all internal links work
- [ ] Confirmed external links open in new tabs
- [ ] Validated optimized images are being generated
- [ ] Tested gallery functionality in production build
- [ ] Confirmed no development warnings in production

### Deployment Platform
- [ ] Connected your repository to deployment platform (Vercel, Netlify, etc.)
- [ ] Set custom domain (if not using platform subdomain)
- [ ] Configured SSL certificate
- [ ] Set up redirects (if needed)
- [ ] Tested deployment URL

## Pre-Launch Validation

### Content Review
- [ ] Proofread all text content for typos and grammar
- [ ] Verified all project information is accurate and up-to-date
- [ ] Confirmed all external links are working
- [ ] Checked that contact information is correct
- [ ] Added proper alt text for all images
- [ ] Verified image captions are descriptive and helpful

### Performance & Accessibility
- [ ] Tested site speed with optimized images (should be very fast)
- [ ] Verified Core Web Vitals scores (LCP, FID, CLS)
- [ ] Confirmed images load progressively without layout shift
- [ ] Tested accessibility with screen readers
- [ ] Verified keyboard navigation works for galleries
- [ ] Checked color contrast ratios meet WCAG standards
- [ ] Tested touch navigation on mobile devices
- [ ] Confirmed reduced motion preferences are respected

### Browser Testing
- [ ] Tested in Chrome/Chromium
- [ ] Tested in Firefox
- [ ] Tested in Safari (if possible)
- [ ] Tested on mobile devices
- [ ] Verified dark/light mode switching

## Final Steps

1. **Remove Demo Content**: Delete all documentation projects (00-, 01-, etc. files)
2. **Final Configuration**: Ensure `src/config/site.ts` has your real information
3. **Image Optimization**: Verify single images use HTML img tags, carousels use Gallery component
4. **Performance Check**: Test Core Web Vitals and image loading speeds
5. **Environment Check**: Ensure no development warnings appear in production
6. **Social Media**: Test how your site appears when shared on social platforms
7. **Backup**: Commit all changes to version control
8. **Deploy**: Push to your hosting platform
9. **Verify**: Check the live site thoroughly on desktop and mobile
10. **Monitor**: Check analytics and performance after deployment

## Quick Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Troubleshooting

**Build fails?**
- Check that all markdown files have proper frontmatter
- Verify image paths are correct (use `/images/` for public folder)
- Ensure site.ts configuration is valid TypeScript
- Confirm Gallery components are imported correctly for carousels

**Image issues?**
- Verify images exist in `/public/images/` directory
- Check image file formats are supported (JPG, PNG, WebP, AVIF)
- Ensure image component props are correctly formatted
- Clear browser cache for updated images

**Performance issues?**
- Check image file sizes (should be significantly reduced with optimization)
- Verify lazy loading is working (images load as you scroll)
- Test Core Web Vitals scores in browser dev tools
- Confirm WebP/AVIF formats are being served to supported browsers

**Gallery not working?**
- Ensure Gallery component is imported correctly
- Verify image array format matches component requirements
- Check JavaScript is enabled for touch/keyboard navigation
- Test on different devices for touch functionality

**Content not appearing?**
- Check file paths in src/content/
- Verify frontmatter schema matches config.ts
- Ensure markdown files have .md extension
- Confirm content collections are properly configured

**Need help?**
- Check the GitHub issues: https://github.com/tandukuda/monograph/issues
- Review the documentation projects (before deleting them)
- File a bug report with details

## Removing the Development Warning (Optional)

By default, an orange warning box appears in development mode when using placeholder configuration values. This helps prevent accidental deployment with demo data.

**To remove the warning completely:**

1. Delete the warning component file:
   ```bash
   rm src/components/DevWarning.astro
   ```

2. Edit `src/layouts/ThreeColumnLayout.astro`:
   - Remove the import line: `import DevWarning from "../components/DevWarning.astro";`
   - Remove the component line: `<DevWarning />`

**Note:** The warning only appears in development mode (`npm run dev`) and automatically disappears once you update your site configuration. Removal is entirely optional.

---

**Ready to launch?** Once you've completed this checklist, your Monograph portfolio should be ready for the world!