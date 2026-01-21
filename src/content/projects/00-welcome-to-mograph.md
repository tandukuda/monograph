---
title: "Welcome to Monograph"
type: "Documentation"
year: "2026"
tags: ["guide", "setup"]
link: "https://github.com/tandukuda/monograph"
description: "Getting started with your Monograph portfolio"
medium: ["Docs"]
role: ["Developer"]
---

# Welcome to Monograph

This is your portfolio index. Each entry you see here is a project stored in `src/content/projects/`. 

Monograph is a **minimalist, editorial index-style portfolio** that treats your work as a permanent archive, not a visual performance.

## Important: Read the Setup Guide First!

**Before you do anything else**, read the **Setup Guide** project in this index. It contains essential configuration steps that must be completed before deploying your site.

## Quick Start (5 Minutes)

### 1. Configure Your Site
**Most important step!** Edit `src/config/site.ts`:

```typescript
export const siteConfig: SiteConfig = {
  name: "Your Portfolio Name",
  title: "Your Name",
  description: "Your portfolio description",
  url: "https://yoursite.com", // Your actual domain
  author: {
    name: "Your Name",
    email: "your@email.com",
    twitter: "@yourusername",
    github: "yourusername",
  },
  nav: [
    { label: "index", href: "/" },
    { label: "about", href: "/about" },
    { label: "others", href: "/links" },
  ],
  features: {
    search: true,      // Enable/disable search
    darkMode: true,    // Enable/disable dark mode
    analytics: "",     // Google Analytics ID (optional)
  },
};
```

### 2. Delete Demo Content
Remove all documentation projects (including this one):
- `00-setup-guide.md`
- `01-welcome-to-monograph.md`
- `02-adding-projects.md`
- `03-image-galleries.md`
- `04-customization.md`
- `05-deployment.md`

### 3. Update Your Content
Edit these files with your information:
- `src/content/pages/home.md` - Your homepage bio
- `src/content/pages/cv.md` - Your CV/contact info
- `src/content/pages/about.md` - About page content
- `src/content/pages/links.md` - Social media links

### 4. Add Your Projects
Create `.md` files in `src/content/projects/`:

```markdown
---
title: "My Project"
type: "Web Design"
year: 2024
tags: ["web", "design"]
link: "https://project-url.com"
description: "Brief project description"
medium: ["web", "design"]
role: ["Designer", "Developer"]
---

# My Project

Your project content goes here...

## Adding Images
<img src="/images/screenshot.jpg" alt="Descriptive alt text" />

## Adding Galleries
<Gallery
  images={[
    { src: "/images/img1.jpg", alt: "Description", caption: "Caption" },
    { src: "/images/img2.jpg", alt: "Description", caption: "Caption" }
  ]}
  height="500px"
/>
```

## What You're Looking At

