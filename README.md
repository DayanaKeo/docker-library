# Bibliothèque Numérique

Ce projet est une application web de bibliothèque numérique qui permet d'ajouter, d'afficher et de filtrer des livres. L'application interagit avec une API pour gérer les livres et est conçue pour être déployée dans un environnement Docker.

## Fonctionnalités

- **Ajout de livres via une modale**  
  Un bouton "Ajouter un livre" ouvre une modale contenant un formulaire pour saisir les informations du livre (titre, introduction, auteur, genre).

- **Affichage des livres**  
  Les livres sont affichés sous forme de cartes avec leurs informations détaillées.

- **Filtrage par genre**  
  Un menu déroulant (`<select>`) permet de filtrer les livres affichés selon leur genre.

- **Suppression de livres**  
  Chaque carte de livre possède un bouton de suppression pour retirer le livre de la liste.

## Prérequis

- **Docker**  
  Assurez-vous d'avoir Docker installé sur votre machine pour pouvoir construire et exécuter l'image du projet.

- **API Backend**  
  Le projet s'appuie sur une API qui expose les endpoints suivants :
  - `GET /api/books` : Récupérer la liste de tous les livres.
  - `POST /api/books` : Ajouter un nouveau livre.
  - `DELETE /api/books/:id` : Supprimer un livre en fonction de son ID.

## Installation et exécution avec Docker

1. **Cloner le dépôt**

   ```terminal
   git clone https://github.com/DayanaKeo/docker-library.git
   cd docker-library
   ```

2. **Construire l'image Docker**

   ```terminal
   docker build -t bibliotheque-numerique .
   ```

3. **Exécuter le conteneur Docker**

   ```bash
   docker run -p 3000:3000 bibliotheque-numerique
   ```

   Vous pouvez ensuite accéder à l'application via [http://localhost:3000](http://localhost:3000).

## Structure des fichiers

- **index.html**  
  Contient la structure HTML de l'application, incluant le bouton d'ouverture de la modale, la modale avec le formulaire d'ajout, le sélecteur de genre et la zone d'affichage des livres.

- **style.css**  
  Feuille de style pour la mise en forme de l'application (styles de la modale, des cartes de livres, etc.).

- **script.js**  
  Fichier JavaScript qui gère :
  - Le chargement des livres depuis l'API.
  - L'affichage des livres sous forme de cartes.
  - Le filtrage des livres par genre via le `<select>`.
  - La gestion de la modale (ouverture, fermeture et soumission du formulaire d'ajout).
  - La suppression des livres.

## API Endpoints

- **GET** `/api/books`  
  Récupère la liste de tous les livres.

- **POST** `/api/books`  
  Ajoute un nouveau livre. Le corps de la requête doit être au format JSON et inclure les champs suivants :
  - `titre`
  - `intro`
  - `auteur`
  - `genre`

- **DELETE** `/api/books/:id`  
  Supprime le livre correspondant à l'ID spécifié.

## Utilisation de l'application

1. **Ajouter un livre**  
   Cliquez sur le bouton **"Ajouter un livre"** pour ouvrir la modale. Remplissez le formulaire et soumettez-le. Le livre sera ajouté via l'API et la modale se fermera automatiquement.

2. **Filtrer par genre**  
   Utilisez le menu déroulant pour sélectionner un genre. Seuls les livres correspondant au genre sélectionné seront affichés. Choisir "Tous les genres" réaffichera l'ensemble des livres.

3. **Supprimer un livre**  
   Cliquez sur le bouton **"Supprimer"** présent sur chaque carte de livre pour le retirer de la liste.

## Contribution

Les contributions sont les bienvenues !  
Si vous souhaitez proposer des améliorations ou signaler des problèmes, veuillez ouvrir une issue ou soumettre une pull request.

## Licence

Ce projet est sous licence [MIT](LICENSE).

