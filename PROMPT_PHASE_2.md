# PHASE 2 — Écriture de `rapports/rapport-final.html`

> À coller dans Claude Code, à la racine du repo `site_chef_doeuvre`.

---

## Contexte

Site chef-d'œuvre de DEUST Webmaster & Métiers de l'Internet, promotion 2025–2026. Évalué par un jury universitaire, oral dans 10 jours. Le site présente mon stage chez **Amazonie Parfum**, parfumerie indépendante à Bourges, du **30 mars au 5 juin 2026**.

La phase 1 est terminée et vérifiée : année corrigée, liens morts supprimés, `mentions-legales.html` créé et lié, meta description + Open Graph sur toutes les pages, README réécrit. **Les 21 images sont déjà dans `assets/images/stage/`.**

## Hiérarchie des sources — impérative

1. **Ce prompt** — prime sur tout le reste
2. `ADDENDUM_REPONSES.md` (v3)
3. `BRIEF_RAPPORT_FINAL.md`

Lis les deux fichiers en entier avant d'écrire. **Attention : les heures de la section 4 du brief sont fausses de −2 h.** La table de correction est en section 0 de l'addendum. Utilise systématiquement les heures corrigées.

## Règle absolue

**N'invente aucun fait, aucune date, aucun chiffre.** Tout provient de ce prompt, de l'addendum, du brief ou du repo. Si une information manque pour écrire une phrase, arrête-toi et demande. Ne comble jamais par du plausible.

---

# PARTIE A — Corrections aux documents de référence

Ces sept points **annulent ou remplacent** ce que disent le brief et l'addendum.

## A1. La cause du taux de conversion nul est connue — les hypothèses techniques sont caduques

Le brief (section 8) liste quatre hypothèses techniques pour expliquer le 0 %. **Elles sont abandonnées.** La cause réelle est commerciale :

**Des frais de port d'environ 10 €, intégralement à la charge du client, imposés par la direction sans seuil de gratuité.** Sur un panier moyen de 57,50 €, cela représente environ 17 % de surcoût, révélé à l'étape finale du tunnel.

Élément documentaire décisif : **la maquette Lovable, produite en amont, affiche « LIVRAISON OFFERTE DÈS 80 € ». Le site livré ne l'a pas.** Le stagiaire avait donc proposé un franco de port ; la direction l'a refusé, en indiquant que même sur un panier de 200 € les frais resteraient à la charge du client.

Le système de paiement lui-même n'est pas mis en cause.

## A2. Frais de transaction — argument à ne pas utiliser

Shopify Payments applique **1,5 % + 0,25 €** par transaction en ligne, soit exactement le tarif Stripe pour une carte européenne. **Les deux plateformes sont identiques sur ce poste.** N'écris jamais que Shopify serait moins cher en transaction.

## A3. Thème Tinker — gratuit

Le thème **Tinker**, construit sur le socle Horizon de Shopify, est **gratuit**. La refonte n'a donc engendré **aucun coût de licence** : ni thème, ni extension payante, ni prestataire.

## A4. Next.js — à ne pas revendiquer comme décision

Le brief et l'addendum présentent l'abandon de Next.js du 28/04 comme une décision technique majeure du stagiaire. **C'est incorrect et cela ne doit pas figurer ainsi.** Cet épisode concerne le site chef-d'œuvre personnel, pas le site de l'entreprise, et le stagiaire n'en revendique pas la paternité.

Traitement : **une seule phrase factuelle** en section 10, sans en tirer d'argument — « une première itération reposant sur une chaîne de build a été écartée au profit de HTML, CSS et JavaScript natifs ». Rien de plus.

## A5. Sitemap — chronologie exacte

Le sitemap est **généré automatiquement par Shopify**, il n'a pas été créé par le stagiaire. Celui-ci l'a **soumis dans Google Search Console**. Formule à employer : « soumission dans Search Console du sitemap généré par la plateforme ».

## A6. Maquette Lovable — lien public

URL publique vérifiée : `https://amazonie-scent-suite.lovable.app`

Elle reste une **maquette de structure à contenus de remplissage** (produits fictifs, prix de 145 à 245 €, adresse parisienne fictive, témoignages inventés). Le préciser explicitement.

## A7. Le document de recommandations existe

Le brief indique qu'aucun document de recommandations n'a été produit. **C'est inexact.** Le plan d'action réseaux sociaux du 9 mai 2026, dix pages, remplit ce rôle — il a simplement été remis en cours de stage plutôt qu'à la fin.

---

# PARTIE B — Contenu nouveau, validé

## B1. Répartition du temps — à énoncer dans le rapport

