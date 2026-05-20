# Missions Restructuration Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Restructurer la section Missions de index.html en 5 catégories cliquables, chacune ouvrant une page HTML dédiée listant les missions précises effectuées pendant le stage chez Amazonie Parfum.

**Architecture:** Ajout composant CSS `.mission-detail` dans components.css + modification section #missions dans index.html + création de 5 pages dans `missions/`. Toutes les pages partagent les mêmes CSS/JS via chemins relatifs `../`.

**Tech Stack:** HTML5, CSS3 (variables CSS, grid, flexbox), JS vanilla (aucun build tool)

---

## File Map

| Fichier | Action |
|---|---|
| `css/components.css` | Modifier — append `.mission-detail` et `.mission-list` |
| `index.html` | Modifier — remplacer bloc `.miss` (4→5 lignes avec nouveaux hrefs) |
| `missions/analyse-strategie.html` | Créer |
| `missions/direction-artistique.html` | Créer |
| `missions/refonte-web.html` | Créer |
| `missions/catalogue-produits.html` | Créer |
| `missions/contenus-reseaux.html` | Créer |

---

### Task 1: CSS — Composant `.mission-detail`

**Files:**
- Modify: `css/components.css` (append à la fin du fichier)

- [ ] **Step 1: Ajouter les styles dans `css/components.css`**

Append at end of file:

```css
/* MISSION DETAIL (pages catégories) */
.mission-list {
  border-top: 1px solid var(--line);
}

.mission-detail {
  padding: 56px 0;
  border-bottom: 1px solid var(--line);
  max-width: 860px;
}

.mission-detail__header {
  display: flex;
  align-items: baseline;
  gap: 20px;
  margin-bottom: 20px;
}

.mission-detail__num {
  font-family: var(--f-mono);
  font-size: 11px;
  color: var(--text-3);
  letter-spacing: 0.12em;
  flex-shrink: 0;
}

.mission-detail__title {
  font-family: var(--f-disp);
  font-style: var(--f-disp-style);
  font-weight: var(--f-disp-weight);
  font-size: clamp(24px, 3vw, 40px);
  letter-spacing: var(--f-disp-tracking);
  line-height: 1.1;
}

.mission-detail__desc {
  font-size: 16px;
  color: var(--text-2);
  line-height: 1.6;
  margin-bottom: 24px;
}

.mission-detail__process {
  background: var(--bg-2);
  border-left: 2px solid var(--accent);
  padding: 20px 24px;
  border-radius: 0 4px 4px 0;
}

.mission-detail__process-lbl {
  font-family: var(--f-mono);
  font-size: 9px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
  display: block;
  margin-bottom: 8px;
}

.mission-detail__process p {
  font-family: var(--f-mono);
  font-size: 12px;
  color: var(--text-2);
  line-height: 1.7;
}

@media (max-width: 640px) {
  .mission-detail {
    padding: 36px 0;
  }
}
```

- [ ] **Step 2: Commit**

```bash
git add css/components.css
git commit -m "feat: add mission-detail CSS component for category pages"
```

---

### Task 2: Modifier `index.html` — Section Missions

**Files:**
- Modify: `index.html`

- [ ] **Step 1: Remplacer le bloc `.miss` dans `index.html`**

Trouver et remplacer exactement ce bloc:

```html
        <div class="miss reveal">
          <a href="#real" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 01</span>
            <h3 class="miss__title">Direction artistique</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="#real" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 02</span>
            <h3 class="miss__title">Refonte du site</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="#real" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 03</span>
            <h3 class="miss__title">Réseaux sociaux</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="#real" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 04</span>
            <h3 class="miss__title">Contenus web</h3>
            <span class="miss__arrow">↗</span>
          </a>
        </div>
```

Par:

```html
        <div class="miss reveal">
          <a href="missions/analyse-strategie.html" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 01</span>
            <h3 class="miss__title">Analyse &amp; Stratégie</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="missions/direction-artistique.html" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 02</span>
            <h3 class="miss__title">Direction artistique</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="missions/refonte-web.html" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 03</span>
            <h3 class="miss__title">Refonte web &amp; Conformité</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="missions/catalogue-produits.html" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 04</span>
            <h3 class="miss__title">Catalogue produits</h3>
            <span class="miss__arrow">↗</span>
          </a>
          <a href="missions/contenus-reseaux.html" class="miss__row" data-cursor="lg" data-cursor-lbl="Voir">
            <span class="miss__num">/ 05</span>
            <h3 class="miss__title">Contenus &amp; Réseaux</h3>
            <span class="miss__arrow">↗</span>
          </a>
        </div>
```

