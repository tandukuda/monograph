<h1 align="center">Monograph</h1>

**Monograph** is a minimalist, editorial index-style portfolio built with [Astro](https://astro.build).

It is designed to be readable, durable, and resistant to trend decay. It features a strict three-column layout, file-based content management, and zero-runtime JavaScript (except where strictly necessary for **Search**).

![Monograph Preview](./assets/preview.png)

---

## Quick Start
### 1. Clone the repo
```bash
git clone https://github.com/tandukuda/monograph.git
```
### 2. Install dependencies
```bash
npm install
```
### 3. Run the development server
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

**Before deploying:** Delete the documentation projects (files starting with `00-`, `01-`, etc.)

## Features

- [x] Three-column editorial layout
- [x] Markdown-based content
- [x] Optional client-side search
- [x] Native CSS image galleries
- [x] Zero-config dark/light mode
- [x] Static site generation

## Stack

- [Astro](https://astro.build)
- Atkinson Hyperlegible Mono
- Pure CSS (no frameworks)

---

## File Naming Convention

Prefix with numbers so docs appear first in the index:
```
src/content/projects/
├── 01-welcome.md
├── 02-adding-projects.md
├── 03-image-galleries.md
├── 04-customization.md
├── 05-deployment.md
└── [user deletes these before deploying]
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
