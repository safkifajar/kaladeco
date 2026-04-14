# Kaladeco.id — Company Profile Website

Website company profile untuk **Kaladeco.id**, penyedia jasa dekorasi lamaran, prewedding, tasyakuran, dan maternity shoot di Purwokerto dan sekitarnya.

> _"Mendekor dengan hati, semoga sampai ke hati."_

## Tech Stack

- **Next.js 16** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Lucide React** — icon library
- **Google Fonts** — Inter & Playfair Display

## Fitur

- Landing page responsive (mobile & desktop)
- Section: Hero, Tentang, Layanan, Portfolio, Harga, Testimoni, Kontak
- Portfolio gallery dengan filter kategori
- Paket harga dengan add-on (MUA, Flower Girl) & pilihan warna bunga
- Floating WhatsApp button
- SEO optimized (metadata, Open Graph, JSON-LD structured data)
- Sitemap & robots.txt otomatis
- Scroll reveal animations

## Menjalankan Project

### Prasyarat
- Node.js 18.17 atau lebih baru
- npm / yarn / pnpm

### Install dependencies
```bash
npm install
```

### Development mode
```bash
npm run dev
```
Buka [http://localhost:3000](http://localhost:3000) di browser.

### Production build
```bash
npm run build
npm start
```

### Lint
```bash
npm run lint
```

## Struktur Project

```
kaladeco/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout + SEO metadata
│   │   ├── page.tsx           # Homepage
│   │   ├── globals.css        # Global styles & Tailwind config
│   │   ├── icon.svg           # Favicon
│   │   ├── sitemap.ts         # Sitemap generator
│   │   └── robots.ts          # Robots.txt generator
│   └── components/
│       ├── Navbar.tsx
│       ├── Footer.tsx
│       ├── HeroSection.tsx
│       ├── AboutSection.tsx
│       ├── ServicesSection.tsx
│       ├── PortfolioSection.tsx
│       ├── PricelistSection.tsx
│       ├── TestimonialSection.tsx
│       ├── ContactSection.tsx
│       ├── WhatsAppFloat.tsx
│       ├── Reveal.tsx
│       └── icons/
│           └── InstagramIcon.tsx
├── public/                    # Static assets
└── package.json
```

## Kontak Bisnis

- **WhatsApp**: [+62 852-8391-0033](https://wa.me/6285283910033)
- **Email**: kaladeco.id@gmail.com
- **Instagram**: [@kaladeco.id](https://instagram.com/kaladeco.id)
- **Area Layanan**: Purwokerto & sekitarnya

## Deploy

Deploy termudah via [Vercel](https://vercel.com/new):

1. Push repo ke GitHub
2. Import project di Vercel
3. Deploy — otomatis live dalam ±2 menit

## Lisensi

© 2025 Kaladeco.id — All rights reserved.
