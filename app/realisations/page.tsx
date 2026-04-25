import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
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
