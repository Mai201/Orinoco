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
                    alert("erreur");
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
            items.innerHTML=`
            <li class="list-cards-item">
                <img class="card-img-top" src="#">
                <div class="card-body">
                    <h3 class="card-title">Nom de la caméra</h3>
                    <p class="card-text">Prix </br>
                    Description</p>
                    <div class="card-button">
                        <a class="btn" href="p-produit.html" aria-label="Sélectionner l’appareil photo XXX">Sélectionner</a>
                    </div>
                </div>
            </li>`;
            // console.log(response[i].imageUrl)
        }
    })

    .catch(function (error)
    {
        alert("erreur réponse");
    })
