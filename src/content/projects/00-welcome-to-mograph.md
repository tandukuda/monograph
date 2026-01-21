---
title: "Welcome to Monograph"
type: "Documentation"
year: "2026"
tags: ["guide", "setup", "getting-started"]
link: "https://github.com/tandukuda/monograph"
description: "Complete guide to setting up your Monograph portfolio"
medium: ["docs"]
role: ["Developer"]
---

# Welcome to Monograph

Monograph is a **minimalist, editorial index-style portfolio** that treats your work as a permanent archive, not a visual performance.

Each entry in this index is a project stored in `src/content/projects/`. This welcome guide will help you configure Monograph and make it your own.


## What You're Looking At

**Desktop Layout (3 columns):**
- **Left:** Project index with search
- **Center:** Main content (you're reading this)
- **Right:** Your CV/contact info

**Mobile Layout:**
- Content-first reading experience
- **Burger menu (☰)** in top-right for navigation
- Tap to access project list + search


## Quick Setup (10 Minutes)

### Step 1: Configure Your Site ⭐ MOST IMPORTANT

Edit `src/config/site.ts` - this is your **single source** for all site settings:

```typescript
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

**Why this matters:**
- All meta tags pull from here
- Navigation menu pulls from here
- SEO settings pull from here
- One file to update = less work!

### Step 2: Update Your Content Pages

Edit these files in `src/content/pages/`:
- `home.md` - Your homepage bio/introduction
- `cv.md` - Your CV and contact info (shows in right column)
- `about.md` - Your about page content
- `links.md` - Your social media links (optional)

### Step 3: Delete Demo Projects

Remove all documentation projects from `src/content/projects/`:
- `00-welcome-to-monograph.md` (this file)
- `01-adding-projects.md`
- `02-image-galleries.md`
- `03-customization.md`
- `04-deployment.md`
- `05-visual-preview.md`

### Step 4: Add Your Projects

Create `.md` files in `src/content/projects/` with this structure:

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

### Step 5: Add Your Images

1. Place images in `/public/images/`
2. **Optimize them first!** Use:
   - [TinyPNG](https://tinypng.com/) - Easy drag-and-drop
   - [Squoosh](https://squoosh.app/) - Google's optimizer
   - [ImageOptim](https://imageoptim.com/) - Mac batch tool

**Target sizes:**
- Hero images: 1200-1600px wide, <500KB
- Gallery images: 800-1200px wide, <300KB
- Thumbnails: 400-600px wide, <150KB

### Step 6: Create Your OG Image

Create `/public/og-image.png` (1200x630px) for social media previews when your site is shared.

### Step 7: Update robots.txt

Edit `public/robots.txt` and change the Sitemap URL to your actual domain:

```txt
Sitemap: https://yourdomain.com/sitemap.xml
```


## Features Overview

### What Monograph Does ✅

**Layout & Navigation:**
- Three-column editorial layout (desktop)
- Mobile burger menu navigation (☰)
- Centralized configuration system
- Client-side search (optional)
- Markdown-based content

**Images & Media:**
- Interactive galleries with touch/swipe navigation
- Keyboard navigation (arrow keys)
- Image counter (1/5, 2/5, etc.)
- Optional captions on hover
- Responsive image display

**User Experience:**
- Dark/light mode (automatic, based on system)
- Print stylesheet (PDF export ready)
- Fast static generation
- Progressive enhancement (works without JS)

**SEO & Accessibility:**
- Meta tags (Open Graph, Twitter Cards)
- Dynamic sitemap at `/sitemap.xml`
- Robots.txt for search engines
- WCAG 2.1 AA compliant
- Keyboard navigable

**Developer Experience:**
- Development warning (alerts placeholder config)
- Type-safe content (Zod schemas)
- Hot reload during development
- Clear error messages

### What Monograph Doesn't Do ❌

- **No automatic image optimization** - You must optimize images manually before uploading
- **No advanced search** - Basic string matching only (no fuzzy search or highlighting)
- **No CMS** - Intentionally avoided for simplicity and control
- **No built-in analytics** - Configurable but not included by default

### Planned for Future Releases

- Automatic WebP/AVIF image conversion
- Advanced search with fuzzy matching
- Tag-based filtering
- More customization options
- Plugin system

See [CHANGELOG.md](https://github.com/tandukuda/monograph/blob/main/CHANGELOG.md) for roadmap.


## Mobile Navigation

On mobile devices (<1024px width):

**How it works:**
1. Burger button (☰) fixed in top-right corner
2. Tap to open slide-in menu from right
3. Menu includes search (if enabled) + full project list
4. Close by tapping X, outside menu, or pressing Escape

**Benefits:**
- Navigation always accessible from any scroll position
- Content remains primary focus (not interrupted)
- Industry-standard pattern users expect
- Professional mobile experience


## Using Images & Galleries

### Single Images

Use standard HTML img tags:

```html
<img src="/images/project-screenshot.jpg" alt="Detailed description for accessibility" />
```

### Image Galleries

For interactive carousels:

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

**Gallery features:**
- Touch/swipe on mobile
- Arrow buttons on desktop
- Keyboard arrow keys
- Image counter
- Optional captions (on hover)
- Smooth transitions

**When to use:**
- Multiple screenshots of same project
- Process documentation (step 1, 2, 3)
- Design iterations
- Before/after comparisons

See the **Visual Preview** documentation project for live examples.


## Customization

### Colors & Typography

Edit `src/styles/global.css`:

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

Edit `src/config/site.ts`:

```typescript
features: {
  search: true,     // Enable/disable search
  darkMode: true,   // Enable/disable dark mode
  analytics: "",    // Google Analytics ID
}
```

### Navigation Menu

Edit `src/config/site.ts`:

```typescript
nav: [
  { label: "home", href: "/" },
  { label: "work", href: "/work" },
  { label: "contact", href: "/contact" },
  // Add more as needed
]
```

For more customization options, see the **Customization Guide** documentation project.


## Development Warning

An orange warning box appears in development when using placeholder configuration values (like the demo URL or "tandukuda" as author name).

**The warning automatically disappears** once you update multiple fields in `src/config/site.ts`.

**To remove it completely** (optional):
1. Delete `src/components/DevWarning.astro`
2. Remove import/usage from `src/layouts/ThreeColumnLayout.astro`

The warning only appears in development mode and **never shows in production**.


## Before You Deploy

### Essential Checklist

- [ ] Update `src/config/site.ts` with your information
- [ ] Delete all documentation projects (00-, 01-, etc.)
- [ ] Add your projects to `src/content/projects/`
- [ ] Update content pages (`home.md`, `cv.md`, `about.md`)
- [ ] Create `/public/og-image.png` (1200x630px)
- [ ] Optimize all images before uploading
- [ ] Update `public/robots.txt` with your domain
- [ ] Run `npm run build` successfully

### Testing Checklist

**Desktop:**
- [ ] All pages load correctly
- [ ] Search works (if enabled)
- [ ] Project navigation works
- [ ] Galleries work (arrow buttons + keyboard)
- [ ] Dev warning disappears with custom config

**Mobile:**
- [ ] Burger menu (☰) shows in top-right
- [ ] Tap burger → menu slides in
- [ ] Search works in menu (if enabled)
- [ ] Tap project → closes menu and navigates
- [ ] Tap outside or X → closes menu
- [ ] Gallery swipe works

**SEO:**
- [ ] Visit `/sitemap.xml` → shows sitemap
- [ ] Visit `/robots.txt` → shows directives
- [ ] View page source → meta tags present

**Print:**
- [ ] Press Cmd/Ctrl+P
- [ ] Preview looks clean (single column)
- [ ] No interactive elements visible

For the complete checklist, see [SETUP.md](https://github.com/tandukuda/monograph/blob/main/SETUP.md).


## File Structure

```
monograph/
├── public/
│   ├── images/          ← Your project images
│   ├── og-image.png     ← Social preview (1200x630px)
│   ├── favicon.svg      ← Your favicon
│   └── robots.txt       ← Update with your domain
├── src/
│   ├── config/
│   │   └── site.ts      ← ⭐ MAIN CONFIG (edit first!)
│   ├── content/
│   │   ├── pages/
│   │   │   ├── home.md      ← Homepage bio
│   │   │   ├── cv.md        ← Right sidebar CV
│   │   │   ├── about.md     ← About page
│   │   │   └── links.md     ← Social links
│   │   └── projects/
│   │       └── *.md         ← Your projects
│   ├── components/
│   │   ├── Gallery.astro      ← Image carousel
│   │   ├── MobileMenu.astro   ← Burger menu
│   │   └── ...
│   └── styles/
│       ├── global.css     ← Main styles
│       └── print.css      ← Print optimization
├── CHANGELOG.md         ← Version history
├── SETUP.md            ← Complete checklist
└── README.md           ← Project docs
```


## FAQ

### What is the orange warning box?

Development warning that appears when using placeholder config values. It automatically disappears when you update `src/config/site.ts` with your information.

### How do I make the warning disappear?

Update **multiple** fields in `src/config/site.ts` (url, author name, description). The warning uses smart detection - it won't disappear if only one field is changed.

### Does the warning appear in production?

No, the warning **only appears in development mode** (`npm run dev`). It will never show on your live website.

### How do I add images?

1. Place images in `/public/images/`
2. Optimize with TinyPNG, Squoosh, or ImageOptim
3. Use: `<img src="/images/your-image.jpg" alt="Description" />`

### Should I optimize images myself?

Yes! Monograph serves images directly, so you should optimize them before uploading. Target: <500KB for hero images, <300KB for gallery images.

### What image formats are supported?

Standard web formats: JPG, PNG, GIF, WebP, SVG. WebP is recommended for best quality/size ratio.

### How do galleries work?

Use the Gallery component for interactive carousels with touch/swipe navigation. See the **Image Galleries** documentation project for examples.

### How do I customize colors?

Edit CSS variables in `src/styles/global.css`. Change `--bg-color`, `--text-primary`, etc.

### Can I disable search?

Yes! Set `features.search: false` in `src/config/site.ts`.

### Where is the mobile project list?

On mobile (<1024px), the project list is in the burger menu (☰) in the top-right corner instead of showing inline.


## Next Steps

**Read the other documentation projects** in this index:

1. ✅ **Welcome to Monograph** (you are here)
2. **Adding Projects** - Content structure and frontmatter details
3. **Image Galleries** - Interactive carousels and image handling
4. **Visual Preview** - See images and galleries in action
5. **Customization Guide** - Advanced styling and feature toggles
6. **Deployment** - Going live with Vercel, Netlify, or GitHub Pages

**When ready to deploy:**
- Follow the complete [Setup Checklist](https://github.com/tandukuda/monograph/blob/main/SETUP.md)
- Delete all documentation projects
- Test everything thoroughly
- Deploy with confidence!


## Support & Resources

- **GitHub:** [https://github.com/tandukuda/monograph](https://github.com/tandukuda/monograph)
- **Issues:** [Report bugs](https://github.com/tandukuda/monograph/issues)
- **Changelog:** [Version history](https://github.com/tandukuda/monograph/blob/main/CHANGELOG.md)
- **Astro Docs:** [docs.astro.build](https://docs.astro.build)


**Ready to make Monograph yours?** Start by updating `src/config/site.ts`, then work through the documentation projects. Good luck! 🚀