Le stage s'est déroulé **majoritairement en boutique**, en renfort présentiel. Le stagiaire consacrait **au minimum 4 heures par jour travaillé** au web : site, vérification des KPI, rédaction, améliorations.

Ce point doit apparaître explicitement dans la section 06. Il est structurant et il explique la densité inégale des livrables selon les semaines.

## B2. Semaine 7 — 11 au 17 mai

- **Les fiches produits ont été mises en ligne après la refonte**, pas avant
- Élaboration du plan de zones de marchandises de la boutique — document daté du 11/05, 18:21
- Tournage de 10 vidéos au format vertical 9:16
- Les publications ont été **programmées plusieurs mois à l'avance** ; leur diffusion est observée depuis mai, sous forme de reels et **principalement de stories**
- Soumission dans Search Console du sitemap généré par Shopify

## B3. Formation du maître de stage — semaines 8 et 9

**Volume : au minimum 10 heures.**

Contenus transmis :

- Tenue et suivi du stock
- Back-office Shopify : ajouter un produit, modifier une fiche existante
- Rédaction d'une description cohérente avec la charte appliquée aux autres fiches
- Création et choix de la catégorie d'un produit
- Lecture et interprétation des statistiques
- Réponse à une requête client
- Fonctionnement des Meta Ads

Le gérant apprend en parallèle les bases du HTML, du CSS et du JavaScript ; le stagiaire l'a débloqué sur plusieurs points.

**Méthode :** démonstration, puis répétition immédiate par le gérant devant le stagiaire, à chaque fois.

**Aucun support écrit n'a été laissé** — le gérant a indiqué ne pas en avoir besoin. À écrire tel quel, sans le masquer.

**Compétences acquises par le gérant :** ajouter un produit, rédiger la bonne description, choisir et créer une catégorie, consulter et analyser en partie les statistiques, répondre à une requête client.

## B4. Semaine 10 — 1er au 5 juin

Ce qui a été laissé à l'entreprise :

- Un site entièrement refait
- Des visuels produits entièrement refaits
- Une arborescence de catégories créée
- Un comptage et un suivi de stock en place
- Le document de zones de chalandise et son contenu
- Un gérant formé, capable de gérer le compte, de vérifier, et connaissant le fonctionnement des Meta Ads
- Des pistes d'amélioration des réseaux sociaux

**Pas d'entretien formel de fin de stage** — un bref échange sur le déroulement de la collaboration.

**Le gérant n'a effectué aucune modification du site, ni pendant le stage ni après.** Le stagiaire disposait d'une carte blanche complète sur le site.

## B5. Conditions de travail — matière pour le bilan

- Aucun poste de travail dédié : ordinateur portable sur les genoux, dans la boutique
- Difficulté à traduire les attentes du maître de stage en cahier des charges précis
- Shopify appris de zéro pendant le stage, par tutoriels

## B6. Arbitrage de CMS — WordPress contre Shopify

Le stagiaire a envisagé WordPress / WooCommerce. La direction a maintenu Shopify : le gérant ne connaît pas WordPress, il avait ouvert Shopify lui-même, son engagement était en cours, et il souhaitait conserver la plateforme quitte à réévaluer plus tard.

**Chiffrage à intégrer sous forme de tableau :**

| Poste | Shopify Basic | WooCommerce |
|---|---|---|
| Plateforme | 33 €/mois = 396 €/an *(≈ 297 € en annuel)* | gratuit |
| Hébergement e-commerce | inclus | 96 à 180 €/an |
| Thème | Tinker, gratuit | gratuit à 80 € une fois |
| SSL, sauvegardes, sécurité | inclus | inclus ou ~30 €/an |
| Frais de transaction | 1,5 % + 0,25 € | 1,5 % + 0,25 € — **identique** |
| Caisse / point de vente | POS Lite **inclus** | aucune caisse native — extension tierce, 150 à 300 €/an en version complète |
| Maintenance | nulle | temps interne, ou 30 à 80 €/mois |

**Économie théorique de WooCommerce : 130 à 230 €/an**, annulée dès l'ajout d'une caisse, négative dès que la maintenance est valorisée.

**Trois arguments non financiers, décisifs :** le stock unifié entre le comptoir et le site via POS Lite ; la promesse de click & collect sous 2 h qui repose sur la fiabilité de ce stock ; les 10 heures de formation du gérant sur un back-office qu'il connaissait déjà.

**Conclusion à écrire :** la direction avait raison, et la démonstration chiffrée l'établit.

## B7. Bilan personnel — matière brute

