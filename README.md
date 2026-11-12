# Portfolio — Indie Game Developer

Portfolio statique (HTML5 / CSS3 / JavaScript vanilla), sans framework ni étape de build. Thème « Dark Gaming / Cinematic UI », entièrement responsive.

## Architecture

```
portfolio/
├── index.html              Page unique (6 sections)
├── css/
│   └── style.css           Tout le style, avec sommaire en en-tête
├── js/
│   ├── i18n.js             Tous les textes en français et en anglais
│   └── main.js             Comportements + blocs CONFIG et PROJECTS
├── assets/
│   ├── img/
│   │   ├── portrait.jpg        Ta photo (section About)
│   │   ├── hero-bg.svg         Illustration du hero (originale)
│   │   ├── cover-cendres.svg   Couverture conceptuelle — Les Cendres de Néra
│   │   ├── cover-zombie.svg    Couverture conceptuelle — Zombie Survival
│   │   ├── favicon.svg
│   │   └── gallery/            (à créer) tes vraies captures d'écran
│   └── cv/
│       └── (place ici ton CV : CV_BELINA_Fitahintsoa.pdf)
├── robots.txt
├── sitemap.xml
└── README.md
```

## Installation

Aucune installation : ouvre `index.html` dans un navigateur.
Pour tester avec un petit serveur local (recommandé, notamment pour le bouton CV) :

```bash
cd portfolio
python3 -m http.server 8000
# puis ouvre http://localhost:8000
```

## Mise en ligne

Le dossier est directement hébergeable sur n'importe quel hébergement statique :
GitHub Pages, Netlify, Vercel, Cloudflare Pages, ou un hébergement classique (envoie le contenu du dossier à la racine du site).

Après la mise en ligne, remplace `https://example.com/` par ton vrai domaine dans :
- `index.html` (balise `canonical`)
- `sitemap.xml`
- `robots.txt`

## À faire avant de publier

1. **Ton CV** : place ton PDF dans `assets/cv/` sous le nom `CV_BELINA_Fitahintsoa.pdf` (ou modifie le `href` du bouton `#cvBtn` dans `index.html`). Tant que le fichier est absent, le bouton affiche un message au lieu de télécharger.
2. **Facebook** : le bouton pointe pour l'instant vers une *recherche* « Fitahintsoa Hebi ». Remplace le `href` par l'URL exacte de ton profil (ex. `https://www.facebook.com/ton.profil`) dans `index.html`, section Contact (cherche `facebook.com/search`). TikTok (`@Hebiiff`) et WhatsApp (`wa.me/261384239179`) sont déjà configurés : vérifie qu'ils ouvrent bien tes comptes.
3. **Formulaire de contact** : voir la section suivante.
4. **Moteur des jeux** : la mention « Godot Engine » est utilisée pour les deux projets (cohérent avec tes compétences). Si un projet utilise un autre moteur, modifie-la dans `index.html` (attribut `data-engine`) et dans `js/main.js` (bloc `PROJECTS`).
5. **Captures d'écran** : voir « Ajouter les vraies captures » ci-dessous.

## Langues (FR / EN)

Le bouton **FR | EN** du menu change la langue de tout le site (textes, fenêtre projet, messages du formulaire, titre de l'onglet). Le choix est mémorisé dans le navigateur ; à la première visite, le site s'affiche en français si le navigateur est en français, sinon en anglais (réglable avec `CONFIG.defaultLang` dans `js/main.js`).

- Pour corriger ou améliorer une traduction : modifie `js/i18n.js` (blocs `en` et `fr`).
- Pour ajouter un texte traduisible : mets `data-i18n="ma.cle"` sur l'élément dans `index.html` et ajoute `ma.cle` dans les deux langues.

## Photo

Ta photo est `assets/img/portrait.jpg` (affichée dans « About the Developer »). Pour la changer, remplace ce fichier par une image portrait (rapport 4:5 idéal, ~900 px de large) en gardant le même nom.

## Formulaire de contact

Le site étant statique, il n'a pas de serveur pour envoyer les emails. Deux modes :

- **Mode par défaut (repli mailto)** : à l'envoi, le client mail du visiteur s'ouvre avec le message pré-rempli, adressé à ton email. Fonctionne sans configuration.
- **Mode service de formulaire (recommandé)** : crée un formulaire gratuit sur [Formspree](https://formspree.io) (ou un service équivalent), puis colle l'URL obtenue dans `CONFIG.formEndpoint` de `js/main.js`. Les messages arrivent alors directement dans ta boîte mail, sans quitter le site.

Le formulaire inclut une validation côté navigateur et un champ piège anti-spam (honeypot).

## Ajouter les vraies captures d'écran

Les images `cover-*.svg` sont des **illustrations conceptuelles**, pas des captures du jeu.

1. Crée `assets/img/gallery/` et dépose-y tes captures (PNG/JPG/WebP).
2. Dans `js/main.js`, bloc `PROJECTS`, renseigne la galerie du projet :

```js
gallery: [
  "assets/img/gallery/cendres-01.png",
  "assets/img/gallery/cendres-02.png"
]
```

3. Pour utiliser une capture comme couverture : remplace le `src` de l'image du projet dans `index.html` et la valeur `cover` dans `PROJECTS`.

La galerie (grille + lightbox avec flèches clavier) apparaît automatiquement. Tant qu'elle est vide, un message « captures à venir » s'affiche.

## Personnalisation

| Je veux changer… | Où |
|---|---|
| Couleurs | variables `:root` en haut de `css/style.css` (`--bg`, `--red`, `--blue`…) |
| Polices | balise `<link>` Google Fonts dans `index.html` + `--font-head` / `--font-body` |
| Textes des sections | `index.html` |
| Contenu de la fenêtre projet | bloc `PROJECTS` dans `js/main.js` |
| Ajouter un projet | dupliquer un `<article class="project">` dans `index.html`, ajouter une entrée dans `PROJECTS` avec la même clé que `data-open` |
| Nombre de particules | fonction `particles()` dans `js/main.js` |
| Illustration du hero | remplacer `assets/img/hero-bg.svg` (ou une image 16:9 d'au moins 1600 px) |

## Choix techniques

- Aucune dépendance JavaScript ; seules les polices (Inter, Rajdhani) viennent de Google Fonts, avec repli sur les polices système.
- Images en SVG (légères, nettes sur tous les écrans) ; images de projets en chargement différé.
- Animations désactivées automatiquement pour les visiteurs ayant activé « réduire les animations » ; les particules se mettent en pause hors écran.
- Accessibilité : lien d'évitement, focus visible, modale avec fermeture clavier (Échap), attributs ARIA, contrastes élevés.
- SEO de base : titre, description, Open Graph, données structurées Person (JSON-LD), `robots.txt`, `sitemap.xml`.
