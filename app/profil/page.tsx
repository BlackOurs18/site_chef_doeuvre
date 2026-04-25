import type { Metadata } from 'next'
import Container from '@/components/Container'
import SectionTitle from '@/components/SectionTitle'
import MotionSection from '@/components/MotionSection'

export const metadata: Metadata = {
  title: 'Mon Profil',
  description: 'Profil de Shakurov Matin — compétences web, communication et marketing digital',
}

const skillGroups = [
  {
    category: 'Compétences techniques',
    color: 'accent-main',
    skills: ['HTML / CSS', 'JavaScript', 'Next.js / React', 'Tailwind CSS', 'TypeScript', 'Git', 'WordPress', '[À compléter]'],
  },
  {
    category: 'Compétences créatives',
    color: 'accent-light',
    skills: ['UX/UI Design', 'Figma', 'Webdesign', 'Identité visuelle', 'Création de contenus visuels', '[À compléter]'],
  },
  {
    category: 'Marketing & Communication',
    color: 'accent-main',
    skills: ['SEO on-page', 'Rédaction web', 'Réseaux sociaux', 'Google Analytics', 'Email marketing', '[À compléter]'],
  },
  {
    category: 'Outils',
    color: 'accent-light',
    skills: ['VS Code', 'Figma', 'Notion', 'Canva', 'Google Workspace', '[À compléter]'],
  },
]

export default function ProfilPage() {
  return (
    <Container className="py-16">
      <MotionSection>
        <SectionTitle
          title="Mon Profil"
          subtitle="Étudiant en DEUST Webmaster, passionné par le web, le design et la communication digitale."
          level="h1"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-xl font-semibold text-accent-main mb-4">Qui suis-je ?</h2>
            <div className="prose prose-sm max-w-none text-text-main/80 space-y-4">
              <p>
                Je m'appelle Shakurov Matin, étudiant en DEUST Webmaster et Métiers de l'Internet. [À compléter — présentation personnelle, parcours, motivations.]
              </p>
              <p>
                Ce site est mon Chef-d'œuvre, un projet universitaire qui me permet de démontrer l'ensemble des compétences acquises lors de ma formation, notamment lors de mon stage chez Amazonie Parfum à Bourges.
              </p>
              <p>[À compléter — objectifs professionnels, vision, ce que j'apporte.]</p>
            </div>
          </div>
          <div className="bg-bg-secondary rounded-3xl p-6">
            <p className="text-xs uppercase tracking-widest text-accent-light font-semibold mb-4">En bref</p>
            {[
              { label: 'Formation', value: 'DEUST Webmaster' },
              { label: 'Localisation', value: 'Bourges, France' },
              { label: 'Disponibilité', value: '[À compléter]' },
              { label: 'Langues', value: '[À compléter]' },
            ].map(({ label, value }) => (
              <div key={label} className="mb-3">
                <span className="text-xs text-text-main/40 uppercase tracking-wide">{label}</span>
                <p className="text-text-main font-medium text-sm">{value}</p>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl font-bold text-text-main mb-8">Compétences</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skillGroups.map((group) => (
            <MotionSection key={group.category} delay={0.05}>
              <div className="bg-bg-secondary rounded-3xl p-6">
                <h3 className={`text-sm font-semibold uppercase tracking-widest mb-4 text-${group.color}`}>{group.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="text-sm bg-bg-primary text-text-main px-3 py-1.5 rounded-full border border-text-main/10">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </MotionSection>
          ))}
        </div>
      </MotionSection>
    </Container>
  )
}
