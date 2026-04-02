# Smart it — Corporate Website

Official website for **Smart it**, a building & facility management company based in Assago (Milan), Italy. The site showcases their full range of professional services, enables clients to request quotes, and provides location and contact information.

**Live site:** [smartit-srl.com](https://smartit-srl.com)

---

## Tech Stack

| Layer     | Technology                                                                                     |
| --------- | ---------------------------------------------------------------------------------------------- |
| Framework | [Next.js 16](https://nextjs.org) (App Router)                                                  |
| Language  | TypeScript 5                                                                                   |
| Styling   | Tailwind CSS 4 + CSS Modules                                                                   |
| Animation | [Motion](https://motion.dev)                                                                   |
| Icons     | [Lucide React](https://lucide.dev) + [React Icons](https://react-icons.github.io/react-icons/) |
| Font      | Geist (via `next/font/google`)                                                                 |

---

## Project Structure

```
src/
├── app/                  # Next.js App Router pages & layouts
│   ├── layout.tsx        # Root layout (Header, Footer, CookieBanner)
│   ├── page.tsx          # Home page
│   ├── sitemap.ts        # Auto-generated XML sitemap
│   ├── chi-siamo/        # About page
│   ├── contatti/         # Contacts page
│   ├── servizi/          # Services listing page
│   │   └── [slug]/       # Dynamic service detail pages
│   ├── punto-smartit/    # Office / showroom page
│   └── privacy-policy/   # Privacy policy page
├── components/           # Reusable UI components (co-located with CSS Modules)
├── content/
│   └── global.ts         # All site copy (Italian), contacts, and FAQ content
├── lib/
│   ├── services.ts       # Service definitions (main & additional)
│   ├── routes.ts         # Centralised route constants
│   ├── menuItems.ts      # Navigation menu configuration
│   └── seo/              # Per-page metadata & structured data (JSON-LD)
└── types/
    └── index.ts          # Shared TypeScript types
```

---

## Pages & Routes

| Route             | Description                                                 |
| ----------------- | ----------------------------------------------------------- |
| `/`               | Home — hero, main services, why us, about snippet, contacts |
| `/servizi`        | Full services listing                                       |
| `/servizi/[slug]` | Individual service detail with FAQs                         |
| `/chi-siamo`      | About the company                                           |
| `/punto-smartit`  | Office / showroom info                                      |
| `/contatti`       | Contact form and map                                        |
| `/privacy-policy` | Privacy policy                                              |

### Services

**Main services** (`/servizi/[slug]`):

- Pulizie ordinarie e straordinarie
- Pulizie aziende e uffici
- Pulizie industriali e post-cantiere
- Pulizie condominiali
- Manutenzioni
- Imbiancature

**Additional services:**

- Portierato e reception
- Traslochi
- Facchinaggio e magazzinaggio
- Allestimento uffici
- Piccole costruzioni
- Giardinaggio e manutenzione del verde

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Script                 | Description                      |
| ---------------------- | -------------------------------- |
| `npm run dev`          | Start the development server     |
| `npm run build`        | Create a production build        |
| `npm start`            | Serve the production build       |
| `npm run lint`         | Run ESLint                       |
| `npm run typecheck`    | Run TypeScript type checking     |
| `npm run format`       | Format all files with Prettier   |
| `npm run format:check` | Check formatting without writing |

---

## Adding or Editing Content

All site copy lives in [`src/content/global.ts`](src/content/global.ts). To update text, FAQs, or contact details, edit that file — no component changes required.

To add a new service:

1. Add its copy to `src/content/global.ts`.
2. Add a new entry to the `services` or `additionalServices` array in `src/lib/services.ts`.
3. Add the corresponding cover image under `public/services/<service-name>/`.
4. SEO metadata for the detail page is automatically derived from the service data in `src/lib/seo/service-detail.ts`.

---

## SEO

Each page exports its own `Metadata` object built from the helpers in `src/lib/seo/`. Structured data (JSON-LD) is included for the home page and office page. An auto-generated sitemap is served at `/sitemap.xml` via `src/app/sitemap.ts`.
