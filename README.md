<h1 align="center">Monograph</h1>

Monograph is an **editorial, index-first portfolio system**.

It rejects expressive layouts to treat a portfolio as a **permanent index of decisions**, not a visual performance.

This is not a theme.
It is a position.

---

![Monograph Preview](./assets/preview.png)

---

## What Monograph Is

Monograph is designed for designers who believe:

- A portfolio should be read, not scrolled
- Structure is part of the work
- Decisions matter more than decoration
- Permanence beats constant rearrangement

It prioritizes:
- Legibility
- Metadata
- Editorial clarity
- Long-term readability

If you are looking for layout freedom, visual experimentation, or drag-and-drop expressiveness, **this is the wrong starting point**.

---

## What Monograph Is Not

Monograph is not:
- A Cargo replacement with more freedom
- A visual playground
- A theme marketplace asset
- A showcase for animation or spectacle

Those are valid goals.
They are simply not this project's goal.

---

## Editorial Principles

Monograph is built around a small set of non-negotiable defaults:

1. **Index before imagery**  
   Projects are listed and contextualized before they are seen.

2. **Metadata is interface**  
   Year, role, medium, and context are always visible.

3. **Claims over descriptions**  
   Each project begins with a single-sentence claim — an argument, not a summary.

4. **Permanence over performance**  
   The system assumes a portfolio is an archive, not a feed.

You may change these rules.
But changing them is a **fork**, not a customization.

---

## Quick Deploy
[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/tandukuda/monograph)

**Before deploying:** Complete the [Setup Checklist](SETUP.md) to ensure your portfolio is properly configured.

## Manual Setup
### 1. Clone the repo
```bash
git clone https://github.com/tandukuda/monograph.git
cd monograph
```

### 2. Configure your site
**Important:** Before anything else, update your site configuration:

Edit `src/config/site.ts` with your information:
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

### 3. Install dependencies
```bash
npm install
```

