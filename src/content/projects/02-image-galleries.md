---
title: "Image Galleries"
type: "Documentation"
year: "2026"
tags: ["guide", "images", "gallery"]
link: "https://github.com/tandukuda/monograph"
description: "How to add interactive image galleries with touch and keyboard navigation"
medium: ["Docs"]
role: ["Developer"]
---

# Image Galleries

Monograph includes an interactive image carousel component with touch gestures, keyboard navigation, and smooth scrolling.

## Single Images

For individual images, use standard HTML img tags:

```html
<img src="/images/your-image.jpg" alt="Descriptive alt text for accessibility" />
```

**Image Guidelines:**
- Place images in `/public/images/` directory
- Use descriptive alt text for accessibility
- Optimize images before uploading (recommended: TinyPNG, Squoosh)
- Recommended sizes: 800-1600px wide, under 500KB

## Image Galleries

For image carousels with navigation, use the `Gallery` component:

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
/>
```

## Gallery Features

### Interactive Navigation
- **Touch-friendly** - Swipe left/right on mobile and tablets
- **Keyboard navigation** - Arrow keys to move between images
- **Click navigation** - Arrow buttons on desktop
- **Image counter** - Shows current position (e.g., "2/5")

### Display Features
- **Smooth scrolling** - Buttery smooth transitions between images
- **Aspect ratio preservation** - Images never distort
- **Optional captions** - Hover to reveal image descriptions
- **Full-width display** - Images fill the gallery container

### Performance
- **Lazy loading** - First image loads immediately, others load as needed
- **Snap scrolling** - Images snap to position for clean presentation

## Component Props

```astro
<Gallery
  images={imageArray}      // Required: Array of image objects
  height="500px"           // Optional: Gallery height (default: 500px)
  loading="lazy"           // Optional: "lazy" or "eager" (default: lazy)
  quality={85}             // Optional: Not currently used (for future optimization)
  class="custom-gallery"   // Optional: Custom CSS class
/>
```

### Image Object Structure

```typescript
{
  src: string;          // Required: Path to image (e.g., "/images/photo.jpg")
  alt: string;          // Required: Descriptive alt text for accessibility
  caption?: string;     // Optional: Caption shown on hover
  width?: number;       // Optional: Image width for aspect ratio
  height?: number;      // Optional: Image height for aspect ratio
}
```

## Usage Examples

### Basic Gallery

```astro
<Gallery
  images={[
    { src: "/images/img1.jpg", alt: "First image" },
    { src: "/images/img2.jpg", alt: "Second image" },
    { src: "/images/img3.jpg", alt: "Third image" }
  ]}
/>
```

### Gallery with Captions

```astro
<Gallery
  images={[
    { 
      src: "/images/sketch.jpg", 
      alt: "Hand-drawn wireframe sketches",
      caption: "Initial concept sketches"
    },
    { 
      src: "/images/mockup.jpg", 
      alt: "High-fidelity mockup in Figma",
      caption: "Final design in Figma"
    }
  ]}
  height="700px"
