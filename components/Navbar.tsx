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
