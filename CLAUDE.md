# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page website for **Metolli SHK** (Heizung Sanitär Solartechnik Bretten) — a German plumbing/HVAC company. No build step, no framework, no bundler. Edit files and open `index.html` directly in a browser.

## File Structure

- `index.html` — entire page markup (one large file, ~3000+ lines); sections are delimited by `═══` block comments
- `style.css` — all styles (~1500+ lines); organized by section with `─────` block comments matching the HTML structure
- `main.js` — vanilla JS for UI interactions (scroll nav, hero slider, projects carousel, scroll reveal, contact form, modal)
- `i18n.js` — DE/EN language switcher; translations in the `T` object, DOM bindings in the `BINDINGS` array, applied via `applyLang()`
- `assets/` — images (UUIDs from Figma CDN + named SVGs), brand partner logos, Figma source files (`.fig`)

## CSS Design Tokens

All design decisions live in `:root` in `style.css`:

```css
--blue: #2547a0       /* primary brand blue */
--blue-dk: #1a3680    /* hover/darker blue */
--dark: #212020       /* body text */
--gray: #6b7280
--light: #f7f8fc      /* section backgrounds */
--font-head: 'Oswald' /* headings, uppercase */
--font-body: 'Inter'  /* body text */
--nav-h: 88px
--radius: 12px
```

## i18n Pattern

Adding or editing text content requires changes in two places:

1. Both `T.en` and `T.de` dictionaries in `i18n.js`
2. A matching entry in the `BINDINGS` array mapping a CSS selector → update type (`'t'` = textContent, `'h'` = innerHTML, `'p'` = placeholder) → translation key

The HTML contains German text as the default; `applyLang()` swaps it. Language persists in `localStorage` under key `'mam-lang'`.

## Page Sections (HTML order)

Navigation → Hero (slider, 3 slides) → Services (expandable grid) → Projects (infinite carousel) → CTA Blue → About → Why Choose Us → How It Works → Testimonials → Location (Google Maps embed) → CTA Strip → FAQ (native `<details>`) → Contact (form + contact details) → Footer → Order Modal (overlay)

## Key JS Behaviors

- **Hero slider**: `heroSlides[]` array in `main.js:63` references asset paths; add/remove slides there and update the `.hero-dots` buttons in `index.html`
- **Projects carousel**: infinite-loop via DOM clones (`.clone` class); `totalOrig` counts non-clone items automatically
- **Contact form**: POSTs to Netlify Forms (`action="/"`, `data-netlify="true"`); validation messages are bilingual via `cfMsg()`
- **Order modal**: triggered by `.svc-link` and `.open-modal` classes; controlled by `openModal()` / `closeModal()`
- **Scroll reveal**: `IntersectionObserver` on `revealEls`; stagger delay injected inline per grid section

## Development

No build tools. Open `index.html` in a browser, or use any static file server:

```
npx serve .
# or
python -m http.server 8080
```

The `@anthropic-ai/sdk` in `package.json` is a dependency for separate tooling, not used by the website itself.

## Assets

Figma-exported images use UUID filenames (e.g. `assets/6e9b151b-...jpg`). Named SVGs (e.g. `assets/heating_technology.svg`) are service icons. Brand partner logos follow their original filenames. Never rename UUID assets — they are referenced directly in `main.js` and `index.html`.
