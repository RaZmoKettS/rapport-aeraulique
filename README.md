# Rapport de mesure aéraulique – AAI (application iPad / iPhone)

Application web installable : fonctionne **sans réseau** une fois ouverte une première fois, et enregistre le rapport automatiquement sur l'appareil.

## 1. Publier sur GitHub Pages (gratuit, une seule fois)

1. Créer un compte sur github.com, puis **New repository** (nom au choix, par exemple `rapport-aeraulique`). Le dépôt doit être **Public** : GitHub Pages est gratuit uniquement pour les dépôts publics.
2. Dans le dépôt : **Add file > Upload files**, glisser **les 7 fichiers** (`index.html`, `sw.js`, `manifest.webmanifest`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`), puis **Commit changes**. Ne pas envoyer le .zip : GitHub ne le décompresse pas.
3. **Settings > Pages** : *Source* = « Deploy from a branch », *Branch* = `main`, dossier `/ (root)`, puis **Save**.
4. Attendre 1 à 2 minutes. L'adresse est affichée en haut de la page Pages :
   `https://VOTRE-COMPTE.github.io/rapport-aeraulique/`

Attention : le dépôt étant public, le logo et le modèle Word AAI contenus dans `index.html` sont lisibles par n'importe qui. Les rapports saisis, eux, ne quittent jamais l'appareil.

## 2. Installer sur iPad / iPhone

1. Ouvrir l'adresse avec **Safari**, **avec du réseau** (le fichier est alors mis en mémoire).
2. Toucher **Partager** (carré avec flèche) > **Sur l'écran d'accueil** > **Ajouter**.
3. Ouvrir l'application depuis l'icône. Contrôler une fois en mode avion que l'écran s'ouvre bien.

## 3. Utilisation

- Tout est enregistré automatiquement (voir « ✓ Enregistré » en haut). Si l'application est fermée, le rapport est restauré à l'ouverture.
- **Nouveau rapport** efface le rapport en cours (avec confirmation) : exporter en Word avant.
- **Exporter en Word** : sur iPad / iPhone, toucher « Enregistrer / partager le .docx », puis « Enregistrer dans Fichiers » ou ouvrir dans Word.
- Pour la photo et la signature, « Prendre une photo » ouvre l'appareil photo.

## 4. Publier une mise à jour

1. Remplacer `index.html` dans le dépôt (**Add file > Upload files**, même nom).
2. Dans `sw.js`, changer la ligne `var V = "aai-rapport-v1";` en `v2`, `v3`… (sinon les tablettes gardent l'ancienne version).
3. Sur la tablette, ouvrir l'application **avec du réseau**, la fermer complètement et la rouvrir : la nouvelle version est active.
4. Si la structure des données change, augmenter aussi `SAVE_V` dans `index.html` : l'ancienne sauvegarde sera alors ignorée.

## 5. Sans hébergement

`index.html` fonctionne aussi seul (ouvert dans un navigateur) : export Word et sauvegarde automatique marchent, mais pas l'installation sur l'écran d'accueil.
