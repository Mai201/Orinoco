# Orinoco #

This is the back end server for Project 5 of the Junior Web Developer path.

### Prerequisites ###

You will need to have Node and `npm` installed locally on your machine.

### Installation ###

Clone this repo. From within the project folder, run `npm install`. You 
can then run the server with `node server`. 
The server should run on `localhost` with default port `3000`. If the
server runs on another port for any reason, this is printed to the
console when the server starts, e.g. `Listening on port 3001`.

### Plan de tests ###

| Lieu page html | Action | Attendu | R‚sultat |
|-|-|-|-|
| index.html | Se rendre sur la page principale | Envoi GET et voir tous les articles, avec les details | Si erreur, console.error se declenche affectation reponse |
| p-produit.html | Se rendre sur la page d article choisi | Envoi GET et voir article et Id dans URL avec details | Si erreur, console.error se declenche affectation article |
| p-produit.html | Voir les lentilles dispo | Envoi GET et voir la liste par article, avec details des lentilles | Si erreur, console.error se declencheÿboucle des lentilles |
| p-produit.html | Selectionner lentille | Non fonctionnel /cahier des charges | Non fonctionnel /cahier des charges |
| p-produit.html | Ajout d un article | incrementation dans quantite | Si erreur, console.error ajout dans panier |
|  |  | Ajout d un tableau |  |
|  |  | Ajout dans local storage |  |
| p-produit.html | Suppression d un article | decrementation dans quantite | Si erreur, console.error suppression dans panier |
|  |  | Suppression d un tableau |  |
|  |  | Suppression dans local storage |  |
| panier.html | Voir le panier | Voir les articles ajoutes, tout produit confondu | Si erreur, console.error total panier |
|  |  | Voir quantite et prix total | Si panier vide, alerte Bootstrap panier vide, formulaire de commande desactive |
|  |  | Dans tableau mais aussi dans tableau |  |
| panier.html | Vider le panier | Tous les articles sont supprimes et local storage reinit | Alerte Bootstrap panier vide, formulaire de commande desactive |
| panier.html | Valider formulaire | Formulaire n est pas valide tant que tous les champs obligatoires ne sont pas remplis | Alerte Bootstrap veuillez renseigner ce champ |
| panier.html | Validation commande | Envoi est desactive tant que les champs ne sont pas remplis correctement regex | Alerte Bootstrap sur ‚l‚ment … renseigner correctement |
|  |  |  | Si erreur, console.errorÿerreur dans le formulaire, pas d?envoi |
| panier.html | Validation commande | Envoi requete POST est fait, et redirection sur page de remerciement | Si erreur, console.error requˆte promise |
|  |  |  | Si tout est ok, alerte Bootstrap Votre commande a bien ‚t‚ prise en compte Merci de patienter |
| commande.html | Commande validee | recuperer et afficher Id de commande et prix total | Si erreur, console.errorÿerreur de donnees de confirmation |