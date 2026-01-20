<h1 align="center">Monograph</h1>

**Monograph** is a minimalist, editorial index-style portfolio built with [Astro](https://astro.build).

It is designed to be readable, durable, and resistant to trend decay. It features a strict three-column layout, file-based content management, and zero-runtime JavaScript (except where strictly necessary for **Search**).

![Monograph Preview](./assets/preview.png)

---

## Quick Start
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
  // ... other settings
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

- **Welcome to Monograph** — Getting started
- **Adding Projects** — Content structure
- **Image Galleries** — Carousel setup
- **Customization Guide** — Toggles & config
- **Deployment** — Going live

**Before deploying:** 
1. Delete the documentation projects (files starting with `00-`, `01-`, etc.)
2. Update your site configuration in `src/config/site.ts`
3. Replace demo content in `src/content/pages/` with your own

## Features

- [x] **Three-column editorial layout** - Clean, professional design
- [x] **Markdown-based content management** - Easy to write and maintain
- [x] **Centralized site configuration** - Single file for all settings
- [x] **Image optimization system** - Automatic WebP/AVIF conversion with responsive sizing
- [x] **Interactive galleries** - Touch/swipe navigation with keyboard support
- [x] **Client-side search** - Real-time project filtering (optional)
- [x] **Zero-config dark/light mode** - Respects user preferences
- [x] **Static site generation** - Blazing fast performance
- [x] **Built-in SEO optimization** - Meta tags, Open Graph, structured data
- [x] **Development guidance** - Configuration warnings and setup assistance
- [x] **Type-safe content** - TypeScript schemas for content validation
- [x] **Accessibility first** - WCAG compliant with screen reader support
- [x] **Performance optimized** - Lazy loading, modern formats, layout stability

## Customization

### Site Configuration
All site-wide settings are centralized in `src/config/site.ts`:
- **Site metadata** - Title, description, URL, OG images
- **Author information** - Name, email, social media handles
- **Navigation menu** - Customize links and labels
- **Feature toggles** - Search, dark mode, analytics
- **SEO settings** - Structured data, canonical URLs

### Content Management
- **Projects:** Add `.md` files to `src/content/projects/` with frontmatter
- **Pages:** Edit bio, CV, and about content in `src/content/pages/`
- **Images:** Automatic optimization with `OptimizedImage` and `Gallery` components
- **Styling:** CSS variables in `src/styles/global.css` for colors and typography

### Advanced Features
- **Component system** - Reusable OptimizedImage and Gallery components
- **Image optimization** - Automatic format conversion and responsive sizing
- **Error handling** - Built-in error boundaries and fallback states
- **Performance monitoring** - Core Web Vitals optimization built-in

### Development Warning
By default, an orange warning appears in development mode when using placeholder configuration values. This helps prevent accidental deployment with demo data.

**To remove the warning (optional):**
1. Delete `src/components/DevWarning.astro`
2. Remove the import and component from `src/layouts/ThreeColumnLayout.astro`

The warning only appears during development and automatically disappears once you update your site configuration.

### Image Optimization System
Monograph includes industry-leading image optimization with automatic format conversion, responsive sizing, and progressive loading:

```astro
import OptimizedImage from '../components/OptimizedImage.astro';
import Gallery from '../components/Gallery.astro';

<!-- Single optimized image -->
<OptimizedImage
  src="/images/project-hero.jpg"
  alt="Project hero image"
  width={1200}
  height={800}
  caption="Automatically optimized with WebP/AVIF formats"
  quality={85}
  sizes="(max-width: 768px) 100vw, 75vw"
/>

<!-- Interactive gallery with navigation -->
<Gallery
  images={[
    { src: "/images/screenshot-1.jpg", alt: "Homepage design", caption: "Landing page" },
    { src: "/images/screenshot-2.jpg", alt: "Dashboard interface", caption: "User dashboard" },
    { src: "/images/screenshot-3.jpg", alt: "Mobile view", caption: "Responsive design" }
  ]}
  height="600px"
  quality={90}
  loading="lazy"
/>
```

**Performance Features:**
- **60-75% file size reduction** through modern formats (WebP/AVIF)
- **Responsive breakpoints** - Right-sized images for each device
- **Progressive loading** - Critical images load first, others lazy load
- **Layout stability** - No content jumping with explicit dimensions
- **Touch navigation** - Swipe gestures and keyboard support for galleries
- **SEO optimized** - Proper semantic markup and structured data
- **Browser fallbacks** - Automatic JPG/PNG fallbacks for older browsers

## Technology Stack

- **[Astro](https://astro.build)** - Static site generation with component islands
- **TypeScript** - Type safety for configuration and content schemas
- **Pure CSS** - No frameworks, custom design system with CSS variables
- **Atkinson Hyperlegible** - Accessible typography designed for readability
- **Modern Web APIs** - Intersection Observer, Web Components, CSS Grid
- **Performance First** - Optimized images, lazy loading, minimal JavaScript

---

## Performance & Accessibility

### Core Web Vitals Optimized
- **LCP (Largest Contentful Paint)** - Optimized images and lazy loading
- **FID (First Input Delay)** - Minimal JavaScript, progressive enhancement
- **CLS (Cumulative Layout Shift)** - Explicit image dimensions prevent layout shifts

### Accessibility Features
- **WCAG 2.1 AA compliant** - Screen reader compatible
- **Keyboard navigation** - Full site navigable without mouse
- **High contrast support** - Respects user preferences
- **Reduced motion** - Honors prefers-reduced-motion settings
- **Semantic HTML** - Proper heading structure and landmarks

## Support the Project

If Monograph helps streamline your portfolio workflow, sponsorship keeps it **fast, secure, and maintained**.

- Ko‑fi: [https://ko-fi.com/tandukuda](https://ko-fi.com/tandukuda)
- PayPal: [https://paypal.me/justbams](https://paypal.me/justbams)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">

**Built by [tandukuda](https://github.com/tandukuda)**

[Star this repo](https://github.com/tandukuda/monograph) • [Report Bug](https://github.com/tandukuda/monograph/issues) • [Request Feature](https://github.com/tandukuda/monograph/issues) • [Ko-Fi](https://ko-fi.com/tandukuda)
</div>