### 4. Run the development server
```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321)

## Documentation

**All documentation is inside the portfolio itself.** After running the dev server, read the documentation projects in the index:

- **Welcome to Monograph** — Getting started and feature overview
- **Setup Guide** — Essential configuration steps
- **Adding Projects** — Content structure and frontmatter
- **Image Galleries** — Interactive carousels and image handling
- **Visual Preview** — See images and galleries in action
- **Customization Guide** — Toggles, colors, and styling
- **Deployment** — Going live with Vercel, Netlify, or GitHub Pages

**Before deploying:** Follow the complete [Setup Checklist](SETUP.md) which includes:
1. Update your site configuration in `src/config/site.ts`
2. Delete the documentation projects (files starting with `00-`, `01-`, etc.)
3. Replace demo content in `src/content/pages/` with your own
4. Add your project images to `/public/images/` (optimized!)
5. Create your Open Graph image at `/public/og-image.png`
6. Test mobile burger menu and all features
7. Run build and verify everything works

---

## Forking Monograph

Monograph is intentionally opinionated.

You are encouraged to fork it — but every deviation carries responsibility.

If you:
- Add expressive layouts
- Introduce decorative motion
- Remove metadata
- Reorder projects casually

You are changing the editorial stance.

That's allowed.
Just don't pretend it's still Monograph.

---

## Built With

- **[Astro](https://astro.build)** - Static site generation with zero JS by default
- **TypeScript** - Type safety for configuration and content schemas
- **Pure CSS** - No frameworks, custom design system with CSS variables
- **Atkinson Hyperlegible** - Accessible typography designed for readability
- **Markdown** - Simple content management without a CMS

The technical choices support the editorial stance.
They are not the point.

## Core Features

### Layout & Navigation
- **Three-column editorial layout** (desktop) - Opinionated, non-negotiable structure
- **Mobile burger menu** (mobile) - Professional slide-in navigation
- **Centralized configuration** - Single `src/config/site.ts` file for all settings
- **Client-side search** - Real-time project filtering (optional, configurable)
- **Markdown-based content** - Easy to write and maintain

### Images & Media
- **Interactive galleries** - Touch/swipe navigation with keyboard support
- **Responsive images** - Scales appropriately for all screen sizes
- **Manual optimization workflow** - Full control over image quality
- **Multiple display modes** - Single images or multi-image carousels

### User Experience
- **Zero-config dark/light mode** - Respects system preferences automatically
- **Print stylesheet** - Optimized for PDF export and printing
- **Progressive enhancement** - Core content works without JavaScript
- **Fast static generation** - Blazing fast page loads

### Developer Experience
- **Development warning** - Alerts when using placeholder configuration
- **Type-safe content** - Zod schemas validate frontmatter
- **Hot reload** - Instant updates during development
- **Clear error messages** - Helpful debugging information

### SEO & Accessibility
- **Built-in SEO optimization** - Meta tags, Open Graph, structured data
- **Dynamic sitemap** - Auto-generated at `/sitemap.xml`
- **Robots.txt** - Search engine directives included
- **WCAG 2.1 AA compliant** - Screen reader compatible, keyboard navigable
- **Semantic HTML** - Proper heading structure and landmarks

## Mobile Experience

### Burger Menu Navigation
On mobile devices (screens <1024px):
- Fixed burger button in top-right corner (☰)
- Tap to open slide-in menu from right
- Includes search (if enabled) + full project list
- Close by tapping X, outside menu, or pressing Escape
- Background scroll locked when menu open
- Smooth animations with reduced-motion support

**Benefits:**
- Navigation always accessible from any scroll position
- Content remains primary focus (not interrupted by project list)
- Industry-standard mobile pattern users expect
- Professional mobile-first experience

## Performance & Accessibility

### Core Web Vitals Optimized
- **LCP (Largest Contentful Paint)** - Fast static HTML generation
- **FID (First Input Delay)** - Minimal JavaScript, progressive enhancement
- **CLS (Cumulative Layout Shift)** - Proper image dimensions prevent layout shifts

### Accessibility Features
- **WCAG 2.1 AA compliant** - Screen reader compatible
- **Keyboard navigation** - Full site navigable without mouse
- **High contrast support** - Respects user preferences
- **Reduced motion** - Honors prefers-reduced-motion settings
- **Semantic HTML** - Proper heading structure and landmarks
- **ARIA labels** - All interactive elements properly labeled

### SEO Features
- **Meta tags** - Open Graph, Twitter Cards, structured data
- **Dynamic sitemap** - Updates automatically with new projects
- **Canonical URLs** - Prevent duplicate content issues
- **Fast loading** - Static HTML with minimal JavaScript
- **Mobile-friendly** - Responsive design passes mobile usability tests

## What Monograph Does (V1.0.0)

- Three-column editorial layout (desktop)
- Mobile-optimized burger menu navigation
- Markdown-based content management
- Interactive image galleries with touch/keyboard navigation
- Client-side search (optional, configurable)
- Dark/light mode (automatic, based on system preferences)
- Print stylesheet for PDF export
- SEO ready (meta tags, sitemap, robots.txt)
- Accessibility compliant (WCAG 2.1 AA)
- Fast static generation
- Zero-config deployment to Vercel, Netlify, or GitHub Pages
- Development warning for placeholder configuration
- TypeScript support for type-safe configuration

## What Monograph Doesn't Do (Yet)

- **Automatic image optimization** - Images must be manually optimized before upload
- **Advanced search** - Basic string matching (no fuzzy search or highlighting)
- **CMS integration** - Intentionally avoided for simplicity
- **Built-in analytics** - Configurable but not included
- **Comments or social features** - Static site, no backend

## Planned Features (Future Releases)

- Automatic WebP/AVIF image conversion with responsive sizing
- Advanced search with fuzzy matching and result highlighting
- Tag-based filtering and categorization
- More customization options and themes
- Plugin system for extensions
- Enhanced print layouts
- More gallery variations

See [CHANGELOG.md](CHANGELOG.md) for detailed version history and roadmap.

## Image Handling

### Single Images
Use standard HTML img tags:
```html
<img src="/images/your-image.jpg" alt="Descriptive alt text for accessibility" />
```

**Important:** Optimize images before uploading using:
- **[TinyPNG](https://tinypng.com/)** - Easy drag-and-drop compression
- **[Squoosh](https://squoosh.app/)** - Google's web-based optimizer with manual control
- **[ImageOptim](https://imageoptim.com/)** - Mac app for batch optimization

**Recommended sizes:**
- Hero images: 1200-1600px wide, <500KB
- Gallery images: 800-1200px wide, <300KB
- Thumbnails: 400-600px wide, <150KB

### Interactive Galleries
For image carousels with navigation:
```astro
import Gallery from '../components/Gallery.astro';

