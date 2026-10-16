# KROMA Studio — Premium Interactive Creative Agency Website

An award-winning caliber creative digital agency website inspired by [Unikorns Agency](https://unikorns.agency/), featured on Awwwards, Land-book, and Behance. Built with **React 19, TypeScript, Tailwind CSS, Lenis Smooth Scroll, Lucide Icons, and Canvas Confetti**.

![KROMA Studio Cover](/assets/hero-abstract.jpg)

---

## ✦ Key Highlights & Architecture

### 1. Visual Direction & Design System
- **Warm Editorial Color Palette:**
  - Background: `#F7F6F2` (Warm off-white)
  - Primary Text: `#171717` (Deep graphite)
  - Secondary Text: `#777777` (Muted slate gray)
  - Brand Accent: `#D7FF55` (Vivid lime / electric chartreuse)
  - Cards: Pure white `#FFFFFF` and neutral gray `#EFEFEA`
- **Typography:** Modern sans-serif hierarchy powered by Google Fonts (`Manrope` + `Syne` for editorial titles).
- **Motion & Interactions:**
  - Buttery smooth inertia scrolling via **Lenis** (with `prefers-reduced-motion` compliance).
  - Dynamic Custom Cursor follower with contextual state indicators (`"VIEW"`, `"EXPLORE"`, etc.).
  - Infinite client ticker marquee.
  - Interactive project detail modal with case study deep-dives.

---

## ✦ 12 Core Sections

1. **Navigation Header (`Navbar.tsx`):**
   - Brand logo with kinetic glowing dot insignia.
   - Smooth anchor navigation links (Work, Featured, Services, About, Contact).
   - Live availability badge with pulsating green status indicator (`Available Q3/Q4`).
   - Sticky backdrop blur transition upon scrolling.
   - Animated full-screen mobile menu.

2. **Hero Section (`HeroSection.tsx`):**
   - Oversized editorial typography: *"Creative thinking. Digital experiences. Lasting impact."*
   - Live dual clocks (Bangkok UTC+7, London UTC+0, New York UTC-5).
   - Bespoke 3D abstract fluid chrome & frosted glass sculpture artwork.
   - Dual CTAs with smooth scrolling (`Explore Our Work` & `Start a Project`).
   - Accolade micro-badges (14x Awwwards SOTD, FWA of the Month).

3. **Agency Introduction / Brand Statement (`AgencyIntro.tsx`):**
   - Big editorial statement: *“Good design makes people look. Great design makes people feel.”*
   - 3 Studio Philosophy Pillars: *Obsessive Craftsmanship*, *Emotional Resonance*, and *Commercial Velocity*.

4. **Featured Work / Portfolio Grid (`FeaturedProjects.tsx`):**
   - Asymmetric editorial grid featuring 8 rich case studies (Teamleap, Chroma, SE Ranking, OneGate, Flourish, Clickl, Veloce Labs, Aura Sound).
   - Category filtering (`All`, `Product Design & SaaS`, `Brand Identity & E-Commerce`, `Website Design & Marketing`, `Spatial Design & Web Experience`).
   - Image hover scale, metadata tags, and interactive *"View Case Study"* cues.

5. **Sticky Scroll Portfolio Experience (`StickyProjectSection.tsx`):**
   - Pinned viewport stacked deck experience.
   - As the user scrolls naturally, projects stack over one another with progressive depth shadows without trapping mouse or touch wheel scrolling.
   - Split layout with client challenges, deliverables, and impact metrics.

6. **Services & Disciplines (`ServicesSection.tsx`):**
   - 01. Brand Identity
   - 02. Website Design & Development
   - 03. Product Design
   - 04. Ongoing Design Support
   - Large numbered accordion rows revealing deliverables, toolchains, timelines, and pre-filling the contact inquiry.

7. **Trust Indicators & Metrics (`TrustIndicators.tsx`):**
   - Continuous infinite marquee of partner brands (Linear, Stripe, Vercel, Raycast, Framer, Loom, Notion).
   - 4 animated metrics: 140+ Projects Completed, 48 Design Awards, 99.2% Retention, $450M+ Value Created.

8. **Testimonials (`TestimonialsSection.tsx`):**
   - Editorial quotation carousel with client avatars, verified ratings, executive titles, and navigation controls.

9. **Agency Expertise & Industries (`IndustriesSection.tsx`):**
   - Flexible typographic layout with hover reveals across SaaS, Fintech, AI & Robotics, Luxury, and Healthcare.

10. **About the Team & Culture (`AboutSection.tsx`):**
    - High-resolution editorial photography of the studio team in Bangkok / London.
    - Studio principles: *Zero Bureaucracy*, *Partner Not Vendor*.
    - Partner & leadership director profiles.

11. **Contact CTA & Functional Form (`ContactSection.tsx`):**
    - Interactive service multi-select tags.
    - Budget tier selectors ($15k–$30k, $30k–$60k, $60k–$120k, $120k+).
    - Validation for name, email, company, and message.
    - Real transmission state with spinner, success confirmation card, and celebratory confetti explosion.

12. **Spacious Footer (`Footer.tsx`):**
    - Oversized typographic marquee: `KROMA STUDIO`.
    - One-click email copy button with clipboard feedback (`hello@kroma.agency`).
    - Social links with hover effects.
    - Smooth back-to-top control.

---

## ✦ Getting Started

### Development
```bash
npm install
npm run dev
```
The application will start on `http://127.0.0.1:5173/`.

### Production Build
```bash
npm run build
npm run preview
```
