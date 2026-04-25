export interface Stage {
  id: string
  organization: string
  duration: string
  role: string
  period: string
  location: string
  description: string
  tasks: string[]
  skills: string[]
  hasReports: boolean
}

export const stages: Stage[] = [
  {
    id: 'rcf-en-berry',
    organization: 'RCF en Berry',
    duration: '1 mois',
    role: 'Assistant marketing et communication',
    period: '[À compléter]',
    location: 'Bourges, France',
    description: '[À compléter] — Stage d\'un mois au sein de la radio RCF en Berry, dans le cadre du DEUST Webmaster.',
    tasks: [
      '[À compléter] — Participation à la stratégie de communication',
      '[À compléter] — Création de contenus pour les réseaux sociaux',
      '[À compléter] — Mise à jour du site web',
    ],
    skills: ['Communication digitale', 'Rédaction web', 'Réseaux sociaux', '[À compléter]'],
    hasReports: false,
  },
  {
    id: 'amazonie-parfum',
    organization: 'Amazonie Parfum',
    duration: '[À compléter]',
    role: 'Webmaster stagiaire',
    period: '[À compléter]',
    location: '24 rue Moyenne, 18000 Bourges, France',
    description: 'Stage principal du Chef-d\'œuvre réalisé chez Amazonie Parfum, boutique de parfums et cosmétiques située à Bourges. Mission centrée sur la refonte et l\'optimisation de la présence web.',
    tasks: [
      '[À compléter] — Analyse et audit du site existant',
      '[À compléter] — Optimisation SEO',
      '[À compléter] — Création de contenus web',
      '[À compléter] — Gestion des réseaux sociaux',
    ],
    skills: ['Next.js', 'SEO', 'Rédaction web', 'UX/UI', 'Tailwind CSS', '[À compléter]'],
    hasReports: true,
  },
]
