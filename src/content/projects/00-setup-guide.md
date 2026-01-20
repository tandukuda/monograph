---
title: "Setup Guide"
type: "Documentation"
year: "2026"
tags: ["setup", "configuration", "getting-started"]
description: "Essential setup steps for customizing your Monograph portfolio"
---

# Setup Guide

Welcome! This guide will walk you through customizing Monograph for your portfolio, including the latest image optimization and configuration features.

## Quick Setup (5 minutes)

### 1. Site Configuration
**This is the most important step!** All your site information is centralized in one file:

```typescript
// src/config/site.ts
export const siteConfig: SiteConfig = {
  name: "Your Portfolio Name",        // ← Change this
  title: "Your Name",                 // ← Change this
  description: "Your description",    // ← Change this
  url: "https://yoursite.com",       // ← Your actual domain
  author: {
    name: "Your Name",               // ← Change this
    email: "your@email.com",         // ← Optional
    twitter: "@yourusername",        // ← Optional
    github: "yourusername",          // ← Optional
  },
  // Navigation menu (add/remove items as needed)
  nav: [
    { label: "index", href: "/" },
    { label: "about", href: "/about" },
    { label: "others", href: "/links" },
  ],
};
```

### 2. Replace Demo Content
Delete these documentation files (including this one):
- `00-setup-guide.md`
- `01-welcome-to-mograph.md`
- `02-adding-projects.md`
- `03-image-galleries.md`
- `04-customization.md`
- `05-deployment.md`

### 3. Add Your Content
Update these files with your information:
- `src/content/pages/home.md` - Your homepage bio
- `src/content/pages/cv.md` - Your CV/contact info
- `src/content/pages/about.md` - About page content

### 4. Add Your Projects
Create new `.md` files in `src/content/projects/` with this format:

```markdown
---
title: "Project Name"
type: "Web Design"
year: 2024
tags: ["web", "design"]
link: "https://project-url.com"
description: "Brief project description"
---

# Project Name
Your project content goes here...

# Adding Images
<OptimizedImage
  src="/images/project-screenshot.jpg"
  alt="Project screenshot"
  width={800}
  height={600}
  caption="Optimized image with WebP/AVIF support"
/>

# Adding Galleries
<Gallery
  images={[
    { src: "/images/step-1.jpg", alt: "Step 1", caption: "Initial design" },
    { src: "/images/step-2.jpg", alt: "Step 2", caption: "Development" },
    { src: "/images/step-3.jpg", alt: "Step 3", caption: "Final result" }
  ]}
  height="500px"
/>
```

## Advanced Features

### Image Optimization System
Monograph includes automatic image optimization with modern formats and responsive sizing:

**Single Images:**
```astro
import OptimizedImage from '../components/OptimizedImage.astro';

<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}
  height={800}
  quality={85}
  format="webp"
  sizes="(max-width: 768px) 100vw, 75vw"
  widths={[400, 800, 1200]}
  caption="Automatically optimized"
  loading="eager"
/>
```

**Interactive Galleries:**
```astro
import Gallery from '../components/Gallery.astro';

<Gallery
  images={[
    {
      src: "/images/project/screenshot-1.jpg",
      alt: "Homepage design",
      caption: "Clean, modern interface"
    },
    {
      src: "/images/project/screenshot-2.jpg",
      alt: "Dashboard view",
      caption: "User-friendly dashboard"
    }
  ]}
  height="600px"
  quality={90}
  loading="lazy"
/>
```

**Performance Benefits:**
- 60-75% smaller file sizes with WebP/AVIF
- Responsive images for all screen sizes
- Lazy loading with smooth animations
- Layout stability (no content jumping)
- SEO-optimized markup

## Customization Options

### Colors & Typography
Edit CSS variables in `src/styles/global.css`:

```css
:root {
  --font-main: "Your Font", monospace;
  --bg-color: #ffffff;
  --text-primary: #000000;
  --text-secondary: #666666;
  --border-color: #cccccc;
}
```

### Feature Toggles
Control features in `src/config/site.ts`:

```typescript
features: {
  search: true,     // Enable/disable search
  darkMode: true,   // Enable/disable dark mode
  analytics: "",    // Add Google Analytics ID
}
```
The warning only appears in development mode and automatically disappears once you update your site configuration.

### Performance Features
Monograph is optimized for speed and user experience:

