# Есөн Шижир Инвест ББСБ — Frontend Requirements

## Project Overview

This is a **static frontend website** for Yesun Shijir Invest NBFI (Non-Bank Financial Institution) built with plain HTML, CSS, and vanilla JavaScript. No frameworks. Backend developer connects this to their backend independently.

**Stack:** HTML5 + CSS3 (shared.css design tokens) + Vanilla JS  
**Languages:** Mongolian (default) + English toggle  
**Color scheme:** Light mode default, full dark mode support  
**Fonts:** Plus Jakarta Sans (headings), Inter (body), JetBrains Mono (mono/tags)

---

## Design System

### Colors — Light Mode
```css
--primary:        #005e26   /* main green */
--primary-hover:  #004a1e
--bg:             #f9f9fc
--bg-surface:     #ffffff
--bg-low:         #f3f3f6
--bg-container:   #eeeef0
--bg-white:       #ffffff
--text:           #1a1c1e
--text-sec:       #3f4a3e
--text-muted:     #6f7a6d
--border:         #e2e2e6
```

### Colors — Dark Mode (`html.dark`)
```css
--primary:        #3CB917   /* bright green accent */
--primary-hover:  #2A8A10
--bg:             #0D0D0D
--bg-surface:     #161616
--bg-container:   #1E1E1E
--bg-white:       #1E1E1E
--text:           #FFFFFF
--text-muted:     #888888
--border:         #2A2A2A
```

### Navbar
- Height: 76px
- Logo: 60px height
- Blur: `backdrop-filter: blur(10px)`, semi-transparent background
- Sticky top-0, z-index 100
- Dark mode: `rgba(22,22,22,0.78)` background
- Light mode: `rgba(255,255,255,0.72)` background
- NO sub-navigation bars on any page — all navigation via dropdown menus

### Typography
- Headings: Plus Jakarta Sans, 700–800 weight
- Body: Inter, 400–600 weight
- Mono (tags, codes, labels): JetBrains Mono, 500 weight

---

## File Structure

```
yesun-shijir/
├── index.html                    — Home page
├── login.html                    — Login placeholder (backend handles)
├── DOCUMENTATION.md              — Developer guide (Mongolian)
├── css/
│   └── shared.css                — All design tokens, base styles, components
├── js/
│   ├── theme.js                  — Dark/light toggle (must load in <head>)
│   ├── lang.js                   — MN/EN language toggle
│   ├── nav.js                    — Header + footer injection, dropdown init
│   └── form-validation.js        — Form validation utility
├── components/
│   ├── header.html               — Injected via nav.js into #header-placeholder
│   └── footer.html               — Injected via nav.js into #footer-placeholder
├── about/
│   ├── tuz-mendchilgee.html      — Board greeting (ТУЗ мэндчилгээ)
│   ├── company-intro.html        — Company profile + auto-scroll timeline
│   ├── management-team.html      — Board (7) + Executive team (11), circle grid, popup
│   ├── org-structure.html        — Org chart placeholder
│   ├── transparency.html         — PDF documents (click to open, no download button)
│   └── iso-certificate.html      — ISO 9001 + ISO 27001 certificates
├── investment/
│   ├── itgelts.html              — Trust fund + request form (backend)
│   ├── hbuts.html                — ABS product info (no request button)
│   ├── bond.html                 — Bond info (no request button)
│   └── report.html               — Financial reports, 2 categories, year filter, PDF links
├── products/
│   └── index.html                — 3 loan categories, list → detail view
├── news/
│   └── index.html                — 4 tabs, card grid, pagination, API-ready
├── contact/
│   └── index.html                — 11 branches, list with map/call buttons
├── hr/
│   └── index.html                — Human Resources placeholder
└── assets/                       — Backend places all media files here
    ├── hero-bg.jpg
    ├── banner-video.mp4
    ├── app-phone.png
    ├── app-qr.png
    ├── org-chart.png
    ├── reports/*.pdf
    ├── policies/*.pdf
    ├── partners/*.png
    └── team/*.jpg
```

---

## Page-by-Page Requirements

