// Récupération de l'ID pour caméras
// Pour mémoire: 
// new URL(location.href).searchParams.get('year')
// Returns 2008 for href = "http://localhost/search.php?year=2008".
//  Or in two steps:
// const params = new URL(location.href).searchParams;
// const year = params.get('year');

// pour chercher la partie de l'URL qui suit le symbole "?"
const idUrl= window.location.search
// Pour paramétrer objet URLSearchParams
const idCameras= new URLSearchParams(idUrl)
// pour retourner valeur associée au paramètre donné
const ID_URL=idCameras.get('id')

const categories=
{
    cat1:'cameras',
    cat2:'teddies',
    cat3:'furniture'
}

// création API_URL et GET_URL pour automatiser et préparer mise en place de POST/order 
const API_URL=
{
    _HOST:"http://localhost:3000/",
    _DIR:"api/",
    _CATEGORY: categories.cat1,
    _ID:ID_URL,
    // _ORDER:"order" => à faire ensuite pour request "POST"
}

const GET_URL=`${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ID}`


// promesse pour récupérer les éléments par Id (des app photos, ici)
function promiseGetArticleById() 
{
    return new Promise((resolve, reject)=> 
    {
        const request= new XMLHttpRequest();
        request.open("GET", GET_URL);
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

// Affectation des données sur page produit

promiseGetArticleById()
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
