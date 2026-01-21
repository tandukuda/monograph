---
title: "Visual Preview"
type: "Example"
year: "2026"
tags: ["demo", "images", "gallery"]
link: "https://github.com/tandukuda/monograph"
description: "See how images and galleries look in Monograph"
medium: ["Blog"]
role: ["Developer"]
---

# Visual Preview: Images & Galleries

This project demonstrates how images and interactive galleries appear in Monograph. Use this as a reference for your own projects.

## Single Images

Single images use standard HTML img tags and are displayed with a clean border:

<img src="https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=1200&h=800&fit=crop" alt="Modern workspace with laptop and coffee" />

**How to add:**
```html
<img src="/images/your-image.jpg" alt="Descriptive alt text" />
```

**Best practices:**
- Use descriptive alt text for accessibility
- Optimize images before uploading (aim for <500KB)
- Recommended width: 800-1600px
- Place images in `/public/images/` directory

---

## Multiple Images (Stacked)

You can add multiple images in sequence. Each gets proper spacing:

<img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&h=800&fit=crop" alt="Laptop showing code editor" />

<img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&h=800&fit=crop" alt="Minimal desk setup with lamp" />

**When to use:**
- Process documentation (step 1, step 2, step 3)
- Before/after comparisons (separate images)
- Different angles of the same project


## Interactive Image Gallery

For related images that tell a story, use the Gallery component with touch/swipe navigation:

<div class="gallery-wrapper">
  <button class="nav-btn prev" aria-label="Previous Slide">‹</button>
  <button class="nav-btn next" aria-label="Next Slide">›</button>

  <div class="gallery">
    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop" alt="Analytics dashboard showing graphs" />
    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop" alt="Business charts on tablet device" />
    <img src="https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop" alt="Team working on design mockups" />
    <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&h=800&fit=crop" alt="Collaboration meeting with laptops" />
  </div>
</div>

**Try it:**
- **Desktop:** Click arrow buttons or use keyboard arrow keys
- **Mobile:** Swipe left and right
- **Keyboard:** Tab to focus, then use arrow keys

**How to add:**
```astro
<Gallery
  images={[
    { 
      src: "/images/dashboard-1.jpg", 
      alt: "Dashboard home view",
      caption: "Main dashboard interface"
    },
    { 
      src: "/images/dashboard-2.jpg", 
      alt: "Analytics view",
      caption: "Detailed analytics page"
    },
    { 
      src: "/images/dashboard-3.jpg", 
      alt: "Settings panel",
      caption: "User settings"
    }
  ]}
  height="600px"
/>
```

**When to use galleries:**
- Multiple screenshots of the same project
- Process flows or user journeys
- Design iterations or variations
- Related images that form a collection


## Gallery Features Explained

### Navigation Methods
1. **Arrow Buttons** - Click left/right arrows (desktop)
2. **Keyboard** - Use arrow keys when gallery is focused
3. **Touch/Swipe** - Swipe left/right on mobile devices
4. **Scroll** - Click and drag (works on all devices)

### Image Counter
The gallery shows your position (e.g., "2/4") in the bottom-right corner so users know how many images remain.

### Captions (Optional)
Add captions that appear on hover:

```astro
images={[
  { 
    src: "/images/img.jpg", 
    alt: "Alt text for accessibility",
    caption: "This caption appears on hover" // Optional
  }
]}
```

### Lazy Loading
The first gallery image loads immediately for fast perceived performance. Additional images load as needed, saving bandwidth.


## Comparison: Single Image vs Gallery

### Use Single Images When:
- You have one primary screenshot
- Images are not directly related
- You want readers to see all images while scrolling
- Each image has separate context

### Use Galleries When:
- Multiple images show the same project from different angles
- Images form a sequence (step 1, 2, 3)
- You want to save vertical space
- Images should be compared side-by-side


## Image Organization Tips

### File Structure
```
public/images/
├── projects/
│   ├── project-name/
│   │   ├── hero.jpg          (main image)
│   │   ├── screenshot-1.jpg
│   │   ├── screenshot-2.jpg
│   │   └── process/
│   │       ├── sketch.jpg
│   │       └── final.jpg
└── general/
    ├── about-photo.jpg
    └── og-image.png
```

### File Naming
- **Descriptive:** `ecommerce-checkout-flow.jpg` not `img1.jpg`
- **Consistent:** Use hyphens, not spaces or underscores
- **Organized:** Group by project in subfolders
- **Versioned:** Add numbers for sequences (`step-1.jpg`, `step-2.jpg`)

### Image Optimization
**Before uploading**, optimize with these tools:

