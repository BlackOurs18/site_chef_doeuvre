# Chef-d'œuvre Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete Next.js static portfolio website for Shakurov Matin's "Chef-d'œuvre" university project, presenting his profile, projects, and internship reports for Amazonie Parfum.

**Architecture:** Next.js App Router with TypeScript and static export (`output: 'export'`). All interactive components are client components (`"use client"`). Content is stored in `/data` files and consumed by server components (pages). Framer Motion handles animations with `prefers-reduced-motion` support.

**Tech Stack:** Next.js 15, TypeScript, Tailwind CSS, Framer Motion, next/font/google (Outfit)

---

## File Map

### Delete (Vite leftovers)
- `vite.config.js`
- `index.html`
- `src/` (entire directory)

### Create
```
next.config.js
tailwind.config.js
postcss.config.js
tsconfig.json

app/
  layout.tsx
  page.tsx
  globals.css
  profil/page.tsx
  realisations/page.tsx
  stage/page.tsx
  stage/rcf-en-berry/page.tsx
  stage/amazonie-parfum/page.tsx
  stage/amazonie-parfum/rapport-lancement/page.tsx
  stage/amazonie-parfum/rapport-final/page.tsx
  stage/amazonie-parfum/veille/page.tsx
  contact/page.tsx
  mentions-legales/page.tsx

components/
  Navbar.tsx
  Footer.tsx
  Container.tsx
  SectionTitle.tsx
  Card.tsx
  Button.tsx
  ScrollSpy.tsx
  MotionSection.tsx

data/
  site.ts
  stages.ts
  realisations.ts
  rapports.ts
```

---

## Task 1: Teardown Vite & Install Next.js

**Files:**
- Delete: `vite.config.js`, `index.html`, `src/`
- Modify: `package.json`

- [ ] **Step 1: Remove Vite files**

```bash
rm -f vite.config.js index.html
rm -rf src
```

- [ ] **Step 2: Install Next.js and all dependencies**

```bash
npm install next@latest react@latest react-dom@latest
npm install framer-motion
npm install -D typescript @types/node @types/react @types/react-dom
npm install -D tailwindcss postcss autoprefixer
npm install -D @tailwindcss/typography
```

- [ ] **Step 3: Update package.json scripts**

Replace the `scripts` section in `package.json`:
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

Also set `"type"` to `"module"` is NOT needed for Next.js — remove it or leave as `"commonjs"`.

- [ ] **Step 4: Verify**

```bash
npx next --version
```
Expected: prints Next.js version (15.x)

- [ ] **Step 5: Commit**

```bash
git add package.json package-lock.json
git commit -m "chore: replace vite with next.js"
```

---

## Task 2: Config Files

**Files:**
- Create: `next.config.js`, `tailwind.config.js`, `postcss.config.js`, `tsconfig.json`

- [ ] **Step 1: Create next.config.js**

```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
```