### index.html — Home Page

**Sections in order:**
1. **Hero** — Full viewport height, gradient background (`/assets/hero-bg.jpg` overlay), white title text, accent green `<span>`, 2 CTA buttons
2. **Stats** — 4 cards with IntersectionObserver count-up animation on scroll: 10+ жил / 5,000+ харилцагч / ₮50В+ зээл / 99% сэтгэл ханамж
3. **Mission/Vision/Values** — 3 cards + green certificate banner (A+ / ISO 9001 / ISO 27001)
4. **Product CTA** — 3 cards: Зээл → /products/, Итгэлцэл → /investment/itgelts.html, Бонд → /investment/bond.html
5. **App section** — 2-column: left = phone mockup seamlessly merged with section background, right = content. Order: QR image → Google Play button → App Store button
6. **Video banner** — Full width 16:5 ratio. `<video autoplay muted loop>` tag present but commented out. Backend uncomments and sets `src="/assets/banner-video.mp4"`. Fallback: dark green gradient. Text: "БАЙГАЛАА ХАМГААЛЦГААЯ"
7. **Partners marquee** — Infinite auto-scroll left, hover pauses. Currently text only. Backend replaces with `<img src="/assets/partners/name.png">` tags. Must duplicate items for seamless loop.

**App Store URLs to update:**
```html
<!-- Google Play -->
href="https://play.google.com/store/apps/details?id=mn.yesunshijir"
<!-- App Store -->
href="https://apps.apple.com/mn/app/yesun-shijir/id..."
```

---

### components/header.html — Navigation

**Dropdown menus (hover to open):**

| Dropdown | Items |
|----------|-------|
| Бидний тухай | Байгууллагын бүтэц, Түүхэн замнал, Төлөөлөн удирдах зөвлөл, Гүйцэтгэх удирдлагын баг, Бүтэц зохион байгуулалт, Ил тод байдал, ISO Сертификат |
| Хөрөнгө оруулалт | Итгэлцэл, ХБҮЦ, Бонд, Тайлан |
| Мэдээ мэдээлэл | Цаг үеийн мэдээ, Нийгмийн хариуцлага, Заавар зөвлөмж |

**Standalone links:** Бүтээгдэхүүн, Хүний нөөц, Холбоо барих

**Right side actions:** МН/EN toggle → `#langToggle`, Dark/Light → `#themeToggle`, Нэвтрэх → `/login.html`

---

### about/company-intro.html — Timeline

**Structure:** Stats (4 cards) → section title → speed controls → auto-scrolling timeline

**Timeline behavior:**
- Auto-scrolls left continuously, no manual scroll
- Seamless loop: content duplicated, translateX animation
- Speed buttons: 1x / 1.5x / 1.8x (changes CSS animation duration)
- Clicking badge or card → popup modal (pauses animation)
- Closing popup → resumes animation
- ESC key closes popup

**Timeline data points (DATA array in JS):**
- major: true → large badge (58px circle) + vertical connector line + card with title/desc
- major: false → small dot (9px) + year label
- Cards alternate above/below center line (even index = above, odd = below)
- Connector line connects badge edge to card edge exactly

