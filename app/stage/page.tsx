import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
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
