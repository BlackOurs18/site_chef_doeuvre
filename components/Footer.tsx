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
