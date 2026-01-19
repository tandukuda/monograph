---
title: "Image Galleries"
type: "Documentation"
year: "2026"
tags: ["guide", "images"]
description: "How to add image carousels to your projects"
---

# Image Galleries

You can add swipeable image carousels to any project.

## Example Gallery

<div class="gallery-wrapper">
  <button class="nav-btn prev" aria-label="Previous Slide">←</button>
  <button class="nav-btn next" aria-label="Next Slide">→</button>

  <div class="gallery">
    <img src="/images/image 1.png" alt="First slide" />
    <img src="/images/image 2.png" alt="Second slide" />
    <img src="/images/image 3.png" alt="Third slide" />
  </div>
</div>

## How to Add

Copy this HTML into any project Markdown file:
```html
<div class="gallery-wrapper">
  <button class="nav-btn prev" aria-label="Previous Slide">←</button>
  <button class="nav-btn next" aria-label="Next Slide">→</button>

  <div class="gallery">
    <img src="/images/your-image-1.jpg" alt="Description" />
    <img src="/images/your-image-2.jpg" alt="Description" />
    <img src="/images/your-image-3.jpg" alt="Description" />
  </div>
</div>
```

## Features

- **Touch-friendly:** Swipe on mobile
- **Keyboard navigation:** Use arrow buttons or Tab + Enter
- **Aspect ratio preserved:** Images won't crop or distort
- **Automatic hiding:** Arrow buttons hide on mobile (touch is better)

## Image Specs

- **Format:** JPG, PNG, WebP
- **Size:** Any size (will scale to fit)
- **Location:** `/public/images/` directory
