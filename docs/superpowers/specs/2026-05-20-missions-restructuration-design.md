# Design — Restructuration section Missions

**Date :** 2026-05-20  
**Projet :** Site chef d'œuvre — Portfolio stage Matin Shakurov  
**Scope :** Restructuration section Missions + création 5 pages de catégorie

---

## Contexte

Le site actuel (`index.html`) présente 4 missions génériques sans détail. L'objectif est de remplacer cette liste par 5 catégories cliquables, chacune ouvrant une page dédiée listant les missions précises effectuées pendant le stage chez Amazonie Parfum.

---

## Décisions

| Paramètre | Choix |
|---|---|
| Nombre de catégories | 5 |
| Niveau de détail par mission | Titre + description + process (comment c'est fait) |
| Navigation sur pages catégorie | Complète — même header/nav que index.html |

---

## Modifications index.html

Section `#missions` : remplacer les 4 `miss__row` existants par 5 nouveaux pointant vers leurs pages respectives.

```
/ 01  Analyse & Stratégie     →  missions/analyse-strategie.html
/ 02  Direction artistique    →  missions/direction-artistique.html
/ 03  Refonte web & Conf.     →  missions/refonte-web.html
/ 04  Catalogue produits      →  missions/catalogue-produits.html
/ 05  Contenus & Réseaux      →  missions/contenus-reseaux.html
```

---

## Nouveaux fichiers

```
missions/
  analyse-strategie.html
  direction-artistique.html
  refonte-web.html
  catalogue-produits.html
  contenus-reseaux.html
```

---

## Structure de chaque page de catégorie

### Head
- Même fonts Google (Instrument Serif, Inter, JetBrains Mono, etc.)
- CSS : `../css/base.css`, `../css/layout.css`, `../css/components.css`, `../css/tweaks.css`

### Body
1. **Curseur custom** `<div class="cur" id="cur">`
2. **Header** identique à index.html (brand, nav, clock) — les liens nav pointent vers `../index.html#section` (ex: `../index.html#about`) car les pages sont dans un sous-dossier. Lien brand → `../index.html`
3. **Hero section** :
   - `hero__index` : numéro catégorie
   - `hero__kicker` : "Étude de cas — Amazonie Parfum"
   - `hero__title` : nom de la catégorie (avec animation rise)
   - `hero__bot` : description courte + lien retour missions
4. **Section missions** : liste des missions avec `.info-list` / `.info-row` OU nouveau composant `mission-detail`
5. **Footer** identique à index.html
6. **Scripts** : `../js/tweaks.js`, `../js/cursor.js`, `../js/animations.js`

### Composant mission-detail (nouveau)
Chaque mission dans la page affiche :
- Numéro (`/ 0X`)
- Titre (`h3`, police display)
- Description (paragraph, `var(--text-2)`)
- Bloc "Process" : comment c'est fait (mono font, background `var(--bg-2)`, border-left accent)

---

## Contenu par catégorie

### 01 — Analyse & Stratégie
| Mission | Description | Process |
|---|---|---|
| Tableau KPI réseaux sociaux | Suivi mensuel audience, engagement et portée sur Instagram | Collecte manuelle des stats Instagram → saisie dans tableur Excel avec formules de variation mensuelle |
| Analyse concurrentielle | Étude de 5 parfumeries concurrentes (positionnement, prix, présence web) | Benchmark prix/gamme + analyse SEO superficielle + comparaison réseaux sociaux |
| Analyse des résultats | Bilan des actions menées et mesure de leur impact | Croisement des données KPI avant/après refonte + synthèse écrite |

### 02 — Direction artistique
| Mission | Description | Process |
|---|---|---|
| Création du brandboard | Définition de l'identité visuelle : palette, typographie, ton éditorial | Recherche d'inspiration → sélection palette + typo + moodboard → validation avec maître de stage |
| Maquette du site | Conception des wireframes et maquette haute-fidélité avant intégration | Définition architecture pages → maquettage (Figma/équivalent) → itérations |

### 03 — Refonte web & Conformité
| Mission | Description | Process |
|---|---|---|
| Mentions légales | Rédaction et intégration de la page mentions légales conforme RGPD | Identification des obligations légales e-commerce → rédaction → intégration CMS |
| Politique d'expédition | Rédaction des conditions de livraison et délais | Recueil des infos logistiques → rédaction claire → intégration |
| Politique de retour et remboursement | Rédaction des conditions de retour | Idem expédition |
| Conditions de service & de vente | Rédaction CGV et CGU | Adaptation aux spécificités parfumerie indépendante |
| Coordonnées | Mise à jour et intégration des informations de contact | Vérification infos → mise en page cohérente |
| Lancement Google Search Console | Indexation du site sur GSC | Ajout du record TXT de vérification GSC dans les paramètres DNS du nom de domaine → validation propriété → soumission sitemap |

### 04 — Catalogue produits
| Mission | Description | Process |
|---|---|---|
| Recueil des informations produits | Collecte des données pour 110 produits (nom, prix, ingrédients, catégories) | Relevé en boutique + photos des étiquettes + classement par catégorie |
| Modification des photos produits | Retouche et optimisation de 110 photos produits | Prise de photo → import dans Gemini → génération photo idéale → suppression watermark IA → export |
| Intégration des fiches produits | Intégration des 110 produits (photo + description + prix) dans le CMS | Import par lot + vérification individuelle fiche par fiche |

### 05 — Contenus & Réseaux
| Mission | Description | Process |
|---|---|---|
| Copywriting produits | Rédaction des descriptions pour 110 produits | Analyse du produit → rédaction orientée bénéfices + notes olfactives → relecture |
| Blog — 6 articles SEO | Création de la page blog + rédaction de 6 articles (3 par catégorie, 2 catégories) | Recherche mots-clés par catégorie → structure article SEO → rédaction → intégration + images |
| Vidéos réseaux sociaux | Tournage et montage de vidéos format court vertical | Repérage en boutique → tournage format 9:16 → montage court → publication réseaux |

---

## Conventions CSS / HTML

- Pas de nouveau fichier CSS — utiliser les classes existantes + ajouter `.mission-detail` dans `components.css`
- `.mission-detail` : bloc par mission avec border-left accent, padding, reveal animation
- `.mission-detail__process` : fond `var(--bg-2)`, font mono, border-left `var(--accent)`
- Cohérence avec `reveal` class + IntersectionObserver déjà actif dans `animations.js`

---

## Fichiers modifiés / créés

| Fichier | Action |
|---|---|
| `index.html` | Modifier section `#missions` |
| `css/components.css` | Ajouter `.mission-detail` et `.mission-detail__process` |
| `missions/analyse-strategie.html` | Créer |
| `missions/direction-artistique.html` | Créer |
| `missions/refonte-web.html` | Créer |
| `missions/catalogue-produits.html` | Créer |
| `missions/contenus-reseaux.html` | Créer |