- [ ] **Step 2: Create tailwind.config.js**

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './data/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#F2EFE7',
        'bg-secondary': '#E4DDD3',
        'accent-main': '#8B004A',
        'accent-light': '#00A19B',
        'text-main': '#1A1A1A',
      },
      fontFamily: {
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
```

- [ ] **Step 3: Create postcss.config.js**

```js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

- [ ] **Step 4: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom", "dom.iterable", "esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{ "name": "next" }],
    "paths": {
      "@/*": ["./*"]
    }
  },
  "include": ["next-env.d.ts", "**/*.ts", "**/*.tsx", ".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}
```

- [ ] **Step 5: Commit**

```bash
git add next.config.js tailwind.config.js postcss.config.js tsconfig.json
git commit -m "chore: add next.js config files"
```

---

## Task 3: Data Layer

**Files:**
- Create: `data/site.ts`, `data/stages.ts`, `data/realisations.ts`, `data/rapports.ts`

- [ ] **Step 1: Create data/site.ts**

```typescript
export const siteConfig = {
  name: 'Shakurov Matin',
  program: 'DEUST Webmaster et Métiers de l\'Internet',
  organization: 'Amazonie Parfum',
  supervisor: 'Mamadou Coulibaly',
  address: '24 rue Moyenne, 18000 Bourges, France',
  email: 'matinshakurov@gmail.com',
  linkedin: 'https://linkedin.com/in/[À compléter]',
  github: 'https://github.com/BlackOurs18',
  siteUrl: 'https://[À compléter]',
  title: "Portfolio & Rapports de stage | Shakurov Matin",
  description: "Portfolio professionnel de Shakurov Matin, étudiant en DEUST Webmaster, présentant ses compétences web, ses projets et ses rapports de stage.",
}
```

- [ ] **Step 2: Create data/stages.ts**

```typescript
export interface Stage {
  id: string
  organization: string
  duration: string
  role: string
  period: string
  location: string
  description: string
  tasks: string[]
  skills: string[]
  hasReports: boolean
}

export const stages: Stage[] = [
  {
    id: 'rcf-en-berry',
    organization: 'RCF en Berry',
    duration: '1 mois',
    role: 'Assistant marketing et communication',
    period: '[À compléter]',
    location: 'Bourges, France',
    description: '[À compléter] — Stage d\'un mois au sein de la radio RCF en Berry, dans le cadre du DEUST Webmaster.',
    tasks: [
      '[À compléter] — Participation à la stratégie de communication',
      '[À compléter] — Création de contenus pour les réseaux sociaux',
      '[À compléter] — Mise à jour du site web',
    ],
    skills: ['Communication digitale', 'Rédaction web', 'Réseaux sociaux', '[À compléter]'],
    hasReports: false,
  },
  {
    id: 'amazonie-parfum',
    organization: 'Amazonie Parfum',
    duration: '[À compléter]',
    role: 'Webmaster stagiaire',
    period: '[À compléter]',
    location: '24 rue Moyenne, 18000 Bourges, France',
    description: 'Stage principal du Chef-d\'œuvre réalisé chez Amazonie Parfum, boutique de parfums et cosmétiques située à Bourges. Mission centrée sur la refonte et l\'optimisation de la présence web.',
    tasks: [
      '[À compléter] — Analyse et audit du site existant',
      '[À compléter] — Optimisation SEO',
      '[À compléter] — Création de contenus web',
      '[À compléter] — Gestion des réseaux sociaux',
    ],
    skills: ['Next.js', 'SEO', 'Rédaction web', 'UX/UI', 'Tailwind CSS', '[À compléter]'],
    hasReports: true,
  },
]
```

- [ ] **Step 3: Create data/realisations.ts**

```typescript
export type RealisationCategory = 'website' | 'visual' | 'social' | 'seo' | 'internship' | 'personal'

export interface Realisation {
  id: string
  title: string
  context: string
  objective: string
  technologies: string[]
  result: string
  link?: string
  image?: string
  category: RealisationCategory
}

export const realisations: Realisation[] = [
  {
    id: 'chef-doeuvre',
    title: 'Chef-d\'œuvre — Portfolio Web',
    context: 'Projet universitaire de fin de DEUST Webmaster',
    objective: 'Créer un portfolio professionnel présentant mon parcours, mes compétences et mes rapports de stage',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    result: 'Site web statique déployé sur hébergement mutualisé, présentant l\'ensemble du parcours de formation',
    category: 'website',
  },
  {
    id: 'amazonie-parfum-web',
    title: 'Amazonie Parfum — Optimisation web',
    context: 'Stage principal chez Amazonie Parfum, Bourges',
    objective: '[À compléter]',
    technologies: ['[À compléter]'],
    result: '[À compléter]',
    category: 'internship',
  },
  {
    id: 'rcf-social',
    title: 'RCF en Berry — Contenus digitaux',
    context: 'Stage chez RCF en Berry',
    objective: '[À compléter]',
    technologies: ['[À compléter]'],
    result: '[À compléter]',
    category: 'internship',
  },
]
```

- [ ] **Step 4: Create data/rapports.ts**

```typescript
export interface RapportSection {
  id: string
  title: string
  content: string
}

export interface Mission {
  title: string
  description: string
  tools: string[]
}

export const rapportLancement: RapportSection[] = [
  {
    id: 'contexte',
    title: 'Contexte & Enjeux',
    content: '[À compléter] — Présentation du contexte du stage chez Amazonie Parfum et des enjeux identifiés lors de la prise de poste.',
  },
  {
    id: 'presentation',
    title: 'Présentation de l\'organisation',
    content: 'Amazonie Parfum est une boutique de parfums et cosmétiques située au 24 rue Moyenne à Bourges (18000). [À compléter] — présentation détaillée de la structure, de son marché et de son positionnement.',
  },
  {
    id: 'sujet',
    title: 'Sujet du stage',
    content: '[À compléter] — Description précise de la mission confiée et de la problématique centrale du stage.',
  },
  {
    id: 'missions',
    title: 'Missions prévues',
    content: '[À compléter] — Liste et description des missions planifiées au lancement du stage.',
  },
  {
    id: 'calendrier',
    title: 'Calendrier prévisionnel',
    content: '[À compléter] — Planning détaillé des semaines de stage avec objectifs par période.',
  },
  {
    id: 'analyse-existant',
    title: 'Analyse du site existant',
    content: '[À compléter] — Audit du site web d\'Amazonie Parfum : UX, performances, SEO, accessibilité.',
  },
  {
    id: 'besoins',
    title: 'Besoins identifiés',
    content: '[À compléter] — Synthèse des besoins détectés lors de l\'analyse initiale.',
  },
  {
    id: 'veille',
    title: 'Veille & Recommandations',
    content: '[À compléter] — Premières recommandations basées sur la veille effectuée avant et pendant le début du stage.',
  },
]

export const rapportFinal: RapportSection[] = [
  {
    id: 'rappel-contexte',
    title: 'Rappel du contexte',
    content: '[À compléter] — Bref rappel du contexte et des objectifs fixés en début de stage.',
  },
  {
    id: 'missions-realisees',
    title: 'Missions réalisées',
    content: '[À compléter] — Description détaillée des missions effectivement réalisées pendant le stage.',
  },
  {
    id: 'exemples-production',
    title: 'Exemples de productions',
    content: '[À compléter] — Présentation concrète des livrables produits (captures, liens, extraits).',
  },
  {
    id: 'calendrier-reel',
    title: 'Calendrier réel',
    content: '[À compléter] — Bilan du temps consacré à chaque mission, comparé au prévisionnel.',
  },
  {
    id: 'analyse',
    title: 'Analyse du travail',
    content: '[À compléter] — Analyse critique du déroulement du stage et des résultats obtenus.',
  },
  {
    id: 'points-forts',
    title: 'Points forts',
    content: '[À compléter] — Ce qui a bien fonctionné pendant le stage.',
  },
  {
    id: 'axes-amelioration',
    title: 'Axes d\'amélioration',
    content: '[À compléter] — Points à améliorer identifiés en fin de stage.',
  },
  {
    id: 'actions-correctives',
    title: 'Actions correctives',
    content: '[À compléter] — Mesures prises ou envisagées pour corriger les axes d\'amélioration.',
  },
  {
    id: 'bilan-personnel',
    title: 'Bilan personnel',
    content: '[À compléter] — Retour personnel sur l\'expérience, les compétences développées et les apprentissages.',
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    content: '[À compléter] — Synthèse finale du stage et perspectives professionnelles.',
  },
]

export const veilleItems = [
  {
    id: 'ecommerce-parfum',
    category: 'E-commerce parfum',
    title: 'Tendances e-commerce dans la parfumerie',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
  {
    id: 'ux-conversion',
    category: 'UX & Conversion',
    title: 'Optimisation du tunnel de conversion',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
  {
    id: 'seo-local',
    category: 'SEO local',
    title: 'SEO local pour commerce de proximité',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
  {
    id: 'branding-parfum',
    category: 'Branding',
    title: 'Branding dans l\'univers parfum/cosmétiques',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
]
```

- [ ] **Step 5: Commit**

```bash
git add data/
git commit -m "feat: add data layer with types and content"
```

---

## Task 4: Base Components (Container, SectionTitle, Button, MotionSection)

**Files:**
- Create: `components/Container.tsx`, `components/SectionTitle.tsx`, `components/Button.tsx`, `components/MotionSection.tsx`

- [ ] **Step 1: Create components/Container.tsx**

```typescript
interface ContainerProps {
  children: React.ReactNode
  className?: string
}

export default function Container({ children, className = '' }: ContainerProps) {
  return (
    <div className={`mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  )
}
```

- [ ] **Step 2: Create components/SectionTitle.tsx**

```typescript
interface SectionTitleProps {
  title: string
  subtitle?: string
  className?: string
}

export default function SectionTitle({ title, subtitle, className = '' }: SectionTitleProps) {
  return (
    <div className={`mb-10 ${className}`}>
      <h2 className="text-3xl font-bold text-accent-main mb-3">{title}</h2>
      {subtitle && (
        <p className="text-lg text-text-main/70 max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
```

- [ ] **Step 3: Create components/Button.tsx**

```typescript
import Link from 'next/link'

interface ButtonProps {
  children: React.ReactNode
  href?: string
  variant?: 'primary' | 'secondary'
  className?: string
  onClick?: () => void
}

export default function Button({ children, href, variant = 'primary', className = '', onClick }: ButtonProps) {
  const base = 'inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2'
  const variants = {
    primary: 'bg-accent-main text-white hover:bg-accent-main/90 focus-visible:outline-accent-main',
    secondary: 'bg-bg-secondary text-text-main hover:bg-accent-light/20 border border-accent-light/30 focus-visible:outline-accent-light',
  }
  const classes = `${base} ${variants[variant]} ${className}`

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>
  }
  return <button onClick={onClick} className={classes}>{children}</button>
}
```

- [ ] **Step 4: Create components/MotionSection.tsx**

```typescript
'use client'

import { motion, useReducedMotion } from 'framer-motion'

interface MotionSectionProps {
  children: React.ReactNode
  className?: string
  delay?: number
}

export default function MotionSection({ children, className = '', delay = 0 }: MotionSectionProps) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
```

- [ ] **Step 5: Commit**

```bash
git add components/Container.tsx components/SectionTitle.tsx components/Button.tsx components/MotionSection.tsx
git commit -m "feat: add base components"
```

---

## Task 5: Card Component

**Files:**
- Create: `components/Card.tsx`

- [ ] **Step 1: Create components/Card.tsx**

```typescript
import Link from 'next/link'

interface CardProps {
  title: string
  description?: string
  tags?: string[]
  href?: string
  children?: React.ReactNode
  className?: string
  accent?: boolean
}

export default function Card({ title, description, tags, href, children, className = '', accent = false }: CardProps) {
  const inner = (
    <div className={`bg-bg-secondary rounded-3xl p-6 shadow-sm transition-shadow duration-200 ${href ? 'hover:shadow-md' : ''} ${accent ? 'border-l-4 border-accent-main' : ''} ${className}`}>
      <h3 className={`text-xl font-semibold mb-2 ${accent ? 'text-accent-main' : 'text-text-main'}`}>{title}</h3>
      {description && <p className="text-text-main/70 text-sm mb-4 leading-relaxed">{description}</p>}
      {tags && tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs bg-bg-primary text-accent-light border border-accent-light/30 px-3 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
      )}
      {children}
    </div>
  )

  if (href) {
    return <Link href={href} className="block focus-visible:outline-2 focus-visible:outline-accent-main rounded-3xl">{inner}</Link>
  }
  return inner
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Card.tsx
git commit -m "feat: add Card component"
```

---

## Task 6: Navbar Component

**Files:**
- Create: `components/Navbar.tsx`

- [ ] **Step 1: Create components/Navbar.tsx**

```typescript
'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import Container from './Container'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/profil', label: 'Profil' },
  { href: '/realisations', label: 'Projets' },
  { href: '/stage', label: 'Stage' },
  { href: '/contact', label: 'Contact' },
]

const stageSubLinks = [
  { href: '/stage', label: 'Vue d\'ensemble' },
  { href: '/stage/rcf-en-berry', label: 'RCF en Berry' },
  { href: '/stage/amazonie-parfum', label: 'Amazonie Parfum' },
  { href: '/stage/amazonie-parfum/rapport-lancement', label: 'Rapport de lancement' },
  { href: '/stage/amazonie-parfum/rapport-final', label: 'Rapport final' },
  { href: '/stage/amazonie-parfum/veille', label: 'Veille' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [stageOpen, setStageOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) => href === '/' ? pathname === '/' : pathname.startsWith(href)

  return (
    <header className="sticky top-0 z-50 bg-bg-primary/95 backdrop-blur-sm border-b border-bg-secondary">
      <Container>
        <nav aria-label="Navigation principale" className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-lg text-accent-main focus-visible:outline-2 focus-visible:outline-accent-main rounded">
            Shakurov Matin
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-1" role="list">
            {navLinks.map((link) =>
              link.href === '/stage' ? (
                <li key={link.href} className="relative">
                  <button
                    onClick={() => setStageOpen(!stageOpen)}
                    onBlur={() => setTimeout(() => setStageOpen(false), 150)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent-main ${isActive('/stage') ? 'text-accent-main bg-accent-main/10' : 'text-text-main hover:text-accent-main hover:bg-accent-main/5'}`}
                    aria-expanded={stageOpen}
                    aria-haspopup="true"
                  >
                    Stage ▾
                  </button>
                  <AnimatePresence>
                    {stageOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        transition={{ duration: 0.15 }}
                        className="absolute top-full left-0 mt-1 w-56 bg-bg-primary rounded-2xl shadow-lg border border-bg-secondary p-2"
                        role="menu"
                      >
                        {stageSubLinks.map((sub) => (
                          <li key={sub.href} role="none">
                            <Link
                              href={sub.href}
                              role="menuitem"
                              className={`block px-4 py-2 text-sm rounded-xl transition-colors ${pathname === sub.href ? 'text-accent-main bg-accent-main/10' : 'text-text-main hover:text-accent-main hover:bg-accent-main/5'}`}
                              onClick={() => setStageOpen(false)}
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </li>
              ) : (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-accent-main ${isActive(link.href) ? 'text-accent-main bg-accent-main/10' : 'text-text-main hover:text-accent-main hover:bg-accent-main/5'}`}
                    aria-current={isActive(link.href) ? 'page' : undefined}
                  >
                    {link.label}
                  </Link>
                </li>
              )
            )}
          </ul>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-xl text-text-main hover:bg-bg-secondary focus-visible:outline-2 focus-visible:outline-accent-main"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
          >
            <span className="block w-5 h-0.5 bg-current mb-1 transition-transform" style={{ transform: menuOpen ? 'rotate(45deg) translateY(6px)' : '' }} />
            <span className="block w-5 h-0.5 bg-current mb-1 transition-opacity" style={{ opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-current transition-transform" style={{ transform: menuOpen ? 'rotate(-45deg) translateY(-6px)' : '' }} />
          </button>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden md:hidden"
            >
              <ul className="pb-4 flex flex-col gap-1" role="list">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`block px-4 py-2 rounded-xl text-sm font-medium ${isActive(link.href) ? 'text-accent-main bg-accent-main/10' : 'text-text-main'}`}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive(link.href) ? 'page' : undefined}
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li className="pl-4 pt-2 border-t border-bg-secondary">
                  <p className="text-xs text-text-main/50 mb-2 uppercase tracking-wide">Stage</p>
                  {stageSubLinks.slice(1).map((sub) => (
                    <Link
                      key={sub.href}
                      href={sub.href}
                      className={`block px-4 py-2 rounded-xl text-sm ${pathname === sub.href ? 'text-accent-main' : 'text-text-main/70'}`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {sub.label}
                    </Link>
                  ))}
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navbar.tsx
git commit -m "feat: add Navbar with dropdown and mobile menu"
```

---

## Task 7: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create components/Footer.tsx**

```typescript
import Link from 'next/link'
import Container from './Container'
import { siteConfig } from '@/data/site'

export default function Footer() {
  return (
    <footer className="bg-bg-secondary mt-20 border-t border-bg-secondary">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="font-bold text-accent-main text-lg">{siteConfig.name}</p>
            <p className="text-sm text-text-main/60 mt-1">{siteConfig.program}</p>
            <p className="text-sm text-text-main/50 mt-2">Chef-d'œuvre — Portfolio professionnel</p>
          </div>
          <nav aria-label="Navigation secondaire">
            <p className="font-semibold text-text-main mb-3 text-sm uppercase tracking-wide">Navigation</p>
            <ul className="flex flex-col gap-2 text-sm" role="list">
              {[
                { href: '/', label: 'Accueil' },
                { href: '/profil', label: 'Profil' },
                { href: '/realisations', label: 'Projets' },
                { href: '/stage', label: 'Stage' },
                { href: '/contact', label: 'Contact' },
                { href: '/mentions-legales', label: 'Mentions légales' },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-text-main/60 hover:text-accent-main transition-colors focus-visible:outline-2 focus-visible:outline-accent-main rounded">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="font-semibold text-text-main mb-3 text-sm uppercase tracking-wide">Liens</p>
            <ul className="flex flex-col gap-2 text-sm" role="list">
              <li>
                <a href={siteConfig.linkedin} target="_blank" rel="noopener noreferrer" className="text-text-main/60 hover:text-accent-main transition-colors focus-visible:outline-2 focus-visible:outline-accent-main rounded">
                  LinkedIn ↗
                </a>
              </li>
              <li>
                <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" className="text-text-main/60 hover:text-accent-main transition-colors focus-visible:outline-2 focus-visible:outline-accent-main rounded">
                  GitHub ↗
                </a>
              </li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="text-text-main/60 hover:text-accent-main transition-colors focus-visible:outline-2 focus-visible:outline-accent-main rounded">
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-text-main/10 text-center text-xs text-text-main/40">
          © {new Date().getFullYear()} {siteConfig.name} — Chef-d'œuvre DEUST Webmaster
        </div>
      </Container>
    </footer>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer component"
```

---

## Task 8: ScrollSpy Component

**Files:**
- Create: `components/ScrollSpy.tsx`

- [ ] **Step 1: Create components/ScrollSpy.tsx**

```typescript
'use client'

import { useState, useEffect } from 'react'

interface ScrollSpyItem {
  id: string
  label: string
}

interface ScrollSpyProps {
  items: ScrollSpyItem[]
}

export default function ScrollSpy({ items }: ScrollSpyProps) {
  const [activeId, setActiveId] = useState<string>(items[0]?.id ?? '')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -70% 0px' }
    )

    items.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [items])

  return (
    <nav aria-label="Navigation dans la page" className="sticky top-24">
      <p className="text-xs uppercase tracking-widest text-text-main/40 mb-4 font-semibold">Sommaire</p>
      <ul className="flex flex-col gap-1" role="list">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`block text-sm py-1.5 px-3 rounded-xl transition-all duration-150 focus-visible:outline-2 focus-visible:outline-accent-main ${
                activeId === item.id
                  ? 'text-accent-main bg-accent-main/10 font-medium'
                  : 'text-text-main/60 hover:text-text-main hover:bg-bg-secondary'
              }`}
              aria-current={activeId === item.id ? 'location' : undefined}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile horizontal scrollspy */}
      <style>{`
        @media (max-width: 768px) {
          nav[aria-label="Navigation dans la page"] {
            position: static;
          }
        }
      `}</style>
    </nav>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ScrollSpy.tsx
git commit -m "feat: add ScrollSpy component"
```

---

## Task 9: Root Layout & Global CSS

**Files:**
- Create: `app/layout.tsx`, `app/globals.css`

- [ ] **Step 1: Create app/globals.css**

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  body {
    @apply bg-bg-primary text-text-main font-sans;
  }

  :focus-visible {
    @apply outline-2 outline-accent-main outline-offset-2;
  }

  h1 { @apply text-4xl md:text-5xl font-bold leading-tight; }
  h2 { @apply text-2xl md:text-3xl font-bold; }
  h3 { @apply text-xl font-semibold; }

  p { @apply leading-relaxed; }
}

@layer utilities {
  .text-balance { text-wrap: balance; }
}
```

- [ ] **Step 2: Create app/layout.tsx**

```typescript
import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { siteConfig } from '@/data/site'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
})

export const metadata: Metadata = {
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={outfit.variable}>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
```

- [ ] **Step 3: Verify dev server starts**

```bash
npm run dev
```
Expected: server starts at `http://localhost:3000`, no TypeScript errors.

- [ ] **Step 4: Commit**

```bash
git add app/layout.tsx app/globals.css
git commit -m "feat: add root layout with font and global styles"
```

---

## Task 10: Homepage

**Files:**
- Create: `app/page.tsx`

- [ ] **Step 1: Create app/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Card from '@/components/Card'
import MotionSection from '@/components/MotionSection'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: "Chef-d'œuvre — Portfolio Web & Rapports de stage",
  description: siteConfig.description,
}

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-bg-primary pt-20 pb-16">
        <Container>
          <MotionSection>
            <p className="text-accent-light text-sm font-semibold uppercase tracking-widest mb-4">Chef-d'œuvre — DEUST Webmaster</p>
            <h1 className="text-balance text-text-main mb-4">
              Chef-d'œuvre —<br />
              <span className="text-accent-main">Portfolio Web</span> & Rapports de stage
            </h1>
            <p className="text-lg text-text-main/70 max-w-2xl mb-8">
              Un site conçu pour présenter mes compétences webmaster, mes projets et l'analyse de mon stage chez Amazonie Parfum.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button href="/stage/amazonie-parfum/rapport-lancement">Rapport de lancement</Button>
              <Button href="/stage/amazonie-parfum/rapport-final" variant="secondary">Rapport final</Button>
              <Button href="/realisations" variant="secondary">Mes projets</Button>
            </div>
          </MotionSection>
        </Container>
      </section>

      {/* Identity card */}
      <section className="bg-bg-secondary py-12" aria-labelledby="identity-title">
        <Container>
          <MotionSection delay={0.1}>
            <h2 id="identity-title" className="sr-only">Fiche d'identité</h2>
            <div className="bg-bg-primary rounded-3xl p-8 shadow-sm grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-semibold">Fiche étudiant</p>
                {[
                  { label: 'Étudiant', value: siteConfig.name },
                  { label: 'Formation', value: siteConfig.program },
                  { label: 'Organisation d\'accueil', value: siteConfig.organization },
                  { label: 'Tuteur de stage', value: siteConfig.supervisor },
                  { label: 'Adresse', value: siteConfig.address },
                ].map(({ label, value }) => (
                  <div key={label} className="mb-3">
                    <span className="text-xs text-text-main/50 font-medium uppercase tracking-wide">{label}</span>
                    <p className="text-text-main font-medium">{value}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-xs uppercase tracking-widest text-accent-light mb-4 font-semibold">Objectifs du site</p>
                <ul className="flex flex-col gap-3 text-sm text-text-main/70">
                  {[
                    'Démontrer mes compétences en intégration web',
                    'Présenter mes réalisations professionnelles',
                    'Mettre à disposition les rapports de stage requis',
                    'Valoriser mon parcours en DEUST Webmaster',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-accent-main mt-1">✦</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </MotionSection>
        </Container>
      </section>

      {/* Quick access */}
      <section className="py-16" aria-labelledby="access-title">
        <Container>
          <MotionSection delay={0.1}>
            <h2 id="access-title" className="text-2xl font-bold text-text-main mb-8">Accès rapide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  title: 'Mon profil',
                  description: 'Compétences web, communication et marketing digital',
                  href: '/profil',
                },
                {
                  title: 'Mes projets',
                  description: 'Réalisations web, visuels, SEO et projets de stage',
                  href: '/realisations',
                },
                {
                  title: 'Stage Amazonie Parfum',
                  description: 'Présentation du stage principal et accès aux rapports',
                  href: '/stage/amazonie-parfum',
                },
                {
                  title: 'Rapport de lancement',
                  description: 'Contexte, missions prévues et analyse initiale',
                  href: '/stage/amazonie-parfum/rapport-lancement',
                },
                {
                  title: 'Rapport final',
                  description: 'Missions réalisées, analyse et bilan personnel',
                  href: '/stage/amazonie-parfum/rapport-final',
                },
                {
                  title: 'Veille professionnelle',
                  description: 'Tendances e-commerce, UX et branding parfum',
                  href: '/stage/amazonie-parfum/veille',
                },
              ].map((item) => (
                <Card key={item.href} title={item.title} description={item.description} href={item.href} />
              ))}
            </div>
          </MotionSection>
        </Container>
      </section>
    </>
  )
}
```

- [ ] **Step 2: Check in browser**

```bash
npm run dev
```
Open `http://localhost:3000`. Verify hero, identity card, and quick access cards render correctly.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: add homepage with hero, identity card and quick access"
```

---

## Task 11: Profile Page

**Files:**
- Create: `app/profil/page.tsx`

- [ ] **Step 1: Create app/profil/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import MotionSection from '@/components/MotionSection'

export const metadata: Metadata = {
  title: 'Mon Profil',
  description: 'Profil de Shakurov Matin — compétences web, communication et marketing digital',
}

const skillGroups = [
  {
    category: 'Compétences techniques',
    color: 'accent-main',
    skills: ['HTML / CSS', 'JavaScript', 'Next.js / React', 'Tailwind CSS', 'TypeScript', 'Git', 'WordPress', '[À compléter]'],
  },
  {
    category: 'Compétences créatives',
    color: 'accent-light',
    skills: ['UX/UI Design', 'Figma', 'Webdesign', 'Identité visuelle', 'Création de contenus visuels', '[À compléter]'],
  },
  {
    category: 'Marketing & Communication',
    color: 'accent-main',
    skills: ['SEO on-page', 'Rédaction web', 'Réseaux sociaux', 'Google Analytics', 'Email marketing', '[À compléter]'],
  },
  {
    category: 'Outils',
    color: 'accent-light',
    skills: ['VS Code', 'Figma', 'Notion', 'Canva', 'Google Workspace', '[À compléter]'],
  },
]

export default function ProfilPage() {
  return (
    <Container className="py-16">
      <MotionSection>
        <SectionTitle
          title="Mon Profil"
          subtitle="Étudiant en DEUST Webmaster, passionné par le web, le design et la communication digitale."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-accent-main mb-4">Qui suis-je ?</h2>
            <div className="prose prose-sm max-w-none text-text-main/80 space-y-4">
              <p>
                Je m'appelle Shakurov Matin, étudiant en DEUST Webmaster et Métiers de l'Internet. [À compléter — présentation personnelle, parcours, motivations.]
              </p>
              <p>
                Ce site est mon Chef-d'œuvre, un projet universitaire qui me permet de démontrer l'ensemble des compétences acquises lors de ma formation, notamment lors de mon stage chez Amazonie Parfum à Bourges.
              </p>
              <p>[À compléter — objectifs professionnels, vision, ce que j'apporte.]</p>
            </div>
          </div>
          <div className="bg-bg-secondary rounded-3xl p-6">
            <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-4">En bref</p>
            {[
              { label: 'Formation', value: 'DEUST Webmaster' },
              { label: 'Localisation', value: 'Bourges, France' },
              { label: 'Disponibilité', value: '[À compléter]' },
              { label: 'Langues', value: '[À compléter]' },
            ].map(({ label, value }) => (
              <div key={label} className="mb-3">
                <span className="text-xs text-text-main/40 uppercase tracking-wide">{label}</span>
                <p className="text-text-main font-medium text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text-main mb-8">Compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <MotionSection key={group.category} delay={0.05}>
              <div className="bg-bg-secondary rounded-3xl p-6">
                <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 text-${group.color}`}>{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm bg-bg-primary text-text-main px-3 py-1.5 rounded-full border border-text-main/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/profil/page.tsx
git commit -m "feat: add profile page"
```

---

## Task 12: Projects Page

**Files:**
- Create: `app/realisations/page.tsx`

- [ ] **Step 1: Create app/realisations/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import MotionSection from '@/components/MotionSection'
import { realisations, type RealisationCategory } from '@/data/realisations'

export const metadata: Metadata = {
  title: 'Mes Projets',
  description: 'Réalisations web, visuels, SEO et projets de stage de Shakurov Matin',
}

const categoryLabels: Record<RealisationCategory, string> = {
  website: 'Site web',
  visual: 'Visuel',
  social: 'Réseaux sociaux',
  seo: 'SEO',
  internship: 'Stage',
  personal: 'Personnel',
}

export default function RealisationsPage() {
  return (
    <Container className="py-16">
      <MotionSection>
        <SectionTitle
          title="Mes Projets"
          subtitle="Réalisations web, créations visuelles, optimisations SEO et projets réalisés en stage."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {realisations.map((projet, i) => (
            <MotionSection key={projet.id} delay={i * 0.05}>
              <div className="bg-bg-secondary rounded-3xl p-6 h-full">
                <div className="flex items-start justify-between mb-3">
                  <h2 className="text-lg font-semibold text-text-main">{projet.title}</h2>
                  <span className="text-xs bg-bg-primary border border-accent-main/20 text-accent-main px-2 py-1 rounded-full shrink-0 ml-2">
                    {categoryLabels[projet.category]}
                  </span>
                </div>
                <p className="text-sm text-text-main/60 mb-2"><span className="font-medium">Contexte :</span> {projet.context}</p>
                <p className="text-sm text-text-main/60 mb-2"><span className="font-medium">Objectif :</span> {projet.objective}</p>
                <p className="text-sm text-text-main/60 mb-4"><span className="font-medium">Résultat :</span> {projet.result}</p>
                <div className="flex flex-wrap gap-2">
                  {projet.technologies.map((tech) => (
                    <span key={tech} className="text-xs bg-bg-primary text-accent-light border border-accent-light/30 px-2 py-1 rounded-full">
                      {tech}
                    </span>
                  ))}
                </div>
                {projet.link && (
                  <a href={projet.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 mt-4 text-sm text-accent-main hover:underline focus-visible:outline-2 focus-visible:outline-accent-main rounded">
                    Voir le projet ↗
                  </a>
                )}
              </div>
            </MotionSection>
          ))}
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/realisations/page.tsx
git commit -m "feat: add projects page"
```

---

## Task 13: Internship Overview Page

**Files:**
- Create: `app/stage/page.tsx`

- [ ] **Step 1: Create app/stage/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import Card from '@/components/Card'
import Button from '@/components/Button'
import MotionSection from '@/components/MotionSection'
import { stages } from '@/data/stages'

export const metadata: Metadata = {
  title: 'Stage',
  description: 'Vue d\'ensemble des stages de Shakurov Matin — RCF en Berry et Amazonie Parfum',
}

export default function StagePage() {
  return (
    <Container className="py-16">
      <MotionSection>
        <SectionTitle
          title="Mes Stages"
          subtitle="Cette section regroupe mes deux expériences de stage réalisées dans le cadre du DEUST Webmaster. Elle constitue le cœur du Chef-d'œuvre."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {stages.map((stage, i) => (
            <MotionSection key={stage.id} delay={i * 0.1}>
              <div className="bg-bg-secondary rounded-3xl p-8 h-full flex flex-col">
                <div className="mb-4">
                  <span className="text-xs uppercase tracking-widest text-accent-light font-semibold">{stage.duration}</span>
                  <h2 className="text-2xl font-bold text-accent-main mt-1">{stage.organization}</h2>
                  <p className="text-text-main/60 text-sm mt-1">{stage.role} · {stage.location}</p>
                </div>
                <p className="text-text-main/70 text-sm mb-6 flex-1">{stage.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {stage.skills.map((skill) => (
                    <span key={skill} className="text-xs bg-bg-primary text-text-main/60 px-3 py-1 rounded-full border border-text-main/10">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button href={`/stage/${stage.id}`} variant="secondary">Voir le stage</Button>
                  {stage.hasReports && (
                    <>
                      <Button href={`/stage/${stage.id}/rapport-lancement`} variant="secondary">Rapport de lancement</Button>
                      <Button href={`/stage/${stage.id}/rapport-final`} variant="secondary">Rapport final</Button>
                    </>
                  )}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/stage/page.tsx
git commit -m "feat: add internship overview page"
```

---

## Task 14: RCF en Berry Page

**Files:**
- Create: `app/stage/rcf-en-berry/page.tsx`

- [ ] **Step 1: Create app/stage/rcf-en-berry/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import MotionSection from '@/components/MotionSection'
import Button from '@/components/Button'
import { stages } from '@/data/stages'

export const metadata: Metadata = {
  title: 'Stage RCF en Berry',
  description: 'Stage d\'assistant marketing et communication chez RCF en Berry',
}

export default function RCFPage() {
  const stage = stages.find((s) => s.id === 'rcf-en-berry')!

  return (
    <Container className="py-16">
      <MotionSection>
        <div className="mb-4">
          <Button href="/stage" variant="secondary" className="text-sm mb-6">← Retour aux stages</Button>
        </div>
        <SectionTitle
          title={stage.organization}
          subtitle={`${stage.role} · ${stage.duration} · ${stage.location}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section aria-labelledby="rcf-contexte">
              <h2 id="rcf-contexte" className="text-xl font-semibold text-accent-main mb-3">Contexte du stage</h2>
              <p className="text-text-main/70">{stage.description}</p>
            </section>

            <section aria-labelledby="rcf-missions">
              <h2 id="rcf-missions" className="text-xl font-semibold text-accent-main mb-3">Missions réalisées</h2>
              <ul className="space-y-3">
                {stage.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-main/70 text-sm">
                    <span className="text-accent-main mt-1 shrink-0">✦</span>
                    {task}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="rcf-competences">
              <h2 id="rcf-competences" className="text-xl font-semibold text-accent-main mb-3">Compétences développées</h2>
              <div className="flex flex-wrap gap-2">
                {stage.skills.map((skill) => (
                  <span key={skill} className="text-sm bg-bg-secondary text-text-main px-3 py-1.5 rounded-full border border-text-main/10">
                    {skill}
                  </span>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <div className="bg-bg-secondary rounded-3xl p-6 sticky top-24">
              <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-4">Fiche stage</p>
              {[
                { label: 'Organisation', value: stage.organization },
                { label: 'Durée', value: stage.duration },
                { label: 'Période', value: stage.period },
                { label: 'Rôle', value: stage.role },
                { label: 'Lieu', value: stage.location },
              ].map(({ label, value }) => (
                <div key={label} className="mb-3">
                  <span className="text-xs text-text-main/40 uppercase tracking-wide">{label}</span>
                  <p className="text-text-main text-sm font-medium">{value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/stage/rcf-en-berry/page.tsx
git commit -m "feat: add RCF en Berry internship page"
```

---

## Task 15: Amazonie Parfum Page

**Files:**
- Create: `app/stage/amazonie-parfum/page.tsx`

- [ ] **Step 1: Create app/stage/amazonie-parfum/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import Button from '@/components/Button'
import MotionSection from '@/components/MotionSection'
import { stages } from '@/data/stages'

export const metadata: Metadata = {
  title: 'Stage Amazonie Parfum',
  description: 'Stage principal du Chef-d\'œuvre chez Amazonie Parfum à Bourges',
}

export default function AmazoniePage() {
  const stage = stages.find((s) => s.id === 'amazonie-parfum')!

  return (
    <Container className="py-16">
      <MotionSection>
        <div className="mb-6">
          <Button href="/stage" variant="secondary" className="text-sm">← Retour aux stages</Button>
        </div>

        <SectionTitle
          title={stage.organization}
          subtitle={`Stage principal du Chef-d'œuvre · ${stage.role} · ${stage.location}`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <section aria-labelledby="ap-presentation">
              <h2 id="ap-presentation" className="text-xl font-semibold text-accent-main mb-3">Présentation de l'organisation</h2>
              <p className="text-text-main/70 mb-3">
                Amazonie Parfum est une boutique de parfums et cosmétiques située au 24 rue Moyenne à Bourges (18000, France), supervisée par {stage.organization}. [À compléter — historique, positionnement marché, type de clientèle.]
              </p>
              <p className="text-text-main/70">[À compléter — chiffres clés, présence en ligne au moment du stage.]</p>
            </section>

            <section aria-labelledby="ap-problematique">
              <h2 id="ap-problematique" className="text-xl font-semibold text-accent-main mb-3">Problématique générale</h2>
              <p className="text-text-main/70">[À compléter — problématique centrale identifiée lors du stage.]</p>
            </section>

            <section aria-labelledby="ap-objectifs">
              <h2 id="ap-objectifs" className="text-xl font-semibold text-accent-main mb-3">Objectifs du stage</h2>
              <ul className="space-y-2">
                {stage.tasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-text-main/70 text-sm">
                    <span className="text-accent-main mt-1 shrink-0">✦</span>
                    {task}
                  </li>
                ))}
              </ul>
            </section>

            <section aria-labelledby="ap-competences">
              <h2 id="ap-competences" className="text-xl font-semibold text-accent-main mb-3">Compétences mobilisées</h2>
              <div className="flex flex-wrap gap-2">
                {stage.skills.map((skill) => (
                  <span key={skill} className="text-sm bg-bg-secondary text-text-main px-3 py-1.5 rounded-full border border-text-main/10">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            <section aria-labelledby="ap-rapports">
              <h2 id="ap-rapports" className="text-xl font-semibold text-accent-main mb-4">Rapports disponibles</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {[
                  { label: 'Rapport de lancement', href: '/stage/amazonie-parfum/rapport-lancement', desc: 'Contexte, missions prévues, analyse initiale' },
                  { label: 'Rapport final', href: '/stage/amazonie-parfum/rapport-final', desc: 'Bilan, missions réalisées, analyse' },
                  { label: 'Veille professionnelle', href: '/stage/amazonie-parfum/veille', desc: 'Sources, tendances, recommandations' },
                ].map((r) => (
                  <Button key={r.href} href={r.href} variant="secondary" className="flex-col items-start h-auto py-4 px-5 rounded-2xl text-left">
                    <span className="font-semibold text-sm">{r.label}</span>
                    <span className="text-xs text-text-main/50 font-normal mt-1">{r.desc}</span>
                  </Button>
                ))}
              </div>
            </section>
          </div>

          <aside>
            <div className="bg-bg-secondary rounded-3xl p-6 sticky top-24">
              <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-4">Fiche stage</p>
              {[
                { label: 'Organisation', value: stage.organization },
                { label: 'Tuteur', value: 'Mamadou Coulibaly' },
                { label: 'Durée', value: stage.duration },
                { label: 'Période', value: stage.period },
                { label: 'Rôle', value: stage.role },
                { label: 'Adresse', value: '24 rue Moyenne\n18000 Bourges' },
              ].map(({ label, value }) => (
                <div key={label} className="mb-3">
                  <span className="text-xs text-text-main/40 uppercase tracking-wide">{label}</span>
                  <p className="text-text-main text-sm font-medium whitespace-pre-line">{value}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/stage/amazonie-parfum/page.tsx
git commit -m "feat: add Amazonie Parfum internship page"
```

---

## Task 16: Launch Report Page

**Files:**
- Create: `app/stage/amazonie-parfum/rapport-lancement/page.tsx`

- [ ] **Step 1: Create app/stage/amazonie-parfum/rapport-lancement/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import MotionSection from '@/components/MotionSection'
import ScrollSpy from '@/components/ScrollSpy'
import { rapportLancement } from '@/data/rapports'

export const metadata: Metadata = {
  title: 'Rapport de lancement — Amazonie Parfum',
  description: 'Rapport de lancement du stage chez Amazonie Parfum — contexte, missions prévues et analyse initiale',
}

export default function RapportLancementPage() {
  const spyItems = rapportLancement.map((s) => ({ id: s.id, label: s.title }))

  return (
    <div className="py-16">
      <Container>
        <div className="mb-6">
          <Button href="/stage/amazonie-parfum" variant="secondary" className="text-sm">← Retour au stage</Button>
        </div>
        <MotionSection>
          <header className="mb-12">
            <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-2">Amazonie Parfum</p>
            <h1 className="text-4xl font-bold text-text-main mb-3">Rapport de lancement</h1>
            <p className="text-text-main/60 max-w-2xl">
              Ce rapport présente le contexte du stage, l'organisation d'accueil, les missions planifiées et l'analyse initiale réalisée au démarrage du stage.
            </p>
          </header>
        </MotionSection>
      </Container>

      <Container>
        <div className="flex gap-12">
          {/* Sidebar ScrollSpy — hidden on mobile, shown on md+ */}
          <aside className="hidden md:block w-56 shrink-0">
            <ScrollSpy items={spyItems} />
          </aside>

          {/* Mobile horizontal nav */}
          <nav className="md:hidden w-full mb-8 overflow-x-auto" aria-label="Sections du rapport">
            <div className="flex gap-2 pb-2">
              {rapportLancement.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="shrink-0 text-xs bg-bg-secondary text-text-main/70 px-3 py-2 rounded-full border border-text-main/10 hover:text-accent-main focus-visible:outline-2 focus-visible:outline-accent-main"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          <main className="flex-1 min-w-0">
            {rapportLancement.map((section, i) => (
              <MotionSection key={section.id} delay={i * 0.04}>
                <section id={section.id} className="mb-12 scroll-mt-24" aria-labelledby={`title-${section.id}`}>
                  <h2 id={`title-${section.id}`} className="text-2xl font-bold text-accent-main mb-4">{section.title}</h2>
                  <div className="bg-bg-secondary rounded-3xl p-6">
                    <p className="text-text-main/70 leading-relaxed">{section.content}</p>
                  </div>
                </section>
              </MotionSection>
            ))}
          </main>
        </div>
      </Container>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/stage/amazonie-parfum/rapport-lancement/page.tsx
git commit -m "feat: add launch report page with ScrollSpy"
```

---

## Task 17: Final Report Page

**Files:**
- Create: `app/stage/amazonie-parfum/rapport-final/page.tsx`

- [ ] **Step 1: Create app/stage/amazonie-parfum/rapport-final/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import Button from '@/components/Button'
import MotionSection from '@/components/MotionSection'
import ScrollSpy from '@/components/ScrollSpy'
import { rapportFinal } from '@/data/rapports'

export const metadata: Metadata = {
  title: 'Rapport final — Amazonie Parfum',
  description: 'Rapport final du stage chez Amazonie Parfum — missions réalisées, bilan et analyse',
}

export default function RapportFinalPage() {
  const spyItems = rapportFinal.map((s) => ({ id: s.id, label: s.title }))

  return (
    <div className="py-16">
      <Container>
        <div className="mb-6">
          <Button href="/stage/amazonie-parfum" variant="secondary" className="text-sm">← Retour au stage</Button>
        </div>
        <MotionSection>
          <header className="mb-12">
            <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-2">Amazonie Parfum</p>
            <h1 className="text-4xl font-bold text-text-main mb-3">Rapport final</h1>
            <p className="text-text-main/60 max-w-2xl">
              Ce rapport présente le bilan complet du stage : missions réalisées, productions concrètes, analyse du travail effectué et bilan personnel.
            </p>
          </header>
        </MotionSection>
      </Container>

      <Container>
        <div className="flex gap-12">
          <aside className="hidden md:block w-56 shrink-0">
            <ScrollSpy items={spyItems} />
          </aside>

          <nav className="md:hidden w-full mb-8 overflow-x-auto" aria-label="Sections du rapport">
            <div className="flex gap-2 pb-2">
              {rapportFinal.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="shrink-0 text-xs bg-bg-secondary text-text-main/70 px-3 py-2 rounded-full border border-text-main/10 hover:text-accent-main focus-visible:outline-2 focus-visible:outline-accent-main"
                >
                  {section.title}
                </a>
              ))}
            </div>
          </nav>

          <main className="flex-1 min-w-0">
            {rapportFinal.map((section, i) => (
              <MotionSection key={section.id} delay={i * 0.04}>
                <section id={section.id} className="mb-12 scroll-mt-24" aria-labelledby={`title-${section.id}`}>
                  <h2 id={`title-${section.id}`} className="text-2xl font-bold text-accent-main mb-4">{section.title}</h2>
                  <div className={`rounded-3xl p-6 ${
                    section.id === 'points-forts' ? 'bg-accent-main/5 border border-accent-main/20' :
                    section.id === 'axes-amelioration' ? 'bg-accent-light/5 border border-accent-light/20' :
                    'bg-bg-secondary'
                  }`}>
                    <p className="text-text-main/70 leading-relaxed">{section.content}</p>
                  </div>
                </section>
              </MotionSection>
            ))}
          </main>
        </div>
      </Container>
    </div>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/stage/amazonie-parfum/rapport-final/page.tsx
git commit -m "feat: add final report page"
```

---

## Task 18: Research/Watch Page

**Files:**
- Create: `app/stage/amazonie-parfum/veille/page.tsx`

- [ ] **Step 1: Create app/stage/amazonie-parfum/veille/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import Button from '@/components/Button'
import MotionSection from '@/components/MotionSection'
import { veilleItems } from '@/data/rapports'

export const metadata: Metadata = {
  title: 'Veille professionnelle — Amazonie Parfum',
  description: 'Veille professionnelle réalisée dans le cadre du stage chez Amazonie Parfum — tendances e-commerce, UX et branding parfum',
}

export default function VeillePage() {
  return (
    <Container className="py-16">
      <div className="mb-6">
        <Button href="/stage/amazonie-parfum" variant="secondary" className="text-sm">← Retour au stage</Button>
      </div>
      <MotionSection>
        <SectionTitle
          title="Veille professionnelle"
          subtitle="Analyse des tendances du marché, des pratiques UX et du branding dans l'univers parfum/cosmétiques, réalisée pendant le stage chez Amazonie Parfum."
        />

        {/* Objectif */}
        <div className="bg-bg-secondary rounded-3xl p-6 mb-10">
          <h2 className="text-xl font-semibold text-accent-main mb-3">Objectif de la veille</h2>
          <p className="text-text-main/70">[À compléter — description de la méthode et des sources utilisées pour la veille.]</p>
        </div>

        {/* Veille items */}
        <h2 className="text-2xl font-bold text-text-main mb-6">Sujets de veille</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {veilleItems.map((item, i) => (
            <MotionSection key={item.id} delay={i * 0.06}>
              <div className="bg-bg-secondary rounded-3xl p-6 h-full">
                <span className="text-xs uppercase tracking-widest text-accent-light font-semibold">{item.category}</span>
                <h3 className="text-lg font-semibold text-text-main mt-2 mb-3">{item.title}</h3>
                <div className="space-y-3 text-sm text-text-main/70">
                  <p><span className="font-medium text-text-main">Source :</span> {item.source}</p>
                  <p><span className="font-medium text-text-main">Synthèse :</span> {item.summary}</p>
                  <p><span className="font-medium text-text-main">Impact sur le stage :</span> {item.impact}</p>
                </div>
              </div>
            </MotionSection>
          ))}
        </div>

        {/* Recommendations */}
        <div className="bg-accent-main/5 border border-accent-main/20 rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-accent-main mb-4">Recommandations</h2>
          <p className="text-text-main/70">[À compléter — recommandations formulées à partir de la veille effectuée.]</p>
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/stage/amazonie-parfum/veille/page.tsx
git commit -m "feat: add research/watch page"
```

---

## Task 19: Contact Page

**Files:**
- Create: `app/contact/page.tsx`

- [ ] **Step 1: Create app/contact/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import MotionSection from '@/components/MotionSection'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contacter Shakurov Matin — email, LinkedIn, GitHub',
}

export default function ContactPage() {
  return (
    <Container className="py-16 max-w-3xl">
      <MotionSection>
        <SectionTitle
          title="Contact"
          subtitle="Vous souhaitez échanger sur mon parcours ou mes projets ? N'hésitez pas à me contacter."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12">
          {[
            { label: 'Email', value: siteConfig.email, href: `mailto:${siteConfig.email}`, icon: '✉' },
            { label: 'LinkedIn', value: 'Profil LinkedIn', href: siteConfig.linkedin, icon: '↗', external: true },
            { label: 'GitHub', value: 'BlackOurs18', href: siteConfig.github, icon: '↗', external: true },
          ].map((contact) => (
            <a
              key={contact.label}
              href={contact.href}
              target={contact.external ? '_blank' : undefined}
              rel={contact.external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-4 bg-bg-secondary rounded-3xl p-5 hover:shadow-md transition-shadow focus-visible:outline-2 focus-visible:outline-accent-main group"
            >
              <span className="text-2xl w-10 h-10 bg-bg-primary rounded-2xl flex items-center justify-center shrink-0 text-accent-main group-hover:bg-accent-main/10 transition-colors">
                {contact.icon}
              </span>
              <div>
                <p className="text-xs text-text-main/50 uppercase tracking-wide">{contact.label}</p>
                <p className="text-text-main font-medium text-sm">{contact.value}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Static form (visual only — no backend) */}
        <div className="bg-bg-secondary rounded-3xl p-8">
          <h2 className="text-xl font-semibold text-accent-main mb-2">Envoyer un message</h2>
          <p className="text-sm text-text-main/50 mb-6">Formulaire visuel — utilisez l'email ci-dessus pour me contacter directement.</p>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-text-main/70 mb-1">Nom</label>
              <input id="name" type="text" disabled placeholder="Votre nom" className="w-full bg-bg-primary border border-text-main/10 rounded-2xl px-4 py-3 text-sm text-text-main/50 cursor-not-allowed" aria-disabled="true" />
            </div>
            <div>
              <label htmlFor="email-input" className="block text-sm font-medium text-text-main/70 mb-1">Email</label>
              <input id="email-input" type="email" disabled placeholder="votre@email.com" className="w-full bg-bg-primary border border-text-main/10 rounded-2xl px-4 py-3 text-sm text-text-main/50 cursor-not-allowed" aria-disabled="true" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-text-main/70 mb-1">Message</label>
              <textarea id="message" disabled rows={4} placeholder="Votre message..." className="w-full bg-bg-primary border border-text-main/10 rounded-2xl px-4 py-3 text-sm text-text-main/50 cursor-not-allowed resize-none" aria-disabled="true" />
            </div>
            <p className="text-xs text-text-main/40 italic">Ce formulaire est désactivé. Utilisez l'email ou LinkedIn pour me contacter.</p>
          </div>
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/contact/page.tsx
git commit -m "feat: add contact page"
```

---

## Task 20: Legal Notice Page

**Files:**
- Create: `app/mentions-legales/page.tsx`

- [ ] **Step 1: Create app/mentions-legales/page.tsx**

```typescript
import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import MotionSection from '@/components/MotionSection'
import { siteConfig } from '@/data/site'

export const metadata: Metadata = {
  title: 'Mentions légales',
  description: 'Mentions légales du site Chef-d\'œuvre de Shakurov Matin',
}

export default function MentionsLegalesPage() {
  return (
    <Container className="py-16 max-w-3xl">
      <MotionSection>
        <SectionTitle title="Mentions légales" />

        <div className="space-y-8 prose prose-sm max-w-none">
          {[
            {
              title: 'Éditeur du site',
              content: `${siteConfig.name}\nÉtudiant en ${siteConfig.program}\nEmail : ${siteConfig.email}`,
            },
            {
              title: 'Responsable de la publication',
              content: siteConfig.name,
            },
            {
              title: 'Hébergement',
              content: '[À compléter] — Nom de l\'hébergeur, adresse, site web.',
            },
            {
              title: 'Propriété intellectuelle',
              content: `L'ensemble du contenu de ce site (textes, images, code) est la propriété de ${siteConfig.name}, sauf mention contraire. Toute reproduction est interdite sans autorisation préalable.`,
            },
            {
              title: 'Données personnelles',
              content: 'Ce site ne collecte aucune donnée personnelle. Aucun formulaire fonctionnel n\'est présent. Aucun cookie tiers n\'est utilisé.',
            },
            {
              title: 'Cookies',
              content: 'Ce site n\'utilise pas de cookies de traçage ou d\'analyse. Seuls des cookies techniques strictement nécessaires au fonctionnement peuvent être présents.',
            },
          ].map((section) => (
            <section key={section.title} className="bg-bg-secondary rounded-3xl p-6">
              <h2 className="text-lg font-semibold text-accent-main mb-3">{section.title}</h2>
              <p className="text-text-main/70 text-sm whitespace-pre-line">{section.content}</p>
            </section>
          ))}
        </div>
      </MotionSection>
    </Container>
  )
}
```

- [ ] **Step 2: Commit**

```bash
git add app/mentions-legales/page.tsx
git commit -m "feat: add legal notice page"
```

---

## Task 21: Build & Static Export Verification

**Files:** None (verification only)

- [ ] **Step 1: Run dev server and check all pages**

```bash
npm run dev
```

Visit each route in browser:
- `http://localhost:3000` — homepage
- `http://localhost:3000/profil`
- `http://localhost:3000/realisations`
- `http://localhost:3000/stage`
- `http://localhost:3000/stage/rcf-en-berry`
- `http://localhost:3000/stage/amazonie-parfum`
- `http://localhost:3000/stage/amazonie-parfum/rapport-lancement`
- `http://localhost:3000/stage/amazonie-parfum/rapport-final`
- `http://localhost:3000/stage/amazonie-parfum/veille`
- `http://localhost:3000/contact`
- `http://localhost:3000/mentions-legales`

Expected: All pages render, no console errors, Navbar active states correct.

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds, `out/` directory created with static HTML files.

- [ ] **Step 3: Preview static output**

```bash
npm run preview
```

Expected: Site runs correctly from static `out/` directory.

- [ ] **Step 4: Final commit**

```bash
git add .
git commit -m "feat: complete chef-d'oeuvre website — all pages and static export"
```

---

## Deployment to Hostinger

After build:
1. Upload contents of `out/` folder to Hostinger `public_html` via FTP or File Manager
2. No server config needed — pure static HTML/CSS/JS
3. Verify all internal links work on live domain
