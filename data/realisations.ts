export type RealisationCategory = 'website' | 'visual' | 'social' | 'seo' | 'internship' | 'personal'

export interface Realisation {
  id: string
  title: string
  context: string
  objective: string
  technologies: string[]
  result: string
  link?: string
  image?: string
  category: RealisationCategory
}

export const realisations: Realisation[] = [
  {
    id: 'chef-doeuvre',
    title: 'Chef-d\'œuvre — Portfolio Web',
    context: 'Projet universitaire de fin de DEUST Webmaster',
    objective: 'Créer un portfolio professionnel présentant mon parcours, mes compétences et mes rapports de stage',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    result: 'Site web statique déployé sur hébergement mutualisé, présentant l\'ensemble du parcours de formation',
    category: 'website',
  },
  {
    id: 'amazonie-parfum-web',
    title: 'Amazonie Parfum — Optimisation web',
    context: 'Stage principal chez Amazonie Parfum, Bourges',
    objective: '[À compléter]',
    technologies: ['[À compléter]'],
    result: '[À compléter]',
    category: 'internship',
  },
  {
    id: 'rcf-social',
    title: 'RCF en Berry — Contenus digitaux',
    context: 'Stage chez RCF en Berry',
    objective: '[À compléter]',
    technologies: ['[À compléter]'],
    result: '[À compléter]',
    category: 'internship',
  },
]
