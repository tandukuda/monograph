---
title: "Image Galleries"
type: "Documentation"
year: 2024
tags: ["guide", "images", "optimization"]
description: "How to add optimized image galleries with lazy loading and responsive images"
---

# Optimized Image Galleries

Monograph includes powerful image optimization with responsive images, lazy loading, and smooth galleries.

## Single Optimized Images

For individual images, use the `OptimizedImage` component:

```astro
---
import OptimizedImage from '../components/OptimizedImage.astro';
---

<OptimizedImage
  src="/images/your-image.jpg"
  alt="Description of your image"
  width={800}
  height={600}
  caption="Optional image caption"
/>
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

### OptimizedImage
- **Responsive images** - Multiple sizes for different screens
- **Modern formats** - WebP and AVIF support with fallbacks
- **Lazy loading** - Images load when needed
- **Smooth transitions** - Fade-in animations
- **Captions** - Optional figure captions
- **SEO optimized** - Proper alt text and structured markup

### Gallery
- **Touch-friendly** - Swipe gestures on mobile
- **Keyboard navigation** - Arrow keys and tab navigation
- **Image counter** - Shows current position (1/5)
- **Smooth scrolling** - Buttery smooth transitions
- **Aspect ratio preservation** - Images never distort
- **Progressive loading** - First image loads immediately, others lazy load

## Advanced Options

### Image Component Props

```astro
<OptimizedImage
  src="/images/hero.jpg"
  alt="Hero image"
  width={1200}          // Max width
  height={800}          // Max height
  loading="eager"       // or "lazy" (default)
  quality={85}          // 1-100, default 80
  format="webp"         // or "avif", "png", "jpg"
  sizes="(max-width: 768px) 100vw, 50vw"
  widths={[400, 800, 1200]}  // Responsive breakpoints
  caption="Image caption"
  class="custom-class"
/>
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

Replace old HTML galleries:

```html
<!-- Old way -->
<div class="gallery-wrapper">
  <div class="gallery">
    <img src="/images/img1.jpg" alt="Image" />
    <img src="/images/img2.jpg" alt="Image" />
  </div>
</div>
```

With new optimized component:

```astro
<!-- New way -->
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

The optimized image system ensures your portfolio loads fast while looking professional across all devices!