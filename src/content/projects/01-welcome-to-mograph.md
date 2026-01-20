---
title: "Welcome to Monograph"
type: "Documentation"
year: "2026"
tags: ["guide", "setup"]
link: "https://github.com/tandukuda/monograph"
description: "Getting started with your Monograph portfolio"
---

# Welcome to Monograph
This is your portfolio index. Each entry you see here is a project stored in `src/content/projects/`. Monograph includes advanced features like image optimization, interactive galleries, and centralized configuration.

## Important: Read the Setup Guide First!
**Before you do anything else**, read the **Setup Guide** project above. It contains essential configuration steps that must be completed before deploying your site.

## Quick Start
1. **Configure your site** - Update `src/config/site.ts` with your information
2. **Delete the demo projects** (this file and others starting with `00-`, `01-`, etc.)
3. **Add your own projects** by creating new `.md` files in `src/content/projects/`
4. **Use optimized images** with the `OptimizedImage` and `Gallery` components
5. **Customize the homepage bio** by editing `src/content/pages/home.md`
6. **Update your CV** in `src/content/pages/cv.md`

## What You're Looking At
- **Left Column:** Project index with search functionality (you are here)
- **Center Column:** Main content with optimized image support (this text)
- **Right Column:** Your CV/contact info with consistent layout

## Latest Features
- **Image Optimization** - Automatic WebP/AVIF conversion with 60-75% file size reduction
- **Interactive Galleries** - Touch/swipe navigation with keyboard support
- **Centralized Configuration** - Single file (`src/config/site.ts`) for all settings
- **Performance Optimized** - Core Web Vitals optimized with lazy loading
- **Type Safety** - Full TypeScript support for content and configuration
- **SEO Ready** - Meta tags, structured data, and accessibility built-in

## Development Warning
You may notice an orange warning box in the top-right corner during development. This appears when using placeholder configuration values and helps prevent accidental deployment with demo data.

The warning automatically disappears once you update your site configuration in `src/config/site.ts`. If you prefer to remove it completely, see the Setup Guide for instructions.

## Next Steps
Read the documentation projects below to learn about:
- **Image Optimization Demo** - See interactive galleries and optimized images in action
- **Image Galleries** - How to add touch-friendly carousels to your projects
- **Adding Projects** - Content structure and frontmatter options
- **Customization Guide** - Colors, typography, and feature toggles
- **Deployment** - Going live with your optimized portfolio
