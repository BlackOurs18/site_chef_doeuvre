export interface RapportSection {
  id: string
  title: string
  content: string
}

export interface VeilleItem {
  id: string
  category: string
  title: string
  source: string
  summary: string
  impact: string
}

export const rapportLancement: RapportSection[] = [
  {
    id: 'contexte',
    title: 'Contexte & Enjeux',
    content: '[À compléter] — Présentation du contexte du stage chez Amazonie Parfum et des enjeux identifiés lors de la prise de poste.',
  },
  {
    id: 'presentation',
    title: 'Présentation de l\'organisation',
    content: 'Amazonie Parfum est une boutique de parfums et cosmétiques située au 24 rue Moyenne à Bourges (18000). [À compléter] — présentation détaillée de la structure, de son marché et de son positionnement.',
  },
  {
    id: 'sujet',
    title: 'Sujet du stage',
    content: '[À compléter] — Description précise de la mission confiée et de la problématique centrale du stage.',
  },
  {
    id: 'missions',
    title: 'Missions prévues',
    content: '[À compléter] — Liste et description des missions planifiées au lancement du stage.',
  },
  {
    id: 'calendrier',
    title: 'Calendrier prévisionnel',
    content: '[À compléter] — Planning détaillé des semaines de stage avec objectifs par période.',
  },
  {
    id: 'analyse-existant',
    title: 'Analyse du site existant',
    content: '[À compléter] — Audit du site web d\'Amazonie Parfum : UX, performances, SEO, accessibilité.',
  },
  {
    id: 'besoins',
    title: 'Besoins identifiés',
    content: '[À compléter] — Synthèse des besoins détectés lors de l\'analyse initiale.',
  },
  {
    id: 'veille',
    title: 'Veille & Recommandations',
    content: '[À compléter] — Premières recommandations basées sur la veille effectuée avant et pendant le début du stage.',
  },
]

export const rapportFinal: RapportSection[] = [
  {
    id: 'rappel-contexte',
    title: 'Rappel du contexte',
    content: '[À compléter] — Bref rappel du contexte et des objectifs fixés en début de stage.',
  },
  {
    id: 'missions-realisees',
    title: 'Missions réalisées',
    content: '[À compléter] — Description détaillée des missions effectivement réalisées pendant le stage.',
  },
  {
    id: 'exemples-production',
    title: 'Exemples de productions',
    content: '[À compléter] — Présentation concrète des livrables produits (captures, liens, extraits).',
  },
  {
    id: 'calendrier-reel',
    title: 'Calendrier réel',
    content: '[À compléter] — Bilan du temps consacré à chaque mission, comparé au prévisionnel.',
  },
  {
    id: 'analyse',
    title: 'Analyse du travail',
    content: '[À compléter] — Analyse critique du déroulement du stage et des résultats obtenus.',
  },
  {
    id: 'points-forts',
    title: 'Points forts',
    content: '[À compléter] — Ce qui a bien fonctionné pendant le stage.',
  },
  {
    id: 'axes-amelioration',
    title: 'Axes d\'amélioration',
    content: '[À compléter] — Points à améliorer identifiés en fin de stage.',
  },
  {
    id: 'actions-correctives',
    title: 'Actions correctives',
    content: '[À compléter] — Mesures prises ou envisagées pour corriger les axes d\'amélioration.',
  },
  {
    id: 'bilan-personnel',
    title: 'Bilan personnel',
    content: '[À compléter] — Retour personnel sur l\'expérience, les compétences développées et les apprentissages.',
  },
  {
    id: 'conclusion',
    title: 'Conclusion',
    content: '[À compléter] — Synthèse finale du stage et perspectives professionnelles.',
  },
]

export const veilleItems: VeilleItem[] = [
  {
    id: 'ecommerce-parfum',
    category: 'E-commerce parfum',
    title: 'Tendances e-commerce dans la parfumerie',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
  {
    id: 'ux-conversion',
    category: 'UX & Conversion',
    title: 'Optimisation du tunnel de conversion',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
  {
    id: 'seo-local',
    category: 'SEO local',
    title: 'SEO local pour commerce de proximité',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
  {
    id: 'branding-parfum',
    category: 'Branding',
    title: 'Branding dans l\'univers parfum/cosmétiques',
    source: '[À compléter]',
    summary: '[À compléter]',
    impact: '[À compléter]',
  },
]
