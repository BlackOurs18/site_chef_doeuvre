# Site Chef-d'œuvre — DEUST Webmaster & Métiers de l'Internet

Chef-d'œuvre de fin d'année, réalisé dans le cadre du **DEUST Webmaster & Métiers de l'Internet** (promotion 2025–2026).

**Auteur :** Matin Shakurov

**Publication :** [https://blackours18.github.io/site_chef_doeuvre/](https://blackours18.github.io/site_chef_doeuvre/)

---

## Contexte

Ce site présente le stage de webmaster effectué chez **Amazonie Parfum**, parfumerie indépendante à Bourges, du **30 mars au 5 juin 2026**. Il détaille le contexte de l'entreprise, les missions confiées, ainsi que le rapport de lancement et le rapport final du stage.

---

## Structure des dossiers

```
.
├── index.html          # page d'accueil
├── missions/           # 5 pages détaillant les missions du stage
├── rapports/           # rapport de lancement + rapport final
├── css/                # base, layout, components, tweaks
├── js/                 # animations, cursor, tweaks
├── assets/             # images, médias
└── docs/               # documentation de conception et mémo Git
```

---

## Choix techniques

Le site est développé en **HTML/CSS/JS natif**, sans framework ni dépendance de build, et publié sur **GitHub Pages**.

Une première version avait été construite en **Next.js** (25–26 avril 2026), puis abandonnée le **28 avril 2026** au profit de cette reconstruction native. Cette décision fait suite à une veille comparative menée sur 9 CMS/frameworks, qui a conclu que le choix d'une technologie doit partir du besoin métier réel et non de la popularité de l'outil : un site vitrine statique, sans contenu dynamique ni authentification, ne justifie pas une chaîne de build.

Certaines évolutions du site (par exemple la restructuration de la section Missions, mi-mai 2026) ont suivi une méthode de **développement piloté par spécification** : les documents de conception sont versionnés dans [`docs/superpowers/`](docs/superpowers/) avant toute ligne de code.

---

## Consultation en local

Aucun serveur ni build n'est nécessaire. Il suffit d'ouvrir `index.html` dans un navigateur.

---

## Documentation

- [`docs/superpowers/`](docs/superpowers/) — spécifications et plans de conception
- [`docs/git-memo.md`](docs/git-memo.md) — aide-mémoire des commandes Git