À rédiger **à la première personne**. Ne pas inventer au-delà de ces éléments.

- **Au 30 mars :** je pensais que le métier de webmaster consistait à créer un site puis vérifier que tout fonctionne
- **Au 5 juin :** j'ai compris qu'il s'agit d'une analyse complète — ce qui fonctionne, ce qui ne fonctionnera pas, la conception du tunnel de vente, la transformation du visiteur en client puis sa fidélisation. J'ai appris à mener une refonte en y intégrant les produits, à utiliser l'IA sous d'autres formes que la conversation, à gérer des réseaux sociaux, à analyser des statistiques, à comprendre qui regarde l'entreprise et à adapter le contenu à ces personnes
- **Le déclic :** comprendre que le problème n'était pas dans le site, mais dans l'expérience utilisateur
- **Sur le 0 % de conversion :** aucune surprise. Les frais de port avaient été identifiés d'avance comme repoussants
- **Le plus difficile :** travailler sans bureau, ordinateur sur les genoux ; traduire les attentes du maître de stage en cahier des charges précis ; apprendre Shopify de zéro
- **Changement d'avis :** j'ai abandonné l'idée de WordPress ; la direction a maintenu Shopify, et le chiffrage lui donne raison
- **Si je recommençais :** je consacrerais les trois premiers jours à l'analyse des réseaux, du site et des cibles, puis je traiterais le site d'abord et les réseaux ensuite, au lieu de m'éparpiller dans les deux sens
- **Ce qui m'a le plus surpris :** le peu d'activité que générait le site, et le refus d'investir même modestement en SEA ou en Meta Ads pour construire la notoriété locale

---

# PARTIE C — Structure du rapport, 11 sections

**01 — Rappel du cadre.** Tableau `info-list` / `info-row` : étudiant, formation, organisme, maître de stage, adresse, période, plateforme (Shopify), thème (Tinker, gratuit).

**02 — Le diagnostic initial.** État du site au 09/04/2026 à 17:28. Tableau des défauts. Mettre en avant le **bug des trois H1 « Parfums de Poche » identiques** sur les trois pages collections. Images : les trois recadrages `bug-h1-*-crop.jpg` empilés.

**03 — De la maquette au site livré.** Quatre temps :

1. Les contraintes — Shopify maintenu, thème imposé, Tinker sur socle Horizon à sections paramétrables
2. La maquette Lovable, de structure, lien `https://amazonie-scent-suite.lovable.app`, images `maquette-lovable-*.jpg`
3. Le tableau des 10 écarts maquette → livré
4. Le tunnel livré en 9 blocs, angle bicéphale e-commerce et drive-to-store

Images : `site-avant-hero.jpg` et `site-apres-hero.jpg` côte à côte.

**04 — Trois produits, trois méthodes.** Section D de l'addendum, intégralement. Aucune revendication de volume de produits. Images : `cas1-yara-visuel.jpg`, la paire `cas2-photo-source.jpg` / `cas2-visuel-final.jpg` côte à côte avec légendes horodatées, `cas3-musk-gamme.jpg`.

**05 — Les livrables.** `rpt-stats` puis `rpt-deliv-grid`. Sans ligne « fiches produits ». Images : `affiche-promo.jpg`, `blog-brumes.jpg`, `logo-horizontal.svg` en ligne.

**06 — Le planning réalisé.** Tableau des 10 semaines : Semaine · Dates · Travaux · Preuve. Heures corrigées. Distinction visuelle ⬤ entreprise / ◯ chef-d'œuvre, avec légende. **Énoncer la répartition du temps (B1) en introduction de section.** Puis la sous-section « Écarts entre le prévisionnel et le réalisé » : Meta Ads refusées faute de budget, décalages de S3 et S4.

**07 — Résultats mesurés : Shopify.** Le tunnel en `rpt-stats` : 708 visites → 19 paniers (2,68 %) → 12 paiements atteints (1,69 %) → **0 commande (0 %)**. Ventes, trafic, sources, pages d'entrée. Bloc `rpt-highlight` obligatoire sur les 141 visites de Council Bluffs, trafic robot, **trafic réel corrigé ~567**.

**08 — Résultats mesurés : réseaux sociaux.** Les 4 plateformes. Aucune vente attribuée aux réseaux. Image : `kpi-instagram.jpg`.

**09 — Analyse.** La section centrale, trois temps :

