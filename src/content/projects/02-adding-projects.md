---
title: "Adding Projects"
type: "Documentation"
year: "2026"
tags: ["guide", "content"]
description: "How to add and structure your portfolio projects"
---

# Adding Projects

Every project is a Markdown file in `src/content/projects/`.

## File Structure

Create a new file: `src/content/projects/my-project.md`
```markdown
---
title: "My Awesome Project"
type: "Web Design"
year: "2025"
tags: ["nextjs", "design", "client-work"]
link: "https://example.com"
description: "A brief one-liner for the index view"
---

Your project content goes here. Write as much or as little as you want.

## Subheadings Work

You can use standard Markdown formatting.

![Alt text](/images/screenshot.png)
```

## Required Fields

- **title:** Project name (appears in index and page)
- **type:** Category (e.g., "Tool", "Web Design", "Brand Identity")
- **year:** Year completed (used for sorting)

## Optional Fields

- **tags:** Array of keywords for search (e.g., `["react", "typescript"]`)
- **link:** External URL (shows as "External ↗" link on project page)
- **description:** Short summary (appears in index feed)

## File Naming

Files are sorted by year (newest first), but you can prefix with numbers for manual ordering:
```
01-featured-project.md   ← Shows first
02-another-project.md
my-old-project.md
```

## Adding Images

Place images in `/public/images/` and reference them:
```markdown
![Screenshot](/images/my-project.png)
```

Images automatically:
- Convert to grayscale (hover to see color)
- Get a 1px border
- Maintain aspect ratio
