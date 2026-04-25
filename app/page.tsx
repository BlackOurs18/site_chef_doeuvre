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
