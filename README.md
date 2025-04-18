# Gestion de Livres - Application CRUD

Une application de gestion de livres avec React et Express.

## Prérequis

- Node.js (v14 ou supérieur)
- MongoDB
- npm ou yarn

## Installation

1. Clonez le dépôt :
```bash
git clone [URL_DU_REPO]
cd [NOM_DU_REPO]
```

2. Installez les dépendances du frontend :
```bash
npm install
```

3. Installez les dépendances du backend :
```bash
cd backend
npm install
```

## Configuration

1. Assurez-vous que MongoDB est en cours d'exécution sur votre machine
2. Le backend se connecte à MongoDB sur `mongodb://localhost:27017/book-management`

## Démarrage

1. Démarrez le backend :
```bash
cd backend
npm run dev
```

2. Dans un autre terminal, démarrez le frontend :
```bash
npm start
```

3. L'application sera accessible à l'adresse : `http://localhost:3000`

## Fonctionnalités

- Liste des livres
- Ajout d'un nouveau livre
- Modification d'un livre existant
- Suppression d'un livre
- Interface utilisateur responsive

## Structure du Projet

```
├── backend/               # Serveur Express
│   ├── server.js         # Point d'entrée du serveur
│   └── package.json      # Dépendances du backend
├── src/                  # Code source React
│   ├── components/       # Composants React
│   ├── pages/           # Pages de l'application
│   └── App.js           # Composant principal
└── package.json         # Dépendances du frontend
```

## Déploiement sur GitHub

1. Créez un nouveau dépôt sur GitHub
2. Initialisez Git dans votre projet :
```bash
git init
```

3. Ajoutez les fichiers au suivi Git :
```bash
git add .
```

4. Faites votre premier commit :
```bash
git commit -m "Initial commit"
```

5. Liez votre dépôt local à GitHub :
```bash
git remote add origin [URL_DU_REPO_GITHUB]
```

6. Poussez votre code :
```bash
git push -u origin main
```

## Utilisation de Bruno pour tester l'API

1. Installez Bruno depuis [bruno.rest](https://www.bruno.rest/)
2. Importez le fichier de collection Bruno fourni dans le projet
3. Utilisez Bruno pour tester les endpoints de l'API :
   - GET /api/books
   - GET /api/books/:id
   - POST /api/books
   - PUT /api/books/:id
   - DELETE /api/books/:id 