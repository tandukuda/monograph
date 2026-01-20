---
title: "Image Optimization Demo"
type: "Example"
year: "2026"
tags: ["demo", "images", "performance"]
description: "Live demonstration of optimized images and galleries"
---

# Image Optimization Demo

This project demonstrates Monograph's built-in image optimization features with responsive images, lazy loading, and modern formats.

## Single Optimized Image

Here's an example of a single optimized image with automatic format conversion and responsive sizing:

```astro
import OptimizedImage from '../components/OptimizedImage.astro';

<OptimizedImage
  src="/images/hero-example.jpg"
  alt="Example hero image showing optimization"
  width={800}
  height={600}
  caption="This image is automatically optimized with WebP/AVIF formats"
  quality={85}
  loading="eager"
/>
```

**What happens automatically:**
- Multiple sizes generated (400px, 600px, 800px, 1200px)
- Modern formats served (WebP, AVIF) with JPG fallback
- Lazy loading with smooth fade-in animation
- Proper semantic markup for SEO and accessibility

## Image Gallery with Touch Navigation

Interactive gallery with swipe gestures, keyboard navigation, and optimized loading:

```astro
import Gallery from '../components/Gallery.astro';

<Gallery
  images={[
    {
      src: "/images/projects/demo-1.jpg",
      alt: "First project screenshot",
      caption: "Homepage with modern design"
    },
    {
      src: "/images/projects/demo-2.jpg", 
      alt: "Second project screenshot",
      caption: "User dashboard interface"
    },
    {
      src: "/images/projects/demo-3.jpg",
      alt: "Third project screenshot", 
      caption: "Mobile responsive view"
    },
    {
      src: "/images/projects/demo-4.jpg",
      alt: "Fourth project screenshot",
      caption: "Admin panel design"
    }
  ]}
  height="500px"
  quality={90}
  loading="lazy"
/>
```

## Live Interactive Demo

Here's a working gallery you can interact with right now (using the original HTML structure as a fallback):

<div class="gallery-wrapper">
  <button class="nav-btn prev" aria-label="Previous Slide">‹</button>
  <button class="nav-btn next" aria-label="Next Slide">›</button>

  <div class="gallery">
    <img src="/images/image 1.png" alt="Demo image 1 - Homepage design mockup" />
    <img src="/images/image 2.png" alt="Demo image 2 - User dashboard interface" />
    <img src="/images/image 3.png" alt="Demo image 3 - Mobile responsive view" />
  </div>
</div>

**Try it out:**
- **Desktop**: Click arrow buttons or use keyboard arrows
- **Mobile/Tablet**: Swipe left and right
- **Keyboard**: Tab to focus, then use arrow keys

**Gallery Features:**
- **Touch navigation**: Swipe left/right on mobile
- **Keyboard support**: Arrow keys and tab navigation
- **Image counter**: Shows current position (2/4)
- **Progressive loading**: First image loads immediately, others lazy load
- **Smooth scrolling**: Buttery smooth transitions
- **Caption overlay**: Hover to reveal image captions

## Performance Benefits

### Before Optimization
```html
<!-- Old approach -->
<img src="/images/large-photo.jpg" alt="Photo" />
<!-- Problems: -->
<!-- - 2MB+ file size -->
<!-- - No responsive sizing -->
<!-- - Blocks page rendering -->
<!-- - Poor mobile experience -->
```

### After Optimization
```astro
<!-- New approach -->
<OptimizedImage
  src="/images/large-photo.jpg"
  alt="Detailed photo description"
  width={800}
  height={600}
  quality={80}
/>
<!-- Benefits: -->
<!-- - Multiple formats: WebP (300KB), AVIF (250KB), JPG fallback -->
<!-- - Responsive sizes: 400px (mobile), 800px (desktop) -->
<!-- - Lazy loading: Only loads when visible -->
<!-- - Layout stability: No content jumping -->
```

## Real Performance Impact

**Traditional images:**
- Average file size: 1.5MB
- Load time: 3-5 seconds
- Mobile data usage: High
- Layout shift: Common

**Optimized images:**
- Average file size: 200-400KB (60-75% reduction)
- Load time: 0.5-1 second
- Mobile data usage: Minimal
- Layout shift: None (explicit dimensions)

## Browser Support

The optimization system provides graceful fallbacks:

- **Modern browsers** (Chrome 90+, Firefox 88+, Safari 14+): WebP + AVIF
- **Older browsers** (IE 11, older Safari): JPG/PNG fallbacks
- **All devices**: Responsive sizing based on screen size
- **Slow connections**: Progressive loading with placeholders

## Usage in Your Projects

### For Single Images
Replace regular `<img>` tags with `<OptimizedImage>`:

```astro
<!-- Instead of this -->
<img src="/images/photo.jpg" alt="Photo" />

<!-- Use this -->
<OptimizedImage
  src="/images/photo.jpg"
  alt="Detailed description"
  width={800}
  height={600}
/>
```

### For Image Collections
Use `<Gallery>` for multiple related images:

```astro
<Gallery
  images={[
    { src: "/images/step-1.jpg", alt: "Process step 1", caption: "Initial setup" },
    { src: "/images/step-2.jpg", alt: "Process step 2", caption: "Configuration" },
    { src: "/images/step-3.jpg", alt: "Process step 3", caption: "Final result" }
  ]}
  height="400px"
/>
```

## Image Preparation Tips

### File Organization
```
public/images/
├── projects/
│   ├── project-name/
│   │   ├── hero.jpg        (1200x800, high quality)
│   │   ├── screenshot-1.jpg (800x600, medium quality)
│   │   └── thumbnail.jpg   (400x300, lower quality)
└── general/
    ├── about-photo.jpg
    └── og-image.png
```

### Recommended Sizes
- **Hero images**: 1200-1600px wide, 16:9 or 4:3 ratio
- **Project screenshots**: 800-1200px wide
- **Gallery images**: 800px wide, consistent aspect ratio
- **Thumbnails**: 400-600px wide

### Quality Settings
- **Photographs**: 75-85% quality
- **Screenshots**: 85-95% quality  
- **Graphics/diagrams**: 90-95% quality

## SEO and Accessibility

Optimized images include proper markup for search engines and screen readers:

```html
<!-- Generated markup -->
<figure class="image-figure">
  <picture>
    <source srcset="image-400.avif 400w, image-800.avif 800w" type="image/avif">
    <source srcset="image-400.webp 400w, image-800.webp 800w" type="image/webp">
    <img src="image-800.jpg" 
         alt="Detailed description for screen readers"
         width="800" 
         height="600"
         loading="lazy">
  </picture>
  <figcaption>Human-readable caption</figcaption>
</figure>
```

This provides:
- Proper semantic structure for search engines
- Multiple format options for performance
- Descriptive alt text for accessibility
- Structured data ready for rich snippets

The image optimization system ensures your portfolio loads fast while maintaining professional image quality across all devices and browsers!
