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
          level="h1"
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
