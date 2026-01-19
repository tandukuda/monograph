<h1 align="center">Monograph</h1>

**Monograph** is a minimalist, editorial index-style portfolio built with [Astro](https://astro.build).

It is designed to be readable, durable, and resistant to trend decay. It features a strict three-column layout, file-based content management, and zero-runtime JavaScript (except where strictly necessary for **Search**).

![Monograph Preview](./assets/preview.png)

---

## Is Monograph for you?

Monograph is for people who want a durable, text-forward index of their work.

It is not designed for:
- Image-heavy portfolios
- Marketing pages
- Highly animated or branded sites
- Non–Git-based workflows

---

## Features

- **Strict Structure:** Three-column "Master-Detail" layout.
- **Content First:** Markdown-based workflow for Projects and Pages.
- **Zero-Config Theming:** Automatic Dark/Light mode based on system preference (intentionally limited).
- **Type-Safe:** Content collections with Zod schema validation.
- **Optional Utilities:**
  - Client-side Search (Toggleable).
  - Native CSS Scroll-Snap Galleries.
  - SEO-ready metadata.

---

## Configuration & Toggles

Monograph is designed to be forked and customized. Here is how to toggle specific features on or off.

### 1. Toggle Search
The search bar is client-side only and can be disabled if you prefer a static list.

**File:** `src/layouts/ThreeColumnLayout.astro`

```javascript
// --- CONFIGURATION ---
const SHOW_SEARCH = false;  // Set to 'false' to hide the search bar
// ---------------------
```
### 2. Toggle "Home Bio"
By default, the homepage displays a project feed. You can optionally add a "Welcome" or "Bio" section above the list.

**File:** `src/pages/index.astro`

To **enable** the bio, uncomment the following lines:

```javascript
// 1. Fetch Home Page Content
const homeEntry = await getEntry('pages', 'home');
const { Content } = await homeEntry.render();

// ... inside the template ...
<article class="intro-text">
  <Content /> </article>
```

### 3. Add a Slideshow (Gallery)
Monograph uses a lightweight, CSS-only carousel. To use it, paste this HTML snippet directly into any Project Markdown file.

**File:** `src/content/projects/*.md`

```html
<div class="gallery-wrapper">
  <button class="nav-btn prev">←</button>
  <button class="nav-btn next">→</button>

  <div class="gallery">
    <img src="/images/slide-1.jpg" alt="Description" />
    <img src="/images/slide-2.jpg" alt="Description" />
    <img src="/images/slide-3.jpg" alt="Description" />
  </div>
</div>
```
### 4. Customizing Navigation
Edit the sidebar links (index, about, others) directly in the layout.

**File:** `src/layouts/ThreeColumnLayout.astro`

```javascript
<nav class="main-nav">
	<ul>
        <li><a href="/">index</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/links">others</a></li>
	</ul>
</nav>
```

### 5. Customizing the Footer
The footer text is defined in the main layout file.

**File:** `src/layouts/ThreeColumnLayout.astro`

Find the `footerText` variable at the top of the file script and replace `"Monograph"` with your name.

```javascript
// ... inside the frontmatter ...
const currentYear = new Date().getFullYear();

// CHANGE THIS LINE:
const footerText = `©${currentYear} | Your Name Here`;
```

---

## Design System
Monograph uses a locked design system defined in CSS variables.

**File:** `src/styles/global.css`

To change the "Paper & Ink" theme, modify these variables:

```css
:root {
  /* LIGHT MODE */
  --bg-color: #FFFFFF;
  --text-primary: #000000;
  --text-secondary: #666666;
  --border-color: #CCCCCC;
}

@media (prefers-color-scheme: dark) {
  :root {
    /* DARK MODE */
    --bg-color: #000000;
    --text-primary: #FFFFFF;
    --text-secondary: #999999;
    --border-color: #333333;
  }
}
```

---

## Assets
### Images & Favicon

**Monograph** serves static assets from the `public/` directory.

```
/
├── public/
│   ├── favicon.svg       <-- Replace this file
│   └── images/           <-- Create this folder
│       ├── project-1.jpg
│       └── preview.png
├── src/
└── ...
```

1. **Favicon:** Replace `public/favicon.svg` with your own icon.
2. **Project Images:** - Create a folder: `public/images/`.
   - Add your files (e.g., `screenshot.jpg`).
   - In Markdown, reference them relative to the root:
     ```markdown
     ![Screenshot](/images/screenshot.jpg)
     ```

---

## Getting Started
### 1. Clone the repo
```
git clone https://github.com/tandukuda/monograph.git
```
### 2. Install dependencies
```
npm install
```
### 3. Run the development server
```
npm run dev
```
### 4. Build for production
```
npm run build
```

---

## Support the Project

If Monograph is part of your workflow, sponsorship helps keep it **fast, safe, and maintained**.

- ☕ Ko‑fi: [https://ko-fi.com/tandukuda](https://ko-fi.com/tandukuda)
- 💳 PayPal: [https://paypal.me/justbams](https://paypal.me/justbams)

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---
<div align="center">

**Built by [tandukuda](https://github.com/tandukuda)**

[⭐ Star this repo](https://github.com/tandukuda/monograph) • [🐛 Report Bug](https://github.com/tandukuda/monograph/issues) • [💡 Request Feature](https://github.com/tandukuda/monograph/issues) [☕ Ko-Fi](https://ko-fi.com/tandukuda)
</div>
