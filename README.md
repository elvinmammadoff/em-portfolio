# EM. — Frontend Developer Portfolio

A dark, editorial-style personal portfolio website built with pure HTML, CSS, and JavaScript. Zero dependencies, zero frameworks.

## ✨ Features

- Custom animated cursor with lag effect
- Scroll-triggered reveal animations (Intersection Observer)
- Sticky nav with backdrop blur on scroll
- Infinite marquee strip
- Alternating project layout
- Fully responsive (mobile-first)
- Accessible — semantic HTML, ARIA labels, keyboard navigation
- Lightweight — no libraries, no build step required

## 🗂 Project Structure

```
em-portfolio/
├── index.html              # Main HTML file
├── assets/
│   ├── css/
│   │   ├── variables.css   # Design tokens & CSS custom properties
│   │   ├── base.css        # Reset, typography, shared utilities
│   │   ├── nav.css         # Navigation styles
│   │   ├── sections.css    # Hero, About, Skills, Projects, Contact, Footer
│   │   └── responsive.css  # Mobile breakpoints
│   ├── js/
│   │   ├── main.js         # Entry point — imports & initialises all modules
│   │   ├── cursor.js       # Custom cursor animation
│   │   ├── scroll.js       # Scroll reveal + smooth scroll
│   │   └── nav.js          # Nav scroll effect & mobile toggle
│   └── images/             # Local images (if any)
└── README.md
```

## 🚀 Getting Started

No build step needed. Just open `index.html` in your browser — or serve it via any static server:

```bash
# Using VS Code Live Server extension (recommended)
# Or with Python:
python3 -m http.server 3000

# Or with Node.js:
npx serve .
```

> **Note:** JavaScript modules (`type="module"`) require a server — they won't work via `file:///` directly in some browsers.

## 🎨 Customisation

1. **Personal info** — Update name, bio, email, GitHub/LinkedIn links in `index.html`
2. **Colors** — Edit `assets/css/variables.css` to change the accent color, backgrounds, etc.
3. **Projects** — Add/edit project cards in the `#projects` section of `index.html`
4. **Fonts** — Swap Google Fonts in `index.html` `<head>` and update `--font-*` variables

## 🌐 Deployment

This is a static site — deploy anywhere:

- **GitHub Pages** — Push to a repo, enable Pages in Settings → Pages → Deploy from `main` branch
- **Netlify** — Drag & drop the folder or connect your GitHub repo
- **Vercel** — `vercel deploy` from the project root

## 📄 License

MIT — free to use and modify.
