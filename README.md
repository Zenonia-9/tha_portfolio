# Portfolio Starter

![Astro](https://img.shields.io/badge/Astro-5-FF5A03?style=flat-square)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square)
![Tailwind](https://img.shields.io/badge/Tailwind-3-38B2AC?style=flat-square)
![License: CC BY 4.0](https://img.shields.io/badge/License-CC--BY--4.0-lightgrey?style=flat-square)

A customizable portfolio website built with Astro, React, and Tailwind CSS. Sample copy, project cards, project artwork, and the icon are placeholders for public-safe customization.

---

## Live Demo

Original design and live demo: https://theinhtooaung.vercel.app

---

## Highlights

- Responsive layout with dark and light themes
- Astro static site generation
- Interactive navigation and animations
- Filterable project gallery with detail pages
- MDX content workflow
- SEO and accessibility foundations

---

## Tech Stack

- Framework → Astro 5
- UI → React 19
- Styling → Tailwind CSS 3
- Animation → Framer Motion
- Icons → Lucide React
- Content → MDX
- Deployment → Vercel

---

## Project Structure

```txt
public/
 ├── projects/placeholder.svg
 └── favicon.svg

src/
 ├── components/
 │    ├── home/
 │    ├── layout/
 │    ├── projects/
 │    └── ui/
 ├── content/projects/
 ├── layouts/
 ├── pages/
 └── styles/

astro.config.mjs
tailwind.config.mjs
package.json
```

---

## Getting Started

### Requirements

- Node.js 22.12+

### Install

```bash
npm install
npm run dev
```

Open http://localhost:4321.

### Production Build

```bash
npm run build
npm run preview
```

---

## Content Management

Sample projects live inside:

```txt
src/content/projects/
```

Replace the sample entries and cover image with projects and artwork you choose to share publicly.

---

## Customization

### Theme

Edit:

```txt
src/styles/global.css
```

### Navigation

Edit:

```txt
src/components/layout/Navbar.astro
src/components/layout/MobileMenu.jsx
```

### Pages

| Route | Description |
|---|---|
| / | Home |
| /projects | Project gallery |
| /projects/[slug] | Project details |
| /about | About |
| /experience | Experience |
| /skills | Skills |
| /contact | Contact |

---

## Reusing This Design

You may adapt this repository as a portfolio starter or learning resource. Keep the visible credit to the original live demo:

https://theinhtooaung.vercel.app

---

## License

Creative Commons Attribution 4.0 International (CC BY 4.0).

You may share and adapt the material, including commercially, with attribution:

https://creativecommons.org/licenses/by/4.0/