- [ ] **Step 2: Commit**

```bash
git add index.html
git commit -m "feat: restructure missions section — 5 categories with links"
```

---

### Task 3: Créer `missions/analyse-strategie.html`

**Files:**
- Create: `missions/analyse-strategie.html`

- [ ] **Step 1: Créer le fichier avec ce contenu exact**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Analyse &amp; Stratégie — Matin Shakurov · Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/base.css" />
  <link rel="stylesheet" href="../css/layout.css" />
  <link rel="stylesheet" href="../css/components.css" />
  <link rel="stylesheet" href="../css/tweaks.css" />
</head>
<body>

  <div class="cur" id="cur"><span class="cur__lbl">View</span></div>

  <header class="hdr">
    <a href="../index.html" class="brand">MS / Matin Shakurov</a>
    <nav class="nav">
      <a href="../index.html#about">À propos</a>
      <a href="../index.html#missions">Missions</a>
      <a href="../index.html#real">Réalisations</a>
      <a href="../index.html#comp">Compétences</a>
      <a href="../index.html#rap">Rapports</a>
    </nav>
    <span class="hdr__time" id="clock">— : —</span>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero__top">
          <span class="hero__index">Portfolio · DEUST · <strong>2025–26</strong></span>
          <span class="hero__loc">Bourges, FR · 47.0810°N</span>
        </div>
        <div class="hero__title-block">
          <span class="hero__kicker">Étude de cas — Amazonie Parfum</span>
          <h1 class="hero__title">
            <span class="line"><span>Analyse &amp;</span></span>
            <span class="line"><span><em>Stratégie.</em></span></span>
          </h1>
        </div>
        <div class="hero__bot">
          <p class="hero__lead">Mesurer, comprendre, décider. Suivi des performances réseaux, veille concurrentielle et analyse des résultats pour orienter les choix de communication.</p>
          <div class="hero__meta">Catégorie<strong>01 / 05</strong></div>
          <div class="hero__meta">Période<strong>2025 — 2026</strong></div>
          <a href="../index.html#missions" class="cta-circle" data-cursor="lg" data-cursor-lbl="Retour">
            ← Retour<br />missions
            <span class="cta-circle__ring" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <defs>
                  <path id="ringp" d="M 70 70 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0" />
                </defs>
                <text>
                  <textPath href="#ringp">RETOUR · MISSIONS · PORTFOLIO · MATIN · </textPath>
                </text>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <span class="sec-eyebrow">01 — Analyse &amp; Stratégie</span>
        <h2 class="sec-title reveal">Missions <em>effectuées.</em></h2>
        <div class="mission-list">

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 01</span>
              <h3 class="mission-detail__title">Tableau KPI réseaux sociaux</h3>
            </div>
            <p class="mission-detail__desc">Suivi mensuel de l'audience, de l'engagement et de la portée sur Instagram pour mesurer l'évolution de la visibilité d'Amazonie Parfum.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Collecte manuelle des statistiques Instagram → saisie dans tableur Excel avec formules de variation mensuelle (%) → synthèse visuelle des tendances</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 02</span>
              <h3 class="mission-detail__title">Analyse concurrentielle</h3>
            </div>
            <p class="mission-detail__desc">Étude comparative de 5 parfumeries concurrentes : positionnement, gamme de prix, présence web et réseaux sociaux, pour identifier les opportunités de différenciation.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Sélection de 5 concurrents directs → benchmark prix & gamme → analyse SEO superficielle (mots-clés, structure) → comparaison présence réseaux sociaux → tableau récapitulatif</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 03</span>
              <h3 class="mission-detail__title">Analyse des résultats</h3>
            </div>
            <p class="mission-detail__desc">Bilan des actions menées pendant le stage : mesure de l'impact des modifications du site, de la refonte visuelle et des contenus publiés sur les performances globales.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Croisement des données KPI avant/après refonte → analyse des données GSC (impressions, clics, position moyenne) → synthèse écrite des résultats et recommandations</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="foot-mark"><em>matin</em>shakurov<em>.</em></div>
      <div class="foot">
        <div>
          <h4>Index</h4>
          <p style="color:var(--text);font-size:14px;max-width:280px;">Portfolio de stage — DEUST Webmaster, promotion 2025–2026.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="../index.html#about">À propos</a><a href="../index.html#missions">Missions</a><a href="../index.html#real">Réalisations</a><a href="../index.html#comp">Compétences</a><a href="../index.html#rap">Rapports</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:matin.shakurov@etu-unilim.fr">Mail ↗</a><a href="https://www.linkedin.com/in/matin-shakurov/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.instagram.com/shakurov_photos/" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
        <div>
          <h4>Localisation</h4>
          <p>Bourges, France</p>
          <p>Disponible 2025</p>
        </div>
      </div>
      <div class="foot-bot">
        <span>© 2025 Matin Shakurov</span>
        <a href="#">Mentions légales</a>
      </div>
    </div>
  </footer>

  <script src="../js/tweaks.js"></script>
  <script src="../js/cursor.js"></script>
  <script src="../js/animations.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add missions/analyse-strategie.html
