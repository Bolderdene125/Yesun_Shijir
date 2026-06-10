# Есөн Шижир Инвест ББСБ — Вэбсайтын техникийн баримт бичиг

## Ерөнхий мэдээлэл

Вэбсайт нь цэвэр HTML, CSS, JavaScript ашигласан static frontend. Backend холболт шаарддаг хэсгүүдийг тусад нь тэмдэглэсэн.

---

## Файлын бүтэц

```
yesun-shijir/
├── index.html
├── login.html
├── css/
│   └── shared.css
├── js/
│   ├── theme.js
│   ├── lang.js
│   ├── nav.js
│   └── form-validation.js
├── components/
│   ├── header.html
│   └── footer.html
├── about/
│   ├── tuz-mendchilgee.html
│   ├── company-intro.html
│   ├── management-team.html
│   ├── org-structure.html
│   ├── transparency.html
│   └── iso-certificate.html
├── investment/
│   ├── itgelts.html
│   ├── hbuts.html
│   ├── bond.html
│   └── report.html
├── products/
│   └── index.html
├── news/
│   └── index.html
├── contact/
│   └── index.html
└── hr/
    └── index.html
```

---

## Assets — зургийн байршил

Backend хөгжүүлэгч дараах зургуудыг `/assets/` хавтаст байрлуулна.

```
assets/
├── hero-bg.jpg              (нүүр хуудасны Hero дэвсгэр зураг)
├── banner-video.mp4         (БАЙГАЛАА ХАМГААЛЦГААЯ хэсгийн видео)
├── app-phone.png            (App section-н утасны зураг, зүүн тал)
├── app-qr.png               (App QR код)
├── org-chart.png            (Бүтэц зохион байгуулалтын зураг)
├── reports/
│   ├── annual-2020.pdf
│   ├── annual-2021.pdf
│   ├── annual-2022.pdf
│   ├── annual-2023.pdf
│   ├── annual-2024.pdf
│   ├── q3-2023.pdf
│   ├── tuz-2024.pdf
│   └── ops-2025.pdf
├── policies/
│   ├── credit-policy.pdf
│   ├── security-policy.pdf
│   └── compliance.pdf
├── partners/
│   ├── golmt.png
│   ├── khan.png
│   ├── capitron.png
│   ├── avtoteevriin.png
│   ├── ard.png
│   ├── burenscore.png
│   ├── mandal.png
│   ├── mongol-daatgal.png
│   └── callpro.png
└── team/
    ├── m-gantulga.jpg
    ├── b-naranchimeg.jpg
    ├── d-enkhbaatar.jpg
    ├── e-boldbataar.jpg
    ├── o-tungalag.jpg
    ├── d-sukhbaatar.jpg
    ├── b-dagii.jpg
    ├── b-naranchimeg-exec.jpg
    ├── b-davaakhuu.jpg
    ├── b-enkhzorig.jpg
    ├── t-badam-ochir.jpg
    ├── b-myagmarjav.jpg
    ├── m-dorjsuren.jpg
    ├── n-enkhjin.jpg
    ├── b-munkhzul.jpg
    ├── o-tuguldur.jpg
    ├── g-delgermaa.jpg
    └── ch-batbayar.jpg
```

---

## JS файлуудын үүрэг

### theme.js
Dark/Light горим. `localStorage`-д `ysi-theme` key-ээр хадгалдаг. `html` тагт `dark` эсвэл `light` class нэмдэг.

### lang.js
МН/EN хэл солих. `data-mn` болон `data-en` attribute-тай бүх элементийн текстийг солидог. `localStorage`-д `ysi-lang` key-ээр хадгалдаг.

### nav.js
`/components/header.html` болон `/components/footer.html`-г `fetch`-ээр татаж, `#header-placeholder` болон `#footer-placeholder` div-д оруулдаг. Header inject хийсний дараа lang.js болон theme.js-г дахин дуудна.

### form-validation.js
Итгэлцэл хүсэлт илгээх формын validation.

---

## Backend холболт шаардлагатай хэсгүүд

### 1. Нэвтрэх (login.html)
`login.html` хоосон placeholder. Backend бүрэн хэрэгжүүлнэ.

### 2. Мэдээ мэдээлэл (news/index.html)
Одоо mock data ашигладаг. Backend `MOCK_NEWS` array-г дараах API-аар солино:

```javascript
GET /api/news?cat={all|breaking|social|advice}&page={N}&limit=9

Response:
{
  "items": [
    {
      "id": 1,
      "cat": "breaking",
      "title": "...",
      "date": "2026-01-01",
      "img": "/uploads/news/image.jpg",
      "excerpt": "..."
    }
  ],
  "total": 18
}
```

