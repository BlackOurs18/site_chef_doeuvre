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
          level="h1"
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