- **Ce qui a fonctionné :** trafic ×1,7, Google depuis Bourges +350 %, direct depuis Bourges +440 %, Collection Privée +850 %, ajout au panier +111 %, passage panier→paiement 63 %
- **Ce qui n'a pas fonctionné :** 12 paiements atteints, 0 validé. Démonstration par élimination — tout progresse en amont, la rupture est exclusivement à la dernière marche, donc la cause n'est pas marketing. **Cause identifiée : les frais de port (A1).** Bloc `rpt-highlight--orange`. Rappeler que le franco à 80 € figurait dans la maquette et a été refusé
- **Actions correctives :** plan d'action du 09/05 · rétablissement du franco de port, chiffré : 8 à 10 € par commande franchie, deux commandes par mois couvrent l'abonnement annuel · rétablissement du bouton « Ajouter au panier » sur les vignettes, présent dans la maquette et non repris

Puis le **chiffrage CMS (B6)** et sa conclusion : *le levier économique déterminant n'était pas la plateforme mais la politique de livraison*.

**10 — Décisions techniques du site chef-d'œuvre.** Développement piloté par spécification des 20 et 21/05 : spécification de design puis plan d'implémentation commités avant la première ligne de code, dans `docs/superpowers/`. Métriques : 73 commits, 4 094 lignes, 4 feuilles CSS, 3 scripts, 0 dépendance. **Une seule phrase factuelle sur l'abandon de la chaîne de build (A4).**

**11 — Bilan personnel.** Rédigé à la première personne à partir de B7, sans ajout.

---

# PARTIE D — Forme

Reprends **strictement** l'ossature de `rapports/rapport-lancement.html` : même `<head>`, header avec les deux menus déroulants, footer, sections `<span class="sec-eyebrow">NN — Titre</span>` + `<h2 class="sec-title">Texte <em>accent.</em></h2>`.

Vocabulaire CSS existant à réutiliser :

`rpt-lead` · `rpt-body` · `rpt-sub-eyebrow` · `rpt-sub-title` · `rpt-highlight` (+ `--dark`, `--orange`) · `rpt-table` (+ `--comp`) · `rpt-table-wrap` · `rpt-good` · `rpt-bad` · `rpt-stats` / `rpt-stat` · `rpt-axes` / `rpt-axe` · `rpt-list` · `rpt-tools` / `rpt-tool` · `rpt-priority` (+ `--med`, `--low`) · `rpt-deliv-grid` · `rpt-divider` · `reveal`

**Un seul composant à créer** dans `css/components.css`, convention BEM : `rpt-compare`, `rpt-compare__col`, `rpt-compare__lbl` — deux colonnes au-dessus de 768 px, empilé en dessous. Utilisé aux sections 02, 03 et 04.

Toute `<img>` porte : `alt` descriptif, `loading="lazy"` sauf la première, `width` et `height` explicites. Le SVG s'intègre en ligne, pas en `<img>`.

Ajoute la meta description et les balises Open Graph sur cette page, comme sur les autres.

**Ton :** factuel, chiffré, sans superlatif. Le rapport assume le résultat commercial nul et l'explique.

---

# PARTIE E — Ce qu'il ne faut PAS écrire

- ❌ « création du site » → le terme est **refonte**
- ❌ « tous les visuels générés par IA » → 21 photographies originales servent de base
- ❌ Tout volume de produits (« 110 », « 118 fiches »)
- ❌ « Shopify est moins cher en frais de transaction » → les taux sont identiques
- ❌ L'abandon de Next.js présenté comme une décision revendiquée
- ❌ Les quatre hypothèses techniques sur le 0 % → la cause est commerciale
- ❌ 708 visites sans la correction à ~567
- ❌ La maquette présentée comme un site réel → maquette de structure
- ❌ Toute semaine du planning sans preuve dans les documents de référence

---

# PARTIE F — Vérification avant de rendre la main

```bash
grep -rn "2025" --include=*.html . | grep -vE "2025[–-]26|2025[–-]2026"
grep -rn 'href="#"' --include=*.html .
grep -rni "110 produit\|118 fiche" --include=*.html .
grep -rni "créé le site\|création du site" --include=*.html .
grep -rn "<img" --include=*.html . | grep -v "alt="
grep -rni "next.js\|nextjs" --include=*.html rapports/
for f in $(find . -name "*.html" -not -path "./.git/*"); do echo -n "$f "; grep -c 'name="description"' $f; done
```

Puis rends-moi :

1. Un tableau `valeur écrite / valeur source / conforme oui-non` pour **chaque chiffre** du rapport
2. Les résultats bruts des contrôles ci-dessus
3. Le rendu vérifié à 375 px, 768 px et 1440 px, console sans erreur
4. Les incohérences que tu as trouvées et que je ne t'avais pas signalées

Un commit par unité logique. **Ne pousse pas sans me le dire.**
