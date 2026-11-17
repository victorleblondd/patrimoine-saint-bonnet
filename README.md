# Site de l'association du Patrimoine de Saint-Bonnet-de-Condat

Site de l'association du Patrimoine de Saint-Bonnet-de-Condat (Cantal, 15190), préparé en vue de sa relance : l'association est aujourd'hui en sommeil et attend des bénévoles pour en reprendre les rênes, avec le projet « Raconte-moi Saint-Bonnet », mené en partenariat avec la commune.

Le site est construit avec Jekyll et se publie gratuitement avec GitHub Pages, comme le site de la commune (https://saint-bonnet-de-condat.fr).

## Statut : proposition

Tant que l'association n'a pas adopté le site, `proposition: true` dans `_config.yml` :

- un bandeau « Proposition de site pour l'association du Patrimoine… » s'affiche en haut de chaque page ;
- le site n'est pas référencé par les moteurs de recherche (balise `noindex, nofollow`) ;
- les mentions légales sont au nom de l'auteur de la proposition, Victor Leblond.

### Le jour où l'association adopte le site

1. Dans `_config.yml`, passer `proposition` à `false`.
2. Dans `_data/contacts.yml`, remplir la rubrique `association` : siège, numéro RNA s'il existe, directeur ou directrice de la publication, adresse électronique. Ces informations s'affichent alors dans les mentions légales.
3. Si l'association a ses propres contacts, les ajouter aux pages `association.html` et `raconte-moi.html` (aujourd'hui : la mairie et Claude Legrand, conseiller municipal, les contacts donnés par la commune).

## Les pages

| Page | Fichier | Adresse |
|---|---|---|
| Accueil | `index.html` | `/` |
| L'association | `association.html` | `/association/` |
| Raconte-moi Saint-Bonnet | `raconte-moi.html` | `/raconte-moi/` |
| Le patrimoine | `patrimoine.html` | `/patrimoine/` |
| Archives et généalogie | `archives-et-genealogie.html` | `/archives-et-genealogie/` |
| Mentions légales | `mentions-legales.html` | `/mentions-legales/` |
| Page introuvable | `404.html` | servie par GitHub Pages pour toute adresse inconnue |

Le menu est dans `_data/navigation.yml`. L'en-tête, le bandeau de proposition et le pied de page sont dans `_includes/`.

## Modifier le contenu

- **Un contact** (mairie, référent du projet, site de la commune) : `_data/contacts.yml`. Une seule modification met à jour tout le site.
- **Un texte** : directement dans le fichier de la page. Le titre et le chapeau (phrase d'introduction) sont en tête du fichier, entre les deux lignes `---`.
- **Un élément du petit patrimoine** : dans `patrimoine.html`, ajouter un bloc `<div id="…"><dt>Nom</dt><dd>Description</dd></div>` dans la liste `inventaire`.
- **La liste des registres** : `_data/registres.yml`. **Les noms de famille du premier registre** : `_data/patronymes.yml`.
- **Les couleurs et la mise en page** : `assets/css/site.css`. Après chaque modification, augmenter le numéro `?v=` du fichier dans `_includes/head.html` (le navigateur des visiteurs charge alors la nouvelle version).

Règles suivies : uniquement des contenus sourcés (sources en bas des pages Patrimoine et Archives, et dans les mentions légales) ; aucune image générée par IA, aucun logo inventé ; pas de photos de personnes ; pas d'autres données personnelles que les contacts publiés par la commune pour le projet.

## Photos et licences

| Fichier | Contenu | Origine |
|---|---|---|
| `assets/images/village-neige.jpg` | le bourg sous la neige (accueil) | photo de Victor Leblond, reprise du site de la commune (sans crédit, comme sur le site de la commune), réduite à 1 200 px |
| `assets/images/eglise.jpg` | l'église Saint-Bonnet | Père Igor, Wikimedia Commons ([Saint-Bonnet-de-Condat église.jpg](https://commons.wikimedia.org/wiki/File:Saint-Bonnet-de-Condat_%C3%A9glise.jpg)), CC BY-SA 4.0, vignette de 960 px reprise de l'historique du dépôt de la commune |
| `assets/images/mairie-ecole.jpg` | la mairie-école et le monument aux morts | Père Igor, Wikimedia Commons ([Saint-Bonnet-de-Condat mairie-école.jpg](https://commons.wikimedia.org/wiki/File:Saint-Bonnet-de-Condat_mairie-%C3%A9cole.jpg)), CC BY-SA 4.0, réduite à 1 400 px |

Les deux photos de Wikimedia Commons sont créditées dans les mentions légales et sous chaque photo de la page Patrimoine (obligatoire avec la licence CC BY-SA 4.0).

La police Spectral (Production Type) est sous licence SIL Open Font License 1.1 (`assets/fonts/OFL.txt`). Les fichiers viennent du paquet `@fontsource/spectral` 5.3.0 (sous-ensemble « latin », qui couvre le français) et sont servis par le site lui-même : aucun appel à un service de polices extérieur.

## Sources des contenus

- Site de la commune (https://saint-bonnet-de-condat.fr), pages Vie locale (l'association « en sommeil ») et Découvrir (« Raconte-moi Saint-Bonnet », patrimoine, randonnée, registres), et *La Gazette des Saint-Bonnetoux* n° 1, été 2026 (four de Réghéat ; lancement du projet parmi les premières actions de l'équipe municipale installée le 22 mars 2026).
- Wikipédia, article « Saint-Bonnet-de-Condat » : église (ancien prieuré donné en 1131 par Aymeri, évêque de Clermont, à l'abbaye de Sauxillanges ; réparée en 1653 par François de Giou), moulins du Lessart et de Réginbal, croix ancienne, hameaux, bourg à l'abri d'un rocher basaltique, anciens noms (Saint-Bonnet de Marcenat ; Montagne sous la Convention ; nom actuel depuis 1955). Wikipédia écrit « Sauxillage » : il s'agit de Sauxillanges.
- Destination Haut Cantal, fiche de la randonnée « Chaussonet » (relevé du 28 octobre 2026 conservé dans le dépôt de la commune, `outils/randonnees/source/`) : formation des orgues basaltiques, conseil de prudence près de la corniche. Parc naturel régional des Volcans d'Auvergne : fiche PDF de la randonnée (6,2 km, 222 m, niveau moyen, départ place de l'église). Durée : 2 h 30 selon la fiche du Parc, 2 h 15 selon l'office de tourisme (et le site de la commune) ; la page Patrimoine dit « entre 2 h 15 et 2 h 30 ».
- Archives départementales du Cantal : catalogue des 23 registres (septembre 2026) et indexation collaborative du registre 5 Mi 313/1 (1 242 relevés, 353 noms de famille).
- Insee : population légale 2023 (113 habitants).

## Publication

- En ligne : https://victorleblondd.github.io/patrimoine-saint-bonnet/ (GitHub Pages, branche `main`, dossier racine ; Settings → Pages → « Deploy from a branch »).
- Chaque modification poussée sur `main` est publiée automatiquement en une minute environ.
- Pour passer à un nom de domaine : dans `_config.yml`, `url: "https://le-domaine.fr"` et `baseurl: ""`, puis un fichier `CNAME` contenant le domaine et sa configuration DNS (comme pour saint-bonnet-de-condat.fr).

Tous les liens passent par le filtre `relative_url` : le site marche à la racine d'un domaine comme dans un sous-dossier.

## Tester en local

Avec Jekyll installé : `jekyll serve`, puis ouvrir http://localhost:4000.