**Dark mode:** Green primary (#3CB917) for badge, connector, card border

**Adding new year:** Add object to DATA array:
```js
{ id:"2027", year:2027, major:true, title:"...", desc:"...", fullDesc:"...", img:null, icon:"material_icon_name", tags:["tag1"] }
```

---

### about/management-team.html — Team Grid

**Two tabs:**
- Төлөөлөн удирдах зөвлөл (7 members)
- Гүйцэтгэх удирдлагын баг (11 members)

**Card design:** Circle photo (120px diameter) + name below + role below. No dark overlay. 4-column grid.

**Photo:** `photo: null` → shows initials on green circle. `photo: "/assets/team/name.jpg"` → shows actual photo.

**Popup:** Centered modal with X close button only. Shows: photo/initials, name, role, experience, education, tenure, bio. ESC key + overlay click also closes.

**URL parameter:** `?tab=tuz` or `?tab=exec` to pre-select tab.

---

### products/index.html — Loan Products

**3 category tabs:**

| Хэрэглээний зээл (4) | Бизнесийн зээл (6) | Бусад зээл (5) |
|---|---|---|
| Автомашин худалдаж авах зээл | Эргэлтийн хөрөнгийн зээл | Ногоон зээл |
| Цалингийн зээл | Дугаар барьцаалсан зээл | Итгэлцэл барьцаалсан зээл |
| Өрхийн хэрэглээнд зориулсан зээл | Автомашин байрлуулах зээл | Бонд барьцаалсан зээл |
| Ажилтны цалингийн зээл | Шугамын зээл | Шуурхай зээл |
| | Бизнес эрхлэгч эмэгтэйчүүдийг дэмжих зээл | Үл хөдлөх хөрөнгө худалдан авах зээл |
| | Хөрөнгө оруулалтын зээл | |

**Detail view:** Clicking a product hides list, shows detail with: image area (icon placeholder), title, description, 2-column (terms + requirements), documents list, "Хүсэлт илгээх" button → `/investment/itgelts.html?request=true`

---

### news/index.html — News

**4 tabs:** Бүгд / Цаг үеийн мэдээ / Нийгмийн хариуцлага / Заавар зөвлөмж

**Card structure:** image (16:9) + category label + title + date + excerpt + "Дэлгэрэнгүй →" link

**Pagination:** 9 cards per page

**Current state:** Uses `MOCK_NEWS` array (18 items). Backend replaces with API call.

**Backend API integration:**
```javascript
// Replace MOCK_NEWS with:
const res = await fetch(`/api/news?cat=${cat}&page=${page}&limit=9`);
const data = await res.json();
// data = { items: [...], total: N }
// Each item: { id, cat, title, date, img, excerpt }
```

**Article page:** Links go to `/news/{id}.html` — backend creates these pages.

---

### contact/index.html — Branches

**11 branches** displayed as vertical list.

**Each branch item:**
- Left green border (highlighted when currently open)
- Name + nickname (uppercase, green, mono font)
- Working hours, address, phone
- "Нээлттэй" badge — auto-shown based on current time and workdays
- Right side: "Газрын зураг" button → Google Maps URL, "Залгах" button → `tel:` protocol

**Backend actions:**
- Update `mapUrl` field with real Google Maps links per branch
- Add branch photos: `img: "/assets/branches/branch-name.jpg"`

---

### investment/itgelts.html — Trust Fund Request Form

**Backend handles:** Form submission `POST /api/investment-request`

**Form fields:** Овог, Нэр, Утас, Дүн, Хугацаа, Нэмэлт тайлбар

---

### investment/report.html — Financial Reports

**2 sections:**
1. Жилийн аудитаар баталгаажуулсан санхүүгийн тайлан (2020–2024)
2. Үйл ажиллагааны санхүүгийн тайлан (Q3 2023, 2024 ТУЗ, 2025)

**Behavior:** Clicking row → opens PDF in new tab (`target="_blank"`). No download button.

**Year filter:** Бүгд / 2025 / 2024 / 2023

**Adding new report:**
```javascript
// Add to REPORTS.annual or REPORTS.ops array:
{ year: 2026, title: "2026 оны жилийн тайлан", date: "2027-01-15", url: "/assets/reports/annual-2026.pdf" }
```

---

### about/transparency.html — Documents

**Behavior:** Clicking document row → opens PDF in new tab. No download button.

**Backend:** Place PDFs in `/assets/reports/` and `/assets/policies/`.

---

## JS Modules

### theme.js (load in `<head>` before CSS)
- Reads `localStorage.ysi-theme`
- Applies `html.dark` or `html.light` class immediately (prevents flash)
- `window.toggleTheme()` → public API

### lang.js
- Reads `localStorage.ysi-lang` (default: 'mn')
- Finds all `[data-mn]` elements, sets `textContent` to `data-mn` or `data-en`
- `window.toggleLanguage()`, `window.setLanguage(lang)`, `window.getCurrentLang()` → public API
- For HTML content (titles with `<span>` etc): use `data-mn-html` / `data-en-html` attributes

### nav.js
- `fetch('/components/header.html')` → injects into `#header-placeholder`
- `fetch('/components/footer.html')` → injects into `#footer-placeholder`
- After injection: re-runs lang.js and theme.js to apply current state
- Initializes dropdown hover behavior and hamburger mobile menu

### Required page template
```html
<!DOCTYPE html>
<html lang="mn" class="light">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1.0"/>
  <title>Page Title | Есөн Шижир Инвест</title>
  <script src="/js/theme.js"></script>
  <!-- fonts + shared.css -->
</head>
<body>
  <div id="header-placeholder"></div>
  <main>
    <div class="container section-pad">
      <!-- content -->
    </div>
  </main>
  <div id="footer-placeholder"></div>
  <script src="/js/lang.js"></script>
  <script src="/js/nav.js"></script>
</body>
</html>
```

---

## Language Toggle (data attributes)

```html
<!-- Simple text -->
<h1 data-mn="Монгол текст" data-en="English text">Монгол текст</h1>

<!-- Text with HTML tags inside — use innerHTML variant -->
<h1 data-mn-html="Таны <span class='accent'>итгэлт</span> түнш"
    data-en-html="Your <span class='accent'>trusted</span> partner">
  Таны <span class="accent">итгэлт</span> түнш
</h1>
```

---

## Dark Mode Rules

1. Use only CSS variables, never hardcoded colors
2. `html.dark` class on `<html>` element activates dark tokens
3. Dark mode primary: `#3CB917` (bright green) — used as accent only
4. Dark backgrounds: `#0D0D0D` base, `#1E1E1E` cards, `#161616` nav
5. Dark borders: `#2A2A2A`

---

## Assets Backend Checklist

| File | Used in | Notes |
|------|---------|-------|
| `/assets/hero-bg.jpg` | index.html Hero | Any high-quality financial/city photo |
| `/assets/banner-video.mp4` | index.html Banner | Uncomment `<video>` tag after adding |
| `/assets/app-phone.png` | index.html App section | Phone mockup with app open |
| `/assets/app-qr.png` | index.html App section | QR code linking to app download |
| `/assets/org-chart.png` | org-structure.html | Organizational chart image |
| `/assets/reports/annual-YYYY.pdf` | report.html, transparency.html | Annual financial reports |
| `/assets/policies/*.pdf` | transparency.html | Policy documents |
| `/assets/partners/*.png` | index.html marquee | Logo images, grayscale preferred |
| `/assets/team/*.jpg` | management-team.html | Staff portrait photos |
| `/assets/branches/*.jpg` | contact/index.html | Branch building photos |

---

## Backend Integration Points

### 1. Login
`login.html` is a placeholder. Backend builds the full login UI and session logic.

### 2. News API
`news/index.html` uses `MOCK_NEWS` array. Replace with:
```js
GET /api/news?cat={all|breaking|social|advice}&page={N}&limit=9
Response: { items: [{id, cat, title, date, img, excerpt}], total: N }
```

### 3. Investment Request Form
`investment/itgelts.html` form submits to:
```
POST /api/investment-request
Body: { type, lastName, firstName, phone, amount, term, message }
```

### 4. App Store Links
Update in `index.html`:
```html
<a href="https://play.google.com/store/apps/details?id=mn.yesunshijir">
<a href="https://apps.apple.com/mn/app/yesun-shijir/id{APP_ID}">
```

### 5. PDF Files
Place files in `/assets/reports/` and `/assets/policies/`. Filenames match the `url` field in `REPORTS` object in `investment/report.html` and `about/transparency.html`.

### 6. Google Maps Links
Update `mapUrl` field per branch in `contact/index.html` `BRANCHES` array.

---

## Deployment Notes

- All paths are absolute (`/css/shared.css`, `/js/nav.js`, etc.) — must be served from web root
- `components/header.html` and `footer.html` are fetched via `fetch()` — requires HTTP server (not `file://`)
- Recommended: Nginx, Apache, or any static file server
- No build step required

