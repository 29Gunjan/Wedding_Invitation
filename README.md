# 💍 Wedding Invitation — Cinematic Digital Experience

A premium, cinematic, single-page animated wedding invitation website built with modern web technologies. Designed to feel like a luxury digital experience — Apple-product-launch meets royal wedding card.

![Wedding Invitation Preview](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?style=flat-square&logo=tailwind-css)

## ✨ Features

- **Loading Screen** — Animated gold monogram with shimmer effect
- **Interactive Envelope** — CSS 3D envelope that opens on click with wax seal
- **Cinematic Name Reveal** — Letter-by-letter animation with gold gradient
- **Live Countdown** — Flip-clock style countdown to the wedding day
- **Our Story Timeline** — Alternating Polaroid-style milestone cards
- **Event Schedule** — Ceremony timeline with icons and dress code indicators
- **Photo Gallery** — Masonry grid with fullscreen lightbox
- **Floating Particles** — Rose petals and gold sparkles throughout
- **Custom Cursor** — Gold dot cursor that grows on interactive elements
- **Music Player** — Floating vinyl-style background music control
- **Smooth Scroll** — Buttery smooth scrolling via Lenis
- **Fully Responsive** — Mobile-first design, all breakpoints

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open in browser
# http://localhost:3000
```

## 🎨 Customization

### All content is in ONE file: `src/lib/config.ts`

Edit this single file to customize:
- **Couple names** and bios
- **Wedding date** (countdown auto-updates)
- **Venue** name, address, and map link
- **Events** (Mehndi, Haldi, Sangeet, etc.)
- **Timeline** milestones
- **Family** members
- **Social** links

### Adding Real Photos

Replace the placeholder images in `public/assets/images/`:
- `bride.jpg` — Bride's portrait
- `groom.jpg` — Groom's portrait
- `venue.jpg` — Venue photo
- `story-1.jpg` to `story-5.jpg` — Timeline photos
- `gallery-1.jpg` to `gallery-9.jpg` — Gallery photos

### Adding Background Music

Place your MP3 file at `public/audio/background.mp3`

### Theme Colors

Edit `tailwind.config.ts` to change the color palette:
- `blush` — Primary pink (#F8E1E7)
- `ivory` — Background (#FFF8F0)
- `champagne` — Gold accents (#D4AF37)
- `maroon` — Text and dark accents (#7B1E3A)
- `sage` — Green accents (#A8B5A0)

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── page.tsx            # Main page (all sections)
│   └── globals.css         # Global styles & animations
├── components/
│   ├── sections/           # All page sections
│   │   ├── LoadingScreen   # Gold monogram + progress bar
│   │   ├── Envelope        # Interactive 3D envelope
│   │   ├── HeroNames       # Animated name reveal
│   │   ├── InvitationQuote # Quote with word reveal
│   │   ├── CoupleIntro     # Split-screen bride & groom
│   │   ├── OurStory        # Timeline milestones
│   │   ├── SaveTheDate     # Countdown timer
│   │   ├── EventSchedule   # Ceremony cards
│   │   ├── Venue           # Map & directions
│   │   ├── PhotoGallery    # Masonry + lightbox
│   │   ├── FamilyBlessings # Family names
│   │   ├── DressCode       # Color swatches + gifts
│   │   └── Footer          # Thank you + social
│   ├── ui/                 # Reusable UI components
│   │   ├── CustomCursor    # Gold cursor
│   │   ├── MusicPlayer     # Audio control
│   │   ├── ParticleBackground # Floating petals
│   │   └── GoldDivider     # Section separators
│   └── providers/
│       └── SmoothScroll    # Lenis scroll wrapper
├── lib/
│   ├── config.ts           # ⭐ ALL content lives here
│   └── utils.ts            # Utility functions
└── public/
    ├── assets/images/      # All images
    └── audio/              # Background music
```

## 🌐 Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

1. Push to GitHub
2. Import in Vercel
3. Deploy — zero config needed

## 🛠 Tech Stack

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | Framework (App Router) |
| TypeScript | Type safety |
| Tailwind CSS | Styling |
| Framer Motion | Component animations |
| Lenis | Smooth scrolling |
| Lucide React | Icons |
| next/font | Font optimization |

## 📱 Browser Support

- Chrome 90+
- Firefox 90+
- Safari 15+
- Edge 90+
- Mobile Safari & Chrome

## 📄 License

MIT — Use it for your wedding! 💕