git commit -m "feat: add analyse-strategie mission page"
```

---

### Task 4: Créer `missions/direction-artistique.html`

**Files:**
- Create: `missions/direction-artistique.html`

- [ ] **Step 1: Créer le fichier avec ce contenu exact**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Direction artistique — Matin Shakurov · Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/base.css" />
  <link rel="stylesheet" href="../css/layout.css" />
  <link rel="stylesheet" href="../css/components.css" />
  <link rel="stylesheet" href="../css/tweaks.css" />
</head>
<body>

  <div class="cur" id="cur"><span class="cur__lbl">View</span></div>

  <header class="hdr">
    <a href="../index.html" class="brand">MS / Matin Shakurov</a>
    <nav class="nav">
      <a href="../index.html#about">À propos</a>
      <a href="../index.html#missions">Missions</a>
      <a href="../index.html#real">Réalisations</a>
      <a href="../index.html#comp">Compétences</a>
      <a href="../index.html#rap">Rapports</a>
    </nav>
    <span class="hdr__time" id="clock">— : —</span>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero__top">
          <span class="hero__index">Portfolio · DEUST · <strong>2025–26</strong></span>
          <span class="hero__loc">Bourges, FR · 47.0810°N</span>
        </div>
        <div class="hero__title-block">
          <span class="hero__kicker">Étude de cas — Amazonie Parfum</span>
          <h1 class="hero__title">
            <span class="line"><span>Direction</span></span>
            <span class="line"><span><em>artistique.</em></span></span>
          </h1>
        </div>
        <div class="hero__bot">
          <p class="hero__lead">Construire une identité cohérente de A à Z : palette, typographie, ton, et maquette. Poser les bases visuelles avant de toucher à une seule ligne de code.</p>
          <div class="hero__meta">Catégorie<strong>02 / 05</strong></div>
          <div class="hero__meta">Période<strong>2025 — 2026</strong></div>
          <a href="../index.html#missions" class="cta-circle" data-cursor="lg" data-cursor-lbl="Retour">
            ← Retour<br />missions
            <span class="cta-circle__ring" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <defs>
                  <path id="ringp" d="M 70 70 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0" />
                </defs>
                <text>
                  <textPath href="#ringp">RETOUR · MISSIONS · PORTFOLIO · MATIN · </textPath>
                </text>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <span class="sec-eyebrow">02 — Direction artistique</span>
        <h2 class="sec-title reveal">Missions <em>effectuées.</em></h2>
        <div class="mission-list">

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 01</span>
              <h3 class="mission-detail__title">Création du brandboard</h3>
            </div>
            <p class="mission-detail__desc">Définition complète de l'identité visuelle d'Amazonie Parfum : palette de couleurs, typographies, ton éditorial et règles d'usage graphique.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Recherche d'inspiration (références secteur parfumerie & luxe accessible) → sélection d'une palette chromatique cohérente → choix typographique (display + corps) → constitution du moodboard → présentation et validation avec le maître de stage</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 02</span>
              <h3 class="mission-detail__title">Maquette du site</h3>
            </div>
            <p class="mission-detail__desc">Conception des wireframes et de la maquette haute-fidélité du site refondu, avant toute intégration, pour valider la structure et l'expérience utilisateur.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Définition de l'architecture des pages (arborescence) → wireframes basse-fidélité → maquette haute-fidélité en appliquant le brandboard → itérations selon les retours → export des specs pour intégration</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="foot-mark"><em>matin</em>shakurov<em>.</em></div>
      <div class="foot">
        <div>
          <h4>Index</h4>
          <p style="color:var(--text);font-size:14px;max-width:280px;">Portfolio de stage — DEUST Webmaster, promotion 2025–2026.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="../index.html#about">À propos</a><a href="../index.html#missions">Missions</a><a href="../index.html#real">Réalisations</a><a href="../index.html#comp">Compétences</a><a href="../index.html#rap">Rapports</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:matin.shakurov@etu-unilim.fr">Mail ↗</a><a href="https://www.linkedin.com/in/matin-shakurov/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.instagram.com/shakurov_photos/" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
        <div>
          <h4>Localisation</h4>
          <p>Bourges, France</p>
          <p>Disponible 2025</p>
        </div>
      </div>
      <div class="foot-bot">
        <span>© 2025 Matin Shakurov</span>
        <a href="#">Mentions légales</a>
      </div>
    </div>
  </footer>

  <script src="../js/tweaks.js"></script>
  <script src="../js/cursor.js"></script>
  <script src="../js/animations.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add missions/direction-artistique.html
git commit -m "feat: add direction-artistique mission page"
```

