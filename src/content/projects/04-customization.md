---
title: "Customization Guide"
type: "Documentation"
year: "2026"
tags: ["guide", "config"]
description: "Toggle features and customize Monograph"
medium: ["docs"]
role: ["Developer"]
---

# Customization Guide

Monograph is designed to be forked and customized without complexity.

## Toggle Search Bar

**File:** `src/layouts/ThreeColumnLayout.astro`

Find this line near the top:
```javascript
const SHOW_SEARCH = false; // Set to true to enable
```

Change to `true` to show the search input in the left sidebar.

## Enable Homepage Bio

**File:** `src/pages/index.astro`

Uncomment these lines:
```javascript
// const homeEntry = await getEntry('pages', 'home');
// const { Content } = await homeEntry.render();
```

And in the template:
```astro
<article class="intro-text">
  <Content />
</article>
```

Then edit your bio in `src/content/pages/home.md`.

## Customize Footer

**File:** `src/layouts/ThreeColumnLayout.astro`

Find:
```javascript
const footerText = `©${currentYear} monograph | A minimalist...`;
```

Replace with your own text.

## Change Colors

**File:** `src/styles/global.css`

Modify these CSS variables:
```css
:root {
  --bg-color: #ffffff;        /* Background */
  --text-primary: #000000;    /* Main text */
  --text-secondary: #666666;  /* Meta text */
  --border-color: #cccccc;    /* Lines/borders */
}
```

## Disable Image Grayscale

**File:** `src/styles/global.css`

Find the `img` styles and remove:
```css
filter: grayscale(100%);
```

Or set to `0%` to always show color.

## Navigation Labels

**File:** `src/layouts/ThreeColumnLayout.astro`

Change the navigation links:
```astro
<nav class="main-nav">
  <ul>
    <li><a href="/">index</a></li>
    <li><a href="/about">about</a></li>
    <li><a href="/links">others</a></li>
  </ul>
</nav>
```

## Update CV/Contact

**File:** `src/content/pages/cv.md`

Edit this Markdown file to update your:
- Work experience
- Links (GitHub, Email, etc.)
- Any other right-sidebar content

## Advanced: Enabling "Split-Pane" Scrolling

**File:** `src/layouts/ThreeColumnLayout.astro`
### 1. Lock the Body
Find the `:global(body)` style block and update it to lock the viewport height.

```css
:global(body) {
  height: 100vh;      /* Force viewport height */
  overflow: hidden;   /* Disable main window scroll */
}
```

### 2. Update Grid Container
Ensure the main container fills the screen exactly.
```css
.grid-container {
  display: grid;
  height: 100vh;      /* Match viewport */
  /* ... keep margins/padding ... */
  grid-template-rows: 1fr auto; /* Content | Footer */
}
```

### 3. Enable Column Scrolling
Add `overflow-y: auto` to the columns you want to scroll (usually all three).
```css
.col-left, .col-middle, .col-right {
  height: 100%;       /* Fill the grid track */
  overflow-y: auto;   /* Enable independent scroll */
  
  /* Remove 'position: sticky' if it exists */
  position: static;   
}
```

*Note: This mode is best for desktop-heavy usage. Monograph's default mobile media queries will automatically handle stacking on smaller screens.*
