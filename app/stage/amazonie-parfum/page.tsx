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
                Amazonie Parfum est une boutique de parfums et cosmétiques située au 24 rue Moyenne à Bourges (18000, France). [À compléter — historique, positionnement marché, type de clientèle.]
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
