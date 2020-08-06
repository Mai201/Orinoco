// nouvelle variable pour GET, pour récupérer les éléments par Id (des app photos, ici)
var GET_choice=`${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ID}`

// Affectation des données sur page produit

promiseGet()
.then(function(response)
{
    console.log(`response GetArticleById():${response}`)
    let items=document.querySelector(".js-chosen-article");
        items.innerHTML=`
        <li class="list-cards-item">
        <img class="card-img-top" src="${response.imageUrl}">
        <div class="card-body">
            <h3 class="card-title">Appareil photo ${response.name}</h3>
            <p class="card-text">Prix: ${response.price/100}€ </br>
            Lentilles disponibles: ${response.lenses.join('  –  ')}</br></br>
            Description: ${response.description}</br></br>
            Choix de la lentille: (menu déroulant pour choix)</p>
            <div class="card-button">
               <a class="btn btn-primary" href="panier.html" aria-label="Ajouter dans le panier">Ajouter dans le panier</a>
            </div>
        </div>
        </li>`;
        
})

.catch(function (error)
{
    alert("erreur affectation réponse");
})


// Reste à faire: 
// menu déroulant pour choix des lentilles
// choix de la quantité d'appareils photos commandés



// bouton pour ajouter dans le panier = sessionStorage pour envoyer dans panier
// enregistrer dans variable du json (stringify)