### 3. Итгэлцэл хүсэлт (investment/itgelts.html)
Form submit хийхэд дараах endpoint руу POST хүсэлт явуулна:

```javascript
POST /api/investment-request
Content-Type: application/json

{
  "type": "itgelts",
  "lastName": "...",
  "firstName": "...",
  "phone": "...",
  "amount": 0,
  "term": 0,
  "message": "..."
}
```

### 4. App Store / Google Play линк (index.html)
`/js/nav.js` дотор хайж олоод URL-г тохируулна:

```html
<!-- index.html -->
<a href="https://play.google.com/store/apps/details?id=mn.yesunshijir">Google Play</a>
<a href="https://apps.apple.com/mn/app/yesun-shijir/id...">App Store</a>
```

### 5. PDF файлууд
`/assets/reports/` болон `/assets/policies/` хавтаст PDF файлуудыг байрлуулахад автоматаар холбогдоно. Файлын нэрийг өөрчлөхгүй байна.

### 6. Салбарын зургууд (contact/index.html)
Одоо placeholder icon харуулж байна. Дараах зам дагуу зураг нэмнэ:

```
assets/branches/
├── headquarters.jpg
├── branch-2.jpg
├── branch-5.jpg
├── branch-6.jpg
├── branch-7.jpg
├── branch-9.jpg
├── branch-11.jpg
├── branch-13.jpg
├── branch-14.jpg
├── branch-1.jpg
└── branch-12.jpg
```

`contact/index.html` дотор `data-img` attribute-д зам заасан байна.

---

## Dark/Light Mode

CSS token-ууд `css/shared.css`-д тодорхойлсон:

```css
:root {
  --primary: #005e26;
  --bg: #f9f9fc;
  ...
}

html.dark {
  --primary: #3CB917;
  --bg: #0D0D0D;
  ...
}
```

Шинэ хуудас нэмэхдээ зөвхөн token ашиглана. Hardcode өнгө (`#005e26`, `#fff` гэх мэт) ашиглахгүй.

---

## Шинэ хуудас нэмэх заавар

1. `components/header.html` болон `components/footer.html` inject хийх placeholder нэмнэ
2. Breadcrumb, page-tag, page-title ашиглана
3. `lang.js` болон `nav.js` script-г хуудасны доод хэсэгт оруулна
4. Sub-nav (`<nav class="sub-nav">`) ашиглахгүй — dropdown-аар хандана

```html
<!-- Бүх хуудасны үндсэн бүтэц -->
<div id="header-placeholder"></div>
<main>
  <div class="container section-pad">
    <!-- агуулга -->
  </div>
</main>
<div id="footer-placeholder"></div>
<script src="/js/lang.js"></script>
<script src="/js/nav.js"></script>
```

---

## Хэл солих (data-mn / data-en)

Монгол/Англи текст бүхий элементэд дараах attribute нэмнэ:

```html
<h1 data-mn="Монгол текст" data-en="English text">Монгол текст</h1>
```

`lang.js` автоматаар шинэчилнэ. `innerHTML` шаарддаг элементэд:

```html
<h1 data-mn="Таны <span>итгэлт</span> түнш"
    data-en="Your <span>trusted</span> partner">...</h1>
```

---

## Хамтрагч байгууллагын лого нэмэх

`index.html`-н `#partnerTrack` div дотор:

```html
<div class="partner-logo-item">
  <img src="/assets/partners/new-partner.png" alt="Байгууллагын нэр"/>
</div>
<!-- Seamless loop-н тулд давхар нэмнэ -->
<div class="partner-logo-item">
  <img src="/assets/partners/new-partner.png" alt="Байгууллагын нэр"/>
</div>
```

---

## Удирдлагын баг (management-team.html)

`TEAMS` object-д шинэ гишүүн нэмэхдээ:

```javascript
{
  id: 21,
  name: 'О.Нэр',
  role: 'Албан тушаал',
  dept: '',
  exp: '5+ жил',
  edu: 'МУИС — ...',
  joined: '2022 оноос',
  bio: '...',
  photo: '/assets/team/o-ner.jpg'  // null бол initials харуулна
}
```

`tuz` массивт 7, `exec` массивт 11 гишүүн байна.

---

## Тайлан нэмэх (investment/report.html)

`REPORTS` object-д нэмэхэд автоматаар харагдана:

```javascript
// annual эсвэл ops массивт нэмнэ
{ year: 2026, title: '2026 оны жилийн тайлан', date: '2027-01-15', url: '/assets/reports/annual-2026.pdf' }
```

