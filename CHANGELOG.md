# Changelog

All notable changes to Monograph will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2026-01-21

### Initial Release

#### Core Features
- **Three-column editorial layout** - Opinionated, index-first portfolio structure
- **Markdown-based content** - Simple content management without CMS
- **Centralized configuration** - Single `src/config/site.ts` file for all settings
- **Interactive image galleries** - Touch/swipe navigation with keyboard support
- **Client-side search** - Real-time project filtering (optional, configurable)
- **Dark/light mode** - Automatic based on system preferences
- **Static site generation** - Fast, secure, and deployable anywhere
- **TypeScript support** - Type-safe configuration and content schemas
- **SEO optimized** - Meta tags, Open Graph, semantic HTML, sitemap generation

#### Documentation
- Comprehensive in-app documentation projects
- Setup checklist (SETUP.md)
- README with clear positioning and philosophy
- Documentation on adding projects, galleries, customization, and deployment

#### Accessibility
- WCAG 2.1 AA compliant
- Keyboard navigation support
- Screen reader compatible
- High contrast mode support
- Reduced motion preferences respected
- Semantic HTML throughout

#### Developer Experience
- Development warning for unconfigured sites
- Clear error messages
- Improved 404 page with project suggestions
- TypeScript configuration included
- Clean, documented codebase

#### Performance
- Minimal JavaScript (progressive enhancement)
- Fast static HTML generation
- Lazy loading for gallery images
- Optimized CSS with no frameworks
- robots.txt and sitemap.xml included

### Known Limitations
- **No automatic image optimization** - Images must be manually optimized before upload
- **Basic search** - Simple string matching without fuzzy search or highlighting
- **No print stylesheet** - Planned for future release
- **Mobile project list** - Visible but may need UX improvements in future versions

### Planned Features (Future Releases)
- Automatic image optimization (WebP/AVIF conversion)
- Advanced search with fuzzy matching and highlighting
- Print-optimized stylesheet
- More customization options
- Plugin system for extensions

---

## Development Notes

### Philosophy
Monograph is intentionally opinionated. It treats portfolios as permanent indexes of work, not visual performances. Every feature decision supports this core position: clarity, permanence, and editorial integrity over novelty.

### Contributing
While Monograph is opinionated, contributions that align with its philosophy are welcome. Before submitting PRs:
1. Read the README philosophy section
2. Ensure changes maintain the editorial stance
3. Include documentation for new features
4. Test accessibility thoroughly

### Version Strategy
- **Major versions (x.0.0)**: Breaking changes or significant philosophy shifts
- **Minor versions (1.x.0)**: New features that maintain compatibility
- **Patch versions (1.0.x)**: Bug fixes and small improvements

---

[1.0.0]: https://github.com/tandukuda/monograph/releases/tag/v1.0.0
