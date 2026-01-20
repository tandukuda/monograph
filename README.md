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

**Before deploying:** Complete the [Setup Checklist](SETUP.md) to ensure your portfolio is properly configured with your information and optimized for performance.

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

**Before deploying:** Follow the complete [Setup Checklist](SETUP.md) which includes:
1. Delete the documentation projects (files starting with `00-`, `01-`, etc.)
2. Update your site configuration in `src/config/site.ts`
3. Replace demo content in `src/content/pages/` with your own
4. Configure images and optimize performance
5. Test all features and verify SEO settings

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

- **[Astro](https://astro.build)** - Static site generation with component islands
- **TypeScript** - Type safety for configuration and content schemas
- **Pure CSS** - No frameworks, custom design system with CSS variables
- **Atkinson Hyperlegible** - Accessible typography designed for readability
- **Modern Web APIs** - Intersection Observer, Web Components, CSS Grid
- **Performance First** - Optimized images, lazy loading, minimal JavaScript

The technical choices support the editorial stance.
They are not the point.

## Technical Features

- **Three-column editorial layout** - Strict, non-negotiable structure
- **Markdown-based content management** - Easy to write and maintain
- **Centralized site configuration** - Single file for all settings
- **Image optimization system** - Automatic WebP/AVIF conversion with responsive sizing
- **Interactive galleries** - Touch/swipe navigation with keyboard support
- **Client-side search** - Real-time project filtering (optional)
- **Zero-config dark/light mode** - Respects user preferences
- **Static site generation** - Blazing fast performance
- **Built-in SEO optimization** - Meta tags, Open Graph, structured data
- **Accessibility first** - WCAG compliant with screen reader support

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

Use it.
Change it.
Argue with it.

But understand what it's arguing first.

---
<div align="center">

**Built by [tandukuda](https://github.com/tandukuda)**

[Star this repo](https://github.com/tandukuda/monograph) • [Report Bug](https://github.com/tandukuda/monograph/issues) • [Request Feature](https://github.com/tandukuda/monograph/issues) • [Ko-Fi](https://ko-fi.com/tandukuda)
</div>