**Core Web Vitals:**
- **LCP**: Optimized image loading and lazy loading
- **FID**: Minimal JavaScript, progressive enhancement
- **CLS**: Explicit image dimensions prevent layout shifts

**Image Optimization:**
- Automatic WebP/AVIF conversion with fallbacks
- Responsive breakpoints for all devices
- Progressive loading (critical images first)
- Touch-friendly galleries with keyboard navigation

**SEO & Accessibility:**
- Semantic HTML markup
- Screen reader compatible
- WCAG 2.1 AA compliant
- Structured data ready

### Navigation Menu
Customize the navigation in `src/config/site.ts`:

```typescript
nav: [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "contact", href: "/contact" },
  // Add more items as needed
]
```

### Remove Development Warning (Optional)
By default, a development warning appears in the top-right corner when using placeholder configuration values. This helps prevent accidental deployment with demo data.

**To remove the warning completely:**

1. Delete the warning component:
   ```bash
   rm src/components/DevWarning.astro
   ```

2. Remove it from the layout file (`src/layouts/ThreeColumnLayout.astro`):
   - Remove the import: `import DevWarning from "../components/DevWarning.astro";`
   - Remove the component: `<DevWarning />`

The warning only appears in development mode and automatically disappears once you update your configuration, so removal is entirely optional.

## File Structure

```
src/
├── config/
│   └── site.ts           ← Main configuration
├── content/
│   ├── pages/
│   │   ├── home.md       ← Homepage bio
│   │   ├── cv.md         ← Right sidebar CV
│   │   └── about.md      ← About page
│   └── projects/
│       └── your-project.md ← Your projects
├── components/
├── layouts/
└── styles/
    └── global.css        ← Styling
```

## Before You Deploy

1. **Update site configuration** - Don't forget `src/config/site.ts`!
2. **Delete documentation projects** - Remove all `00-`, `01-`, etc. files
3. **Add your OG image** - Create `/public/og-image.png` (1200x630px)
4. **Add your images** - Use OptimizedImage and Gallery components for best performance
5. **Optimize for performance** - Images are automatically optimized, but verify file sizes
6. **Test locally** - Run `npm run build` to check for errors
7. **Update domain** - Make sure your URL is correct in the config

## FAQ

### What is the orange warning box in development?
The development warning appears when you're using placeholder configuration values (like the demo URL or default author name). It's designed to help prevent accidental deployment with demo data.

### How do I make the warning disappear?
Simply update your `src/config/site.ts` file with your actual information. The warning will automatically disappear once it detects your custom configuration.

### Can I remove the warning completely?
Yes! If you prefer not to have the warning at all:
1. Delete `src/components/DevWarning.astro`
2. Remove the import and component usage from `src/layouts/ThreeColumnLayout.astro`

### Does the warning appear in production?
No, the warning only appears during development (`npm run dev`). It will never show on your live website.

### How do I add optimized images?
Use the `OptimizedImage` component instead of regular `<img>` tags. It automatically generates responsive images with lazy loading:

```astro
<OptimizedImage
  src="/images/your-image.jpg"
  alt="Description"
  width={800}
  height={600}
/>
```

### What image formats are supported?
The optimization system supports JPG, PNG, WebP, and AVIF formats. It automatically serves the best format supported by each user's browser with fallbacks for older browsers.

### How do galleries work?
Galleries are interactive with touch/swipe support, keyboard navigation, and image counters. They automatically optimize loading by showing the first image immediately and lazy-loading others.

### What performance improvements can I expect?
- 60-75% smaller image file sizes through modern formats
- Faster page load times with lazy loading
- Better Core Web Vitals scores
- No layout shifts during image loading
- Optimized for mobile data usage

### Can I customize the image optimization settings?
Yes! You can control quality, formats, sizes, and loading behavior through component props:

```astro
<OptimizedImage
  quality={90}        // 1-100 quality setting
  format="webp"       // Preferred format
  loading="eager"     // Load immediately
  sizes="100vw"       // Responsive sizing
  widths={[400,800,1200]} // Breakpoints
/>
```

## Need Help?

- Check other documentation projects for detailed guides
- Visit the [GitHub repository](https://github.com/tandukuda/monograph)
- File an issue if you encounter problems

Ready to make Monograph yours? Start with the site configuration file!