---

### Task 5: Créer `missions/refonte-web.html`

**Files:**
- Create: `missions/refonte-web.html`

- [ ] **Step 1: Créer le fichier avec ce contenu exact**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Refonte web &amp; Conformité — Matin Shakurov · Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/base.css" />
  <link rel="stylesheet" href="../css/layout.css" />
  <link rel="stylesheet" href="../css/components.css" />
  <link rel="stylesheet" href="../css/tweaks.css" />
</head>
<body>

  <div class="cur" id="cur"><span class="cur__lbl">View</span></div>

  <header class="hdr">
    <a href="../index.html" class="brand">MS / Matin Shakurov</a>
    <nav class="nav">
      <a href="../index.html#about">À propos</a>
      <a href="../index.html#missions">Missions</a>
      <a href="../index.html#real">Réalisations</a>
      <a href="../index.html#comp">Compétences</a>
      <a href="../index.html#rap">Rapports</a>
    </nav>
    <span class="hdr__time" id="clock">— : —</span>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero__top">
          <span class="hero__index">Portfolio · DEUST · <strong>2025–26</strong></span>
          <span class="hero__loc">Bourges, FR · 47.0810°N</span>
        </div>
        <div class="hero__title-block">
          <span class="hero__kicker">Étude de cas — Amazonie Parfum</span>
          <h1 class="hero__title">
            <span class="line"><span>Refonte web</span></span>
            <span class="line"><span>&amp; <em>Conformité.</em></span></span>
          </h1>
        </div>
        <div class="hero__bot">
          <p class="hero__lead">Remettre le site aux normes légales e-commerce et le rendre visible sur Google. Six pages légales rédigées, Search Console lancée via configuration DNS.</p>
          <div class="hero__meta">Catégorie<strong>03 / 05</strong></div>
          <div class="hero__meta">Période<strong>2025 — 2026</strong></div>
          <a href="../index.html#missions" class="cta-circle" data-cursor="lg" data-cursor-lbl="Retour">
            ← Retour<br />missions
            <span class="cta-circle__ring" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <defs>
                  <path id="ringp" d="M 70 70 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0" />
                </defs>
                <text>
                  <textPath href="#ringp">RETOUR · MISSIONS · PORTFOLIO · MATIN · </textPath>
                </text>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <span class="sec-eyebrow">03 — Refonte web &amp; Conformité</span>
        <h2 class="sec-title reveal">Missions <em>effectuées.</em></h2>
        <div class="mission-list">

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 01</span>
              <h3 class="mission-detail__title">Pages légales e-commerce</h3>
            </div>
            <p class="mission-detail__desc">Rédaction et intégration des 6 pages légales obligatoires pour un site e-commerce conforme : mentions légales, politique d'expédition, politique de retour et remboursement, conditions de service, conditions de vente, et coordonnées.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Identification des obligations légales applicables (e-commerce, RGPD) → rédaction page par page en adaptant au contexte parfumerie indépendante → intégration dans le CMS → vérification de l'accessibilité depuis le footer du site</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 02</span>
              <h3 class="mission-detail__title">Lancement Google Search Console</h3>
            </div>
            <p class="mission-detail__desc">Connexion du site à Google Search Console pour permettre le suivi de l'indexation, des impressions et des clics dans les résultats de recherche.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Création de la propriété GSC → récupération du record TXT de vérification → ajout du record dans les paramètres DNS du nom de domaine → attente de propagation DNS → validation de la propriété → soumission du sitemap</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="foot-mark"><em>matin</em>shakurov<em>.</em></div>
      <div class="foot">
        <div>
          <h4>Index</h4>
          <p style="color:var(--text);font-size:14px;max-width:280px;">Portfolio de stage — DEUST Webmaster, promotion 2025–2026.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="../index.html#about">À propos</a><a href="../index.html#missions">Missions</a><a href="../index.html#real">Réalisations</a><a href="../index.html#comp">Compétences</a><a href="../index.html#rap">Rapports</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:matin.shakurov@etu-unilim.fr">Mail ↗</a><a href="https://www.linkedin.com/in/matin-shakurov/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.instagram.com/shakurov_photos/" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
        <div>
          <h4>Localisation</h4>
          <p>Bourges, France</p>
          <p>Disponible 2025</p>
        </div>
      </div>
      <div class="foot-bot">
        <span>© 2025 Matin Shakurov</span>
        <a href="#">Mentions légales</a>
      </div>
    </div>
  </footer>

  <script src="../js/tweaks.js"></script>
  <script src="../js/cursor.js"></script>
  <script src="../js/animations.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add missions/refonte-web.html
