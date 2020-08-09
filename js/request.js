// Récupération de données API (tableau GET/)

function promiseGet() 
{
    return new Promise((resolve, reject)=> 
    {
        const request= new XMLHttpRequest();
        request.open("GET", GET_choice);
        // NB: variable GET_choice à modifier pour chaque page, permet d'éviter répétition requete HTTP
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

// Récupération de l'ID pour caméras (GET/_ID)
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


// création de l'objet users
const USERS = {
    firstName: 'Pierre',
    lastName: 'Dupont',
    address: 'Place Tabareau',
    city: 'Lyon',
    email: 'pierre-dupont@gmail.com'
  }


// création API_URL pour pouvoir éviter répétition des requetes HTTP, car composant de GET_choice
const API_URL=
{
    _HOST:"http://localhost:3000/",
    _DIR:"api/",
    _CATEGORY: categories.cat1,
    _ID:ID_URL,
    _ORDER:"order"
}

const ORDER_ID = Math.round(Math.random() * 9654782366987)

// Envoi données POST/_ORDER

//   function promisePost() 
//   {
//       return new Promise((resolve, reject)=> 
//       {
//           const request= new XMLHttpRequest();
//           request.open("POST", GET_choice);
//           request.setRequestHeader('Content-Type', 'application/json')
//           request.send("order");
//           request.onreadystatechange = function() 
//           {
//               if (this.readyState === XMLHttpRequest.DONE) 
//               {
//                 if (this.status ===200)
//                 {
//                     resolve(JSON.parse(this.responseText)) 
//                 } else 
//                 {
//                     reject(XMLHttpRequest);
//                     alert("erreur POST");
//                 }
//               }
//           }
//       })
//   };