/>
```

### Tall Gallery

```astro
<Gallery
  images={[
    { src: "/images/tall1.jpg", alt: "Tall image 1" },
    { src: "/images/tall2.jpg", alt: "Tall image 2" }
  ]}
  height="800px"
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
│   │       ├── hero.jpg
│   │       └── process/
│   │           ├── step-1.jpg
│   │           └── step-2.jpg
│   └── general/
│       └── about-photo.jpg
└── favicon.svg
```

### File Naming Best Practices
- Use descriptive names: `hero-homepage.jpg` not `img1.jpg`
- Include project context: `ecommerce-checkout-flow.jpg`
- Use hyphens, not spaces: `user-dashboard.jpg`
- Keep names concise but clear

## Image Optimization Tips

**Important:** Monograph serves images directly from `/public/images/`, so you should optimize them before uploading.

### Recommended Tools
- **[TinyPNG](https://tinypng.com/)** - Easy drag-and-drop compression (free)
- **[Squoosh](https://squoosh.app/)** - Google's web-based image optimizer
- **[ImageOptim](https://imageoptim.com/)** - Mac app for batch optimization
- **[Sharp CLI](https://sharp.pixelplumbing.com/)** - Command-line tool for automation

### Format Selection
- **JPG** - Best for photographs and complex images
- **PNG** - Best for graphics with transparency or text
- **WebP** - Modern format with better compression (25-35% smaller than JPG)
- **SVG** - Best for logos and simple graphics

### Size Guidelines
| Use Case | Width | File Size | Quality |
|----------|-------|-----------|---------|
| Hero images | 1200-1600px | < 500KB | 80-85% |
| Gallery images | 800-1200px | < 300KB | 75-85% |
| Thumbnails | 400-600px | < 150KB | 70-80% |
| Backgrounds | 1920px+ | < 400KB | 70-75% |

### Quality Settings
- **Photographs**: 75-85% quality (sweet spot for JPG)
- **Screenshots**: 80-90% quality (preserve text clarity)
- **Graphics/diagrams**: 85-95% quality (maintain sharpness)

## Browser Behavior

The gallery component works across all modern browsers:

- **Desktop**: Click arrow buttons, use keyboard arrows, or click-and-drag
- **Mobile/Tablet**: Swipe left/right with touch gestures
- **Keyboard**: Tab to gallery, use arrow keys to navigate
- **Screen readers**: Proper ARIA labels for accessibility

## Accessibility Features

✓ **Screen reader support** - All images have alt text  
✓ **Keyboard navigation** - Arrow keys work without clicking  
✓ **ARIA labels** - Navigation buttons properly labeled  
✓ **Focus indicators** - Visible focus states for keyboard users  
✓ **Reduced motion** - Respects prefers-reduced-motion setting  

## Performance Tips

1. **Optimize before upload** - Use TinyPNG or Squoosh to compress images
2. **Use appropriate sizes** - Don't upload 4000px images if you only need 1200px
3. **Consider WebP** - Can reduce file sizes by 25-35% vs JPG
4. **Lazy load wisely** - First gallery image loads eagerly, rest load lazily
5. **Batch optimization** - Optimize all project images at once for consistency

## Troubleshooting

**Images not loading?**
- Check file paths start with `/images/`
- Verify files exist in `/public/images/` directory
- Check spelling and case sensitivity

**Gallery not scrolling smoothly?**
- Ensure all images are optimized (large images can lag)
- Check browser console for JavaScript errors
- Try reducing image file sizes

**Captions not showing?**
- Verify captions are in the `images` array
- Try hovering longer (there's a delay)
- Check CSS isn't overriding caption styles

**Touch navigation not working?**
- Ensure you're testing on actual mobile device (not just browser resize)
- Check JavaScript is enabled
- Try clearing browser cache

## Migration from Plain Images

If you have existing projects with single images and want galleries:

**Before:**
```html
<img src="/images/step1.jpg" alt="Step 1" />
<img src="/images/step2.jpg" alt="Step 2" />
<img src="/images/step3.jpg" alt="Step 3" />
```

**After:**
```astro
<Gallery
  images={[
    { src: "/images/step1.jpg", alt: "Step 1", caption: "Initial setup" },
    { src: "/images/step2.jpg", alt: "Step 2", caption: "Configuration" },
    { src: "/images/step3.jpg", alt: "Step 3", caption: "Final result" }
  ]}
/>
```

## Advanced Customization

You can customize the gallery appearance in `src/styles/global.css`:

```css
/* Gallery container */
.gallery-wrapper {
  border: 2px solid var(--border-color); /* Thicker border */
  border-radius: 8px; /* Rounded corners */
}

/* Navigation buttons */
.nav-btn {
  background: rgba(0, 0, 0, 0.8); /* Darker background */
  font-size: 3rem; /* Larger arrows */
}

/* Image counter */
.gallery-counter {
  background: rgba(0, 0, 0, 0.9); /* Darker counter */
  font-size: 1rem; /* Larger text */
}
```

The gallery component provides a polished, accessible way to showcase multiple images with minimal setup!
