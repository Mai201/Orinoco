// Récupération de données API (tableau GET/ faite dans request.js)
var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY


//html : dans fichier html

// Affectation des données sur page d'accueil

promiseGet()
    .then(function(response) 
    {
        for (let i=0;i<response.length;i++) 
        {
            let items=document.querySelector(".js-allArticlesByCategory");
            items.innerHTML+=`
            <li class="list-cards-item">
                <img class="card-img-top" src="${response[i].imageUrl}">
                <div class="card-body">
                    <h3 class="card-title">Appareil photo ${response[i].name}</h3>
                    <p class="card-text">Prix: ${response[i].price/100}€ </br>
                    Lentilles disponibles: ${response[i].lenses.join('  –  ')}</br></br>
                    Description du produit: ${response[i].description}</p>
                    <div class="card-button">
                        <a class="btn btn-primary" href="p-produit.html?id=${response[i]._id}" aria-label="Sélectionner l’appareil photo">Sélectionner le modèle ${response[i].name}</a>
                    </div>
                </div>
            </li>`;
        }
    })

    .catch(function (error)
    {
        alert("erreur affectation réponse");
    })
