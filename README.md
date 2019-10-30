# Checkpoint n°2 - 4h

Pour ce travail tu as 4h devant toi. Ce checkpoint n'est pas un examen, il va nous permettre de valider tes compétences, essaye donc de le faire au maximum de ton côté.
Ce checkpoint est très consistant, si tu n'arrives pas à tout faire ce n'est pas grave, fais de ton mieux ;)

## !!! PREMIERE ÉTAPE OBLIGATOIRE AVANT DE COMMENCER LE PREMIER EXERCICE !!!

- Clone ce projet
- Crée une branche `ville_nom_prenom`, qui va contenir ton avancée. Remplace `ville_nom_prenom` par la ville de ton campus, ton nom et ton prénom.

## Étape 1 - Quiz

- Pour répondre au quiz rend toi sur [cette application](http://checkpoint-quiz.campus-bordeaux.ovh/).
- Réponds aux questions du Quiz **Checkpoint 2 - JS**
- Une fois le quiz terminé, copie le lien fourni par l'application
- Crée un fichier Quiz.md à la racine du projet
- Colles-y le lien que tu viens de récupérer
- `commit` ton fichier

## Étape 2 - React

<img src="https://giphygifs.s3.amazonaws.com/media/14hVsVZomE4hj2/giphy.gif" height="150">

Dans cette étape, tu vas créer un nouveau projet React dans lequel il y aura 2 composants qui afficheront des données provenant d'une API.

L'API est accessible sur cette url [https://wild-games.herokuapp.com/api/v1](http://www.campus-bordeaux.ovh:3002/joysticks/api/games).
Tu peux utiliser au choix [axios](https://github.com/axios/axios) ou [fetch](https://developer.mozilla.org/fr/docs/Web/API/Fetch_API/Using_Fetch) pour récupérer les données.

Pense bien à `commit` régulièrement avec un message explicite. Par exemple : `"Create GameList and Game components"`.

- Crée un nouveau projet React nommé **list-games** grâce à `create-react-app`.
- Crée 2 composants `<GameList />` et `<Game />`.
- `<GameList />` récupère les jeux de l'API et  les affiche dans autant de composants `<Game />`.
- `<Game />` récupère avec des `props` les informations de chaque jeu (`titre`, `description`, `image`…) et les affiche au format de ton choix.
- `<Game />` contient un `<button>` qui permet au click de supprimer un jeu du `state`. _Il n'y a pas besoin de le supprimer de l'API._

## Étape 3 - Bonus

Il te reste du temps ? Parfait ! Tu vas pouvoir ajouter quelques fonctionnalités utiles à ton projet React !

### Filtrer les jeux affichés par thème

- Ajoute un `<select>` qui contient la liste des thèmes
- Quand le thème sélectionné change, affiche uniquement les jeux de ce thème

### Ajouter une page de promotion

Pour ce bonus, utilise la librairie `react-router`.

- Ajoute un lien de navigation dans chaque jeu pour voir la promo. 
- Cliquer sur ce lien change la page pour `http://localhost:3000/jeu/promo/5` ou 5 est l'id du jeu selectionné.
- Sur cette page, affiche l'image de `promo` et/ou la vidéo de `trailer`.
- Affiche également un lien de navigation permettant de revenir sur la page d'accueil.

## Étape 4 - Félicitations !

Tu peux aller te désaltérer à la brasserie, tu l'as amplement mérité !

**N.B. : Tu ne dois pas commencer par cette étape… ;)**

![Good Luck](https://media.giphy.com/media/AC1PtbdsJZyOQ/giphy.gif)
