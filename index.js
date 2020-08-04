// Récupération de données API

function promiseGet() 
{
    return new Promise((resolve, reject)=> 
    {
        const request= new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/api/cameras");
        request.send();
        request.onreadystatechange = function() 
        {
            if (this.readyState === XMLHttpRequest.DONE) 
            {
                if (this.status ===200)
                {
                   resolve(JSON.parse(this.responseText)) 
                   var response = JSON.parse(this.responseText);
                   console.log(response);
                } else 
                {
                    reject(XMLHttpRequest);
                    alert("erreur GET");
                }
            }
        }
    })
};

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
                    Lentilles: ${response[i].lenses.join('  –  ')}</br>
                    ${response[i].description}</p>
                    <div class="card-button">
                        <a class="btn btn-primary" href="p-produit.html" aria-label="Sélectionner l’appareil photo">Sélectionner le modèle ${response[i].name}</a>
                    </div>
                </div>
            </li>`;
        }
    })

    .catch(function (error)
    {
        alert("erreur affectation réponse");
    })