| Tool | Best For | Link |
|------|----------|------|
| TinyPNG | Quick compression | [tinypng.com](https://tinypng.com) |
| Squoosh | Manual control | [squoosh.app](https://squoosh.app) |
| ImageOptim | Batch processing (Mac) | [imageoptim.com](https://imageoptim.com) |

**Target file sizes:**
- Hero images: <500KB
- Gallery images: <300KB
- Thumbnails: <150KB

### Format Selection
- **JPG:** Photos and complex images (80-85% quality)
- **PNG:** Graphics with transparency or text (90-95% quality)
- **WebP:** Modern browsers (25-35% smaller than JPG)
- **SVG:** Logos and simple graphics (scalable)


## Responsive Behavior

All images in Monograph are responsive:

- **Desktop (>1024px):** Images constrained to readable width
- **Tablet (768-1024px):** Images scale to column width
- **Mobile (<768px):** Images fit screen width

Galleries maintain aspect ratio across all devices without distortion.


## Accessibility Considerations

### Alt Text Guidelines
Write descriptive alt text that conveys the image's purpose:

**Bad:**
```html
<img src="/images/img.jpg" alt="image" />
```

**Good:**
```html
<img src="/images/dashboard.jpg" alt="Dashboard showing user analytics with bar charts and conversion metrics" />
```

### Keyboard Navigation
All galleries are keyboard accessible:
1. Tab to gallery
2. Use arrow keys to navigate
3. Escape to exit focus

### Screen Readers
Proper ARIA labels ensure screen readers announce:
- Current slide position ("Image 2 of 5")
- Navigation button purposes ("Previous image", "Next image")
- Image descriptions from alt text


## Print Behavior

When printing or exporting to PDF:
- Single images display normally
- Gallery images stack vertically (all visible)
- Navigation buttons hidden
- Captions shown below each image

Test with `Cmd/Ctrl+P` to see print preview.


## Common Use Cases

### Case Study Documentation
```markdown
## Problem
<img src="/images/before.jpg" alt="Original cluttered interface" />

## Solution
<img src="/images/after.jpg" alt="Redesigned clean interface" />

## Process
<Gallery
  images={[
    { src: "/images/wireframe.jpg", alt: "Initial wireframes" },
    { src: "/images/mockup.jpg", alt: "High-fidelity mockups" },
    { src: "/images/prototype.jpg", alt: "Interactive prototype" }
  ]}
/>
```

### Product Screenshots
```astro
<Gallery
  images={[
    { src: "/images/home.jpg", alt: "Homepage", caption: "Landing page" },
    { src: "/images/features.jpg", alt: "Features", caption: "Key features" },
    { src: "/images/pricing.jpg", alt: "Pricing", caption: "Pricing tiers" }
  ]}
  height="700px"
/>
```

### Design Process
```markdown
## Sketches
<img src="/images/sketch.jpg" alt="Hand-drawn concept sketches" />

## Digital Wireframes
<img src="/images/wireframe.jpg" alt="Digital wireframe in Figma" />

## Final Designs
<Gallery images={finalDesigns} />
```


## Troubleshooting

### Images Not Loading?
- Verify files are in `/public/images/` directory
- Check file paths start with `/images/` (not `images/`)
- Ensure file names match exactly (case-sensitive)
- Clear browser cache

### Gallery Not Working?
- Ensure Gallery component is imported: `import Gallery from '../components/Gallery.astro'`
- Check image array format matches documentation
- Verify JavaScript is enabled in browser
- Test in different browser

### Images Too Large?
- Optimize before uploading (use TinyPNG, Squoosh)
- Target: <500KB for hero images, <300KB for galleries
- Use WebP format for better compression
- Resize images to appropriate dimensions

### Gallery Navigation Laggy?
- Reduce image file sizes
- Optimize images before uploading
- Test on different device/browser
- Check CPU usage (close other apps)


## Examples from Real Projects

Here are some examples of how to structure different project types:

### Web Design Project
```markdown
# E-commerce Redesign

## Overview
<img src="/images/hero.jpg" alt="Homepage hero showing modern layout" />

## Key Screens
<Gallery
  images={[
    { src: "/images/home.jpg", alt: "Homepage" },
    { src: "/images/product.jpg", alt: "Product page" },
    { src: "/images/checkout.jpg", alt: "Checkout flow" }
  ]}
/>

## Mobile Experience
<Gallery
  images={mobileScreens}
  height="800px"
/>
```

### Branding Project
```markdown
# Brand Identity

## Logomark
<img src="/images/logo.jpg" alt="Final logo design" />

## Brand Applications
<Gallery
  images={[
    { src: "/images/business-card.jpg", alt: "Business cards" },
    { src: "/images/letterhead.jpg", alt: "Letterhead" },
    { src: "/images/signage.jpg", alt: "Storefront signage" }
  ]}
/>
```

### Development Project
```markdown
# API Dashboard

## Architecture
<img src="/images/architecture.jpg" alt="System architecture diagram" />

## Interface Screenshots
<Gallery images={dashboardScreens} />

## Code Example
[code blocks work here too]
```


## Best Practices Summary

✅ **Do:**
- Optimize images before uploading
- Use descriptive alt text
- Organize images in project folders
- Use galleries for related images
- Test on mobile devices
- Keep file sizes reasonable

❌ **Don't:**
- Upload unoptimized images (huge file sizes)
- Use generic alt text ("image", "photo")
- Mix unrelated images in galleries
- Forget to test keyboard navigation
- Assume images will load quickly without optimization

---

This preview shows the visual capabilities of Monograph. Use these patterns in your own projects for consistent, professional presentation.

**Ready to add your own images?** Place them in `/public/images/` and follow the examples above!
