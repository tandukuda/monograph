---
title: "Image Galleries"
type: "Documentation"
year: 2024
tags: ["guide", "images", "optimization"]
description: "How to add optimized image galleries with lazy loading and responsive images"
medium: ["docs"]
role: ["Developer"]
---

# Optimized Image Galleries

Monograph includes powerful image optimization with responsive images, lazy loading, and smooth galleries.

## Single Images

For individual images, use HTML img tags:

```html
<img src="/images/your-image.jpg" alt="Description of your image" />
```

## Image Galleries

For image carousels, use the `Gallery` component:

```astro
---
import Gallery from '../components/Gallery.astro';
---

<Gallery
  images={[
    {
      src: "/images/project-1.jpg",
      alt: "Project screenshot 1",
      caption: "Homepage design"
    },
    {
      src: "/images/project-2.jpg",
      alt: "Project screenshot 2",
      caption: "User dashboard"
    },
    {
      src: "/images/project-3.jpg",
      alt: "Project screenshot 3",
      caption: "Mobile view"
    }
  ]}
  height="600px"
  quality={90}
/>
```

## Component Features

### HTML Images
- **Simple syntax** - Standard HTML img tags
- **Automatic optimization** - Astro optimizes images at build time
- **Responsive** - Images scale to container width
- **Accessible** - Proper alt text support
- **More control** - Full access to HTML attributes

### Gallery
- **Touch-friendly** - Swipe gestures on mobile
- **Keyboard navigation** - Arrow keys and tab navigation
- **Image counter** - Shows current position (1/5)
- **Smooth scrolling** - Buttery smooth transitions
- **Aspect ratio preservation** - Images never distort
- **Progressive loading** - First image loads immediately, others lazy load

## Advanced Options

### HTML Image Syntax

```html
<img src="/images/hero.jpg" alt="Alt text" />

<!-- For linked images -->
<a href="/images/full-size.jpg">
  <img src="/images/thumbnail.jpg" alt="Alt text" />
</a>
```

### Gallery Component Props

```astro
<Gallery
  images={imageArray}
  height="500px"        // Gallery height
  loading="lazy"        // First image can be "eager"
  quality={85}          // Image quality 1-100
  class="custom-gallery"
/>
```

## Image Organization

### Recommended Structure
```
public/
├── images/
│   ├── projects/
│   │   ├── project-1/
│   │   │   ├── hero.jpg
│   │   │   ├── screenshot-1.jpg
│   │   │   └── screenshot-2.jpg
│   │   └── project-2/
│   └── general/
└── favicon.svg
```

### File Naming
- Use descriptive names: `hero-image.jpg` not `img1.jpg`
- Include project context: `ecommerce-checkout.jpg`
- Use hyphens, not spaces: `user-dashboard.jpg`

## Image Optimization Tips

### Format Selection
- **WebP**: Best compression, modern browser support
- **AVIF**: Even better compression, newer format
- **JPG**: Photos and complex images
- **PNG**: Graphics with transparency

### Size Guidelines
- **Hero images**: 1200-1600px wide
- **Gallery images**: 800-1200px wide
- **Thumbnails**: 400-600px wide
- **Mobile-first**: Start with mobile sizes

### Quality Settings
- **Photos**: 80-85 quality
- **Graphics**: 90-95 quality
- **Background images**: 70-75 quality

## Performance Benefits

✓ **Faster loading** - Progressive image loading  
✓ **Bandwidth savings** - Right-sized images for each device  
✓ **Modern formats** - WebP/AVIF with automatic fallbacks  
✓ **Layout stability** - No content jumping during load  
✓ **SEO friendly** - Proper semantic markup  
✓ **Accessibility** - Screen reader compatible  

## Browser Support

- **Modern browsers**: Full WebP/AVIF support
- **Older browsers**: Automatic JPG/PNG fallbacks
- **Mobile**: Optimized touch interactions
- **Screen readers**: Proper alt text and ARIA labels

## Migration from Old Galleries

Replace old approaches:

**For single images, use HTML img tags:**
```html
<img src="/images/image.jpg" alt="Detailed description" />
```

**For galleries, use the Gallery component:**
```astro
<Gallery
  images={[
    { src: "/images/img1.jpg", alt: "Detailed description" },
    { src: "/images/img2.jpg", alt: "Detailed description" }
  ]}
/>
```

## Troubleshooting

**Images not loading?**
- Check file paths (use `/images/` for public folder)
- Verify image files exist
- Check file permissions

**Slow loading?**
- Reduce image file sizes
- Lower quality setting (70-80)
- Use WebP format

**Layout issues?**
- Set explicit width/height
- Check CSS conflicts
- Verify responsive settings

The combination of HTML img tags and Gallery components ensures your portfolio loads fast while looking professional across all devices!