git commit -m "feat: add refonte-web mission page"
```

---

### Task 6: Créer `missions/catalogue-produits.html`

**Files:**
- Create: `missions/catalogue-produits.html`

- [ ] **Step 1: Créer le fichier avec ce contenu exact**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Catalogue produits — Matin Shakurov · Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/base.css" />
  <link rel="stylesheet" href="../css/layout.css" />
  <link rel="stylesheet" href="../css/components.css" />
  <link rel="stylesheet" href="../css/tweaks.css" />
</head>
<body>

  <div class="cur" id="cur"><span class="cur__lbl">View</span></div>

  <header class="hdr">
    <a href="../index.html" class="brand">MS / Matin Shakurov</a>
    <nav class="nav">
      <a href="../index.html#about">À propos</a>
      <a href="../index.html#missions">Missions</a>
      <a href="../index.html#real">Réalisations</a>
      <a href="../index.html#comp">Compétences</a>
      <a href="../index.html#rap">Rapports</a>
    </nav>
    <span class="hdr__time" id="clock">— : —</span>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero__top">
          <span class="hero__index">Portfolio · DEUST · <strong>2025–26</strong></span>
          <span class="hero__loc">Bourges, FR · 47.0810°N</span>
        </div>
        <div class="hero__title-block">
          <span class="hero__kicker">Étude de cas — Amazonie Parfum</span>
          <h1 class="hero__title">
            <span class="line"><span>Catalogue</span></span>
            <span class="line"><span><em>produits.</em></span></span>
          </h1>
        </div>
        <div class="hero__bot">
          <p class="hero__lead">110 produits traités de bout en bout : recueil des données, prise de vue, retouche photo assistée par IA, rédaction et intégration sur les fiches produit.</p>
          <div class="hero__meta">Catégorie<strong>04 / 05</strong></div>
          <div class="hero__meta">Produits<strong>110 références</strong></div>
          <a href="../index.html#missions" class="cta-circle" data-cursor="lg" data-cursor-lbl="Retour">
            ← Retour<br />missions
            <span class="cta-circle__ring" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <defs>
                  <path id="ringp" d="M 70 70 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0" />
                </defs>
                <text>
                  <textPath href="#ringp">RETOUR · MISSIONS · PORTFOLIO · MATIN · </textPath>
                </text>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <span class="sec-eyebrow">04 — Catalogue produits</span>
        <h2 class="sec-title reveal">Missions <em>effectuées.</em></h2>
        <div class="mission-list">

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 01</span>
              <h3 class="mission-detail__title">Recueil des informations produits</h3>
            </div>
            <p class="mission-detail__desc">Collecte exhaustive des données nécessaires à la création de 110 fiches produit : noms, prix, variantes, ingrédients, familles olfactives et catégories.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Relevé en boutique (étiquettes, présentoir) → photographies des emballages → saisie et classement dans un tableur par catégorie → vérification des données avec le maître de stage</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 02</span>
              <h3 class="mission-detail__title">Photographie &amp; retouche produits</h3>
            </div>
            <p class="mission-detail__desc">Prise de vue et optimisation de 110 photos produits pour les fiches e-commerce, avec un process alliant photographie terrain et retouche assistée par IA.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Prise de photo de chaque produit (fond neutre, lumière contrôlée) → import dans Gemini avec prompt de retouche → génération de la photo optimisée → suppression du watermark IA → export format web optimisé → vérification qualité avant intégration</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 03</span>
              <h3 class="mission-detail__title">Intégration des fiches produits</h3>
            </div>
            <p class="mission-detail__desc">Intégration des 110 produits dans le CMS e-commerce : photos, descriptions, prix, catégories et variantes, fiche par fiche.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Création ou import des fiches dans le CMS → upload de la photo retouchée → saisie de la description et des données produit → affectation à la catégorie correspondante → vérification de l'affichage sur la boutique en ligne</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="foot-mark"><em>matin</em>shakurov<em>.</em></div>
      <div class="foot">
        <div>
          <h4>Index</h4>
          <p style="color:var(--text);font-size:14px;max-width:280px;">Portfolio de stage — DEUST Webmaster, promotion 2025–2026.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="../index.html#about">À propos</a><a href="../index.html#missions">Missions</a><a href="../index.html#real">Réalisations</a><a href="../index.html#comp">Compétences</a><a href="../index.html#rap">Rapports</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:matin.shakurov@etu-unilim.fr">Mail ↗</a><a href="https://www.linkedin.com/in/matin-shakurov/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.instagram.com/shakurov_photos/" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
        <div>
          <h4>Localisation</h4>
          <p>Bourges, France</p>
          <p>Disponible 2025</p>
        </div>
      </div>
      <div class="foot-bot">
        <span>© 2025 Matin Shakurov</span>
        <a href="#">Mentions légales</a>
      </div>
    </div>
  </footer>

  <script src="../js/tweaks.js"></script>
  <script src="../js/cursor.js"></script>
  <script src="../js/animations.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit**

```bash
git add missions/catalogue-produits.html
git commit -m "feat: add catalogue-produits mission page"
```

---

### Task 7: Créer `missions/contenus-reseaux.html`

**Files:**
- Create: `missions/contenus-reseaux.html`

- [ ] **Step 1: Créer le fichier avec ce contenu exact**

```html
<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Contenus &amp; Réseaux — Matin Shakurov · Portfolio</title>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&family=Archivo+Black&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
  <link rel="stylesheet" href="../css/base.css" />
  <link rel="stylesheet" href="../css/layout.css" />
  <link rel="stylesheet" href="../css/components.css" />
  <link rel="stylesheet" href="../css/tweaks.css" />
