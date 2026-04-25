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
