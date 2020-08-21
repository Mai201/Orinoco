// Récupération de données API (tableau GET/)

function promiseGet(...args) 
{   const request= new XMLHttpRequest();
    request.open(...args);
    // NB: arguments à modifier pour chaque page, permet d'éviter répétition requete HTTP
    request.send();

    return new Promise((resolve, reject)=> 
    {
        
        request.onreadystatechange = function() 
        {
            if (this.readyState === XMLHttpRequest.DONE) 
            {
                if (this.status ===200)
                {
                   resolve(JSON.parse(this.responseText)) 
                   var response = JSON.parse(this.responseText);
                //    console.log(response);
                } else 
                {
                    reject(XMLHttpRequest);
                    console.error("erreur GET");
                }
            }
        }
    })
};

// Récupération de l'ID pour caméras (GET/_ID)

// Pour mémoire: 
// new URL(location.href).searchParams.get("year")
// Returns 2008 for href = "http://localhost/search.php?year=2008".
//  Or in two steps:
// const params = new URL(location.href).searchParams;
// const year = params.get("year");

// pour chercher la partie de l'URL qui suit le symbole "?"
const idUrl= window.location.search
// Pour paramétrer objet URLSearchParams
const idCameras= new URLSearchParams(idUrl)
// pour retourner valeur associée au paramètre donné
const ID_URL=idCameras.get("id")

const categories=
{
    cat1:"cameras",
    cat2:"teddies",
    cat3:"furniture"
}


// création API_URL pour pouvoir éviter répétition des requetes HTTP
const API_URL=
{
    _HOST:"http://localhost:3000/",
    _DIR:"api/",
    _CATEGORY: categories.cat1,
    _ID:ID_URL,
    _ORDER:"order"
}

// création de 3 constantes pour éviter répitition requetes HTTP (données => arguments fonction)
//requete URL de base (requete GET)
const openURL=API_URL._HOST+API_URL._DIR+API_URL._CATEGORY
//requete URL avec ID (requete GET)
const openURL_ID=API_URL._HOST+API_URL._DIR+API_URL._CATEGORY+"/"+API_URL._ID
//requete URL avec order (requete POST)
const openURL_ORDER=API_URL._HOST + API_URL._DIR + API_URL._CATEGORY+"/"+API_URL._ORDER


// fonction promisePost présente 1 seule fois, pas de répétition, donc directement présente dans panier.js