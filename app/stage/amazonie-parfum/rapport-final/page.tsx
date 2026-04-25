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
