// nouvelle variable pour GET, pour récupérer les éléments par Id (des app photos, ici)
var GET_choice=`${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ID}`

// Affectation des données sur page produit

promiseGet()

// .then(function(response)
// {
//     for (let j = 0; j < response.lenses.length; j ++) {
//         let option=document.querySelector(".dropdown-item");
//         option.innerHTML+=`lentilles: ${response.lenses[j]}`
//       }
// })

.then(function(response)
{
    console.log(`response GetArticleById():${response}`)
    let items=document.querySelector(".js-chosen-article");
    items.innerHTML=`
    <li class="list-cards-item">
    <img class="card-img-top" src="${response.imageUrl}">
    <div class="card-body">
        <h3 class="card-title">Appareil photo ${response.name}</h3>
        <p class="card-text">Prix: ${response.price/100}€ </br></br>
        Description: ${response.description}</br></br></p>
        <div class="dropdown">
            <button class="btn btn-secondary dropdown-toggle" type="button" data-toggle="dropdown">
            Choix de la lentille:
            </button>
            <div class="dropdown-menu">
            </div>
        </div></br>
        <div class="card-button">
            <a class="btn btn-primary" href="panier.html" aria-label="Ajouter dans le panier">Ajouter dans le panier</a>
        </div>
    </div>
    </li>`

    // menu déroulant pour choix des lentilles
    try
        {
            for (let j = 0; j < response.lenses.length; j++) 
            {
                let option=document.querySelector(".dropdown-menu");
                option.value = response.lenses[j];
                console.log(j);
                console.log(response.lenses[j]);
                option.innerHTML+=`<a class="dropdown-item" >lentille: ${response.lenses[j]}</a>`
            }
        } catch (error)
        {
            alert("erreur boucle des lentilles");
        }
})

.catch(function (error)
{
    alert("erreur affectation réponse");
})


// Reste à faire: 
// choix de la quantité d'appareils photos commandés



// bouton pour ajouter dans le panier = sessionStorage pour envoyer dans panier
// enregistrer dans variable du json (stringify)