**Three-Column Layout:**
- **Left Column (Desktop):** Project index with search
- **Center Column:** Main content (you're reading this)
- **Right Column:** Your CV/contact info

**Mobile Layout:**
- Clean, stacked content
- **Burger menu (☰)** in top-right for project navigation
- Search included in burger menu
- Content-first reading experience

## Latest Features (V1.0.0)

### Core Features
- **Centralized Configuration** - Single `src/config/site.ts` file for all settings
- **Mobile Burger Menu** - Professional slide-in navigation for mobile
- **Interactive Galleries** - Touch/swipe navigation with keyboard support
- **Client-side Search** - Real-time project filtering (configurable)
- **Dark/Light Mode** - Automatic based on system preferences
- **Print Stylesheet** - Optimized for PDF export
- **SEO Optimized** - Meta tags, sitemap, robots.txt included
- **Accessibility First** - WCAG 2.1 AA compliant

### Mobile Navigation (New!)
On mobile devices (<1024px width):
- Fixed burger menu button in top-right corner
- Tap to open slide-in menu with project list
- Includes search functionality (if enabled)
- Close by tapping X, outside menu, or pressing Escape
- Professional mobile-first experience

### Development Warning
An orange warning appears in development when using placeholder config values. This helps prevent accidental deployment with demo data.

**The warning automatically disappears** once you update `src/config/site.ts` with your information.

**To remove it completely** (optional):
1. Delete `src/components/DevWarning.astro`
2. Remove import/usage from `src/layouts/ThreeColumnLayout.astro`

## Image Handling

### Single Images
Use standard HTML img tags:

```html
<img src="/images/project-screenshot.jpg" alt="Detailed description" />
```

**Important:** Optimize images before uploading! Use tools like:
- [TinyPNG](https://tinypng.com/) - Easy drag-and-drop
- [Squoosh](https://squoosh.app/) - Google's web optimizer
- [ImageOptim](https://imageoptim.com/) - Mac batch processing

**Recommended sizes:**
- Hero images: 1200-1600px wide, <500KB
- Gallery images: 800-1200px wide, <300KB
- Thumbnails: 400-600px wide, <150KB

### Image Galleries
For interactive carousels with navigation:

```astro
import Gallery from '../components/Gallery.astro';

<Gallery
  images={[
    {
      src: "/images/step-1.jpg",
      alt: "Process step 1",
      caption: "Initial design"
    },
    {
      src: "/images/step-2.jpg",
      alt: "Process step 2",
      caption: "Development"
    }
  ]}
  height="600px"
/>
```

**Gallery Features:**
- Touch/swipe navigation on mobile
- Keyboard arrow keys on desktop
- Image counter (shows 1/5, 2/5, etc.)
- Optional captions on hover
- Smooth scroll transitions
- Lazy loading for performance

## File Structure

```
monograph/
├── public/
│   ├── images/          ← Your project images
│   ├── og-image.png     ← Social media preview (1200x630px)
│   ├── favicon.svg      ← Your favicon
│   └── robots.txt       ← SEO (update with your domain)
├── src/
│   ├── config/
│   │   └── site.ts      ← MAIN CONFIGURATION FILE
│   ├── content/
│   │   ├── pages/
│   │   │   ├── home.md  ← Homepage bio
│   │   │   ├── cv.md    ← Right sidebar CV
│   │   │   └── about.md ← About page
│   │   └── projects/
│   │       └── *.md     ← Your projects
│   ├── components/
│   │   ├── Gallery.astro      ← Image carousel
│   │   ├── MobileMenu.astro   ← Burger menu
│   │   └── ...
│   └── styles/
│       ├── global.css   ← Main styles
│       └── print.css    ← Print optimization
├── CHANGELOG.md         ← Version history
├── SETUP.md            ← Pre-deployment checklist
└── README.md           ← Project documentation
```

## Next Steps

**Read the documentation projects** below to learn about:

1. **Setup Guide** - Essential configuration steps
2. **Adding Projects** - Content structure and frontmatter
3. **Image Galleries** - Interactive carousels and image handling
4. **Customization Guide** - Colors, typography, feature toggles
5. **Deployment** - Going live with Vercel, Netlify, or GitHub Pages

## Before You Deploy

**Complete checklist** (see SETUP.md for full details):

Essential:
- [ ] Update `src/config/site.ts` with your information
- [ ] Delete all documentation projects (00-, 01-, etc.)
- [ ] Add your projects to `src/content/projects/`
- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Optimize all images before uploading
- [ ] Update `public/robots.txt` with your domain
- [ ] Test mobile burger menu functionality
- [ ] Run `npm run build` successfully

Testing:
- [ ] Test on mobile device (burger menu works)
- [ ] Test search functionality (if enabled)
- [ ] Test image galleries (touch/keyboard navigation)
- [ ] Test print preview (Cmd/Ctrl+P)
- [ ] Verify sitemap at `/sitemap.xml`
- [ ] Run Lighthouse audit (aim for 95+)

## Features Overview

### What Monograph Does
- Three-column editorial layout (desktop)
- Mobile-optimized with burger menu navigation
- Markdown-based content management
- Interactive image galleries
- Client-side search (optional)
- Dark/light mode (automatic)
- Print stylesheet included
- SEO ready (meta tags, sitemap, robots.txt)
- Accessibility compliant (WCAG 2.1 AA)
- Fast static generation
- Zero-config deployment

### What Monograph Doesn't Do (Yet)
- Automatic image optimization (manual optimization required)
- Advanced search (fuzzy matching, highlighting)
- CMS integration (intentionally avoided)
- Analytics built-in (but configurable)
- Comments or social features (static site)

### Planned Features (Future Releases)
- Automatic WebP/AVIF image conversion
- Advanced search with fuzzy matching
- Tag-based filtering
- More customization options
- Plugin system for extensions

## Performance & Accessibility

### Performance
- **Fast static HTML** - No JavaScript required for core content
- **Lazy loading** - Images load as needed
- **Minimal CSS** - No frameworks, custom design system
- **Print optimized** - Clean PDF export

### Accessibility
- **Screen reader compatible** - Proper semantic HTML
- **Keyboard navigable** - Full site usable without mouse
- **High contrast support** - Respects user preferences
- **Reduced motion** - Honors prefers-reduced-motion
- **ARIA labels** - Proper accessibility attributes

### SEO
- **Meta tags** - Open Graph, Twitter Cards
- **Sitemap** - Auto-generated at `/sitemap.xml`
- **Robots.txt** - Search engine directives
- **Semantic HTML** - Proper heading structure
- **Fast loading** - Good Core Web Vitals

## Philosophy

Monograph is built on these principles:

1. **Index before imagery** - Projects are listed and contextualized before they are seen
2. **Metadata is interface** - Year, role, medium, context always visible
3. **Claims over descriptions** - Each project begins with an argument, not a summary
4. **Permanence over performance** - Portfolio is an archive, not a feed

These aren't just design choices - they're the foundation of the system.

## Support & Resources

- **GitHub Repository:** [https://github.com/tandukuda/monograph](https://github.com/tandukuda/monograph)
- **Issues/Bugs:** [GitHub Issues](https://github.com/tandukuda/monograph/issues)
- **Documentation:** You're reading it (in-app docs)
- **Changelog:** See [CHANGELOG.md](https://github.com/tandukuda/monograph/blob/main/CHANGELOG.md) for version history
- **Setup Guide:** See [SETUP.md](https://github.com/tandukuda/monograph/blob/main/SETUP.md) for complete checklist

## Need Help?

1. **Read other documentation projects** in this index
2. **Check SETUP.md** for deployment checklist
3. **Review CHANGELOG.md** for known issues
4. **File a GitHub issue** with detailed description
5. **Check Astro docs** at [docs.astro.build](https://docs.astro.build)

## Contributing

Monograph is intentionally opinionated. Contributions that align with its philosophy are welcome:
- Bug fixes
- Documentation improvements
- Accessibility enhancements
- Performance optimizations

Changes that contradict the editorial stance should be forks, not PRs.

---

**Ready to make Monograph yours?**

Start with the **Setup Guide** project, then work through the other documentation. Delete these docs when you're ready to deploy.

Good luck! 🚀