<Gallery
  images={[
    { src: "/images/img1.jpg", alt: "Description", caption: "Optional caption" },
    { src: "/images/img2.jpg", alt: "Description", caption: "Optional caption" }
  ]}
  height="600px"
/>
```

**Gallery features:**
- Touch/swipe navigation on mobile devices
- Keyboard arrow keys on desktop
- Image counter showing position (e.g., "2/5")
- Optional captions on hover
- Smooth scroll transitions
- Lazy loading for performance

See the **Visual Preview** documentation project for live examples.

## Quick Commands

```bash
# Install dependencies
npm install

# Development server
npm run dev

# Build for production (includes type checking)
npm run build

# Preview production build
npm run preview

# Type check only
npx astro check
```

## Project Structure

```
monograph/
├── public/
│   ├── images/          # Your project images (optimize before uploading!)
│   ├── og-image.png     # Social media preview (1200x630px)
│   ├── favicon.svg      # Your favicon
│   └── robots.txt       # Search engine directives (update with your domain)
├── src/
│   ├── config/
│   │   └── site.ts      # ⭐ MAIN CONFIGURATION FILE (edit this first!)
│   ├── content/
│   │   ├── pages/
│   │   │   ├── home.md      # Homepage bio
│   │   │   ├── cv.md        # Right sidebar CV
│   │   │   ├── about.md     # About page
│   │   │   └── links.md     # Social links page
│   │   └── projects/
│   │       └── *.md         # Your projects (delete demo files)
│   ├── components/
│   │   ├── Gallery.astro      # Image carousel component
│   │   ├── MobileMenu.astro   # Mobile burger menu
│   │   ├── DevWarning.astro   # Development config warning
│   │   └── ...
│   ├── layouts/
│   │   └── ThreeColumnLayout.astro  # Main layout
│   ├── pages/
│   │   ├── index.astro        # Homepage
│   │   ├── about.astro        # About page
│   │   ├── links.astro        # Links page
│   │   ├── 404.astro          # Error page
│   │   ├── sitemap.xml.ts     # Dynamic sitemap
│   │   └── project/[slug].astro  # Project pages
│   └── styles/
│       ├── global.css     # Main styles
│       └── print.css      # Print optimization
├── CHANGELOG.md           # Version history and roadmap
├── SETUP.md              # Pre-deployment checklist
├── README.md             # This file
└── package.json          # Dependencies and scripts
```

## Support the Project

If Monograph helps streamline your portfolio workflow, sponsorship keeps it **fast, secure, and maintained**.

- Ko‑fi: [https://ko-fi.com/tandukuda](https://ko-fi.com/tandukuda)
- PayPal: [https://paypal.me/justbams](https://paypal.me/justbams)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Community & Support

- **GitHub Repository:** [https://github.com/tandukuda/monograph](https://github.com/tandukuda/monograph)
- **Report Bugs:** [GitHub Issues](https://github.com/tandukuda/monograph/issues)
- **Request Features:** [GitHub Issues](https://github.com/tandukuda/monograph/issues)
- **Changelog:** [CHANGELOG.md](CHANGELOG.md)
- **Setup Guide:** [SETUP.md](SETUP.md)

---

Use it.
Change it.
Argue with it.

But understand what it's arguing first.

---
<div align="center">

**Built by [tandukuda](https://github.com/tandukuda)**

[Star this repo](https://github.com/tandukuda/monograph) • [Report Bug](https://github.com/tandukuda/monograph/issues) • [Request Feature](https://github.com/tandukuda/monograph/issues) • [Ko-Fi](https://ko-fi.com/tandukuda)

---

**V1.0.0** — January 2026

</div>