</head>
<body>

  <div class="cur" id="cur"><span class="cur__lbl">View</span></div>

  <header class="hdr">
    <a href="../index.html" class="brand">MS / Matin Shakurov</a>
    <nav class="nav">
      <a href="../index.html#about">À propos</a>
      <a href="../index.html#missions">Missions</a>
      <a href="../index.html#real">Réalisations</a>
      <a href="../index.html#comp">Compétences</a>
      <a href="../index.html#rap">Rapports</a>
    </nav>
    <span class="hdr__time" id="clock">— : —</span>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <div class="hero__top">
          <span class="hero__index">Portfolio · DEUST · <strong>2025–26</strong></span>
          <span class="hero__loc">Bourges, FR · 47.0810°N</span>
        </div>
        <div class="hero__title-block">
          <span class="hero__kicker">Étude de cas — Amazonie Parfum</span>
          <h1 class="hero__title">
            <span class="line"><span>Contenus &amp;</span></span>
            <span class="line"><span><em>Réseaux.</em></span></span>
          </h1>
        </div>
        <div class="hero__bot">
          <p class="hero__lead">Écrire, filmer, publier. Copywriting pour 110 produits, 6 articles de blog SEO et des vidéos courtes pour animer la présence d'Amazonie Parfum sur les réseaux.</p>
          <div class="hero__meta">Catégorie<strong>05 / 05</strong></div>
          <div class="hero__meta">Contenus<strong>110 + 6 + vidéos</strong></div>
          <a href="../index.html#missions" class="cta-circle" data-cursor="lg" data-cursor-lbl="Retour">
            ← Retour<br />missions
            <span class="cta-circle__ring" aria-hidden="true">
              <svg viewBox="0 0 140 140">
                <defs>
                  <path id="ringp" d="M 70 70 m -60 0 a 60 60 0 1 1 120 0 a 60 60 0 1 1 -120 0" />
                </defs>
                <text>
                  <textPath href="#ringp">RETOUR · MISSIONS · PORTFOLIO · MATIN · </textPath>
                </text>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </section>

    <section>
      <div class="container">
        <span class="sec-eyebrow">05 — Contenus &amp; Réseaux</span>
        <h2 class="sec-title reveal">Missions <em>effectuées.</em></h2>
        <div class="mission-list">

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 01</span>
              <h3 class="mission-detail__title">Copywriting produits</h3>
            </div>
            <p class="mission-detail__desc">Rédaction des descriptions commerciales pour l'ensemble des 110 produits du catalogue : textes orientés bénéfices, notes olfactives et ton en cohérence avec l'identité de la marque.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Analyse du produit (famille olfactive, ingrédients, usage) → rédaction d'une accroche + description développée → adaptation du ton au positionnement de la marque → relecture et correction → intégration sur la fiche produit</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 02</span>
              <h3 class="mission-detail__title">Blog SEO — 6 articles</h3>
            </div>
            <p class="mission-detail__desc">Création de la page blog du site et rédaction de 6 articles de fond répartis en 2 catégories thématiques (3 articles par catégorie), optimisés pour le référencement naturel.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Définition des 2 catégories thématiques → recherche de mots-clés par catégorie → structure d'article SEO (H1, H2, H3, balises meta) → rédaction des 6 articles → optimisation on-page → intégration dans le CMS avec images</p>
            </div>
          </div>

          <div class="mission-detail reveal">
            <div class="mission-detail__header">
              <span class="mission-detail__num">/ 03</span>
              <h3 class="mission-detail__title">Vidéos réseaux sociaux</h3>
            </div>
            <p class="mission-detail__desc">Tournage et montage de vidéos format court en vertical (9:16) destinées aux réseaux sociaux, pour animer la communauté et mettre en valeur les produits de la boutique.</p>
            <div class="mission-detail__process">
              <span class="mission-detail__process-lbl">Process</span>
              <p>Repérage en boutique et sélection des produits à filmer → tournage format vertical 9:16 → montage court (rythme, textes, musique) → export optimisé pour Instagram/TikTok → publication et suivi des statistiques</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <div class="foot-mark"><em>matin</em>shakurov<em>.</em></div>
      <div class="foot">
        <div>
          <h4>Index</h4>
          <p style="color:var(--text);font-size:14px;max-width:280px;">Portfolio de stage — DEUST Webmaster, promotion 2025–2026.</p>
        </div>
        <div>
          <h4>Navigation</h4>
          <a href="../index.html#about">À propos</a><a href="../index.html#missions">Missions</a><a href="../index.html#real">Réalisations</a><a href="../index.html#comp">Compétences</a><a href="../index.html#rap">Rapports</a>
        </div>
        <div>
          <h4>Contact</h4>
          <a href="mailto:matin.shakurov@etu-unilim.fr">Mail ↗</a><a href="https://www.linkedin.com/in/matin-shakurov/" target="_blank" rel="noopener">LinkedIn ↗</a><a href="https://www.instagram.com/shakurov_photos/" target="_blank" rel="noopener">Instagram ↗</a>
        </div>
        <div>
          <h4>Localisation</h4>
          <p>Bourges, France</p>
          <p>Disponible 2025</p>
        </div>
      </div>
      <div class="foot-bot">
        <span>© 2025 Matin Shakurov</span>
        <a href="#">Mentions légales</a>
      </div>
    </div>
  </footer>

  <script src="../js/tweaks.js"></script>
  <script src="../js/cursor.js"></script>
  <script src="../js/animations.js"></script>
</body>
</html>
```

- [ ] **Step 2: Commit final**

```bash
git add missions/contenus-reseaux.html
git commit -m "feat: add contenus-reseaux mission page"
```
