// Ici, récupérer ID de commande + montant total 
// et les afficher 


// Récupération de données API (tableau GET/ faite dans request.js)
var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY

const orderDescription = document.querySelector('.js-orderDescription')
const infoConfirm=document.createElement("h2");
const infoCommande=document.createElement("p");
const returnHome = document.querySelector('.js-backHome')

promiseGet()
.then(function(response)
{

    if (confirmShoppingCart !== null) 
    {
        console.log(confirmShoppingCart)
        orderDescription.appendChild(infoConfirm).innerHTML="Votre commande a bien été validée";
        orderDescription.appendChild(infoCommande).innerHTML="Encore merci pour votre commande n° <strong>"+confirmShoppingCart[0][0]+"</strong> </br> d'un montant total de : <strong></strong>"
    } else 
    {
        orderDescription.innerHtml +=
        '<h2>Il y a un problème avec votre commande</h2><p><a href="panier.html">Retour au panier</a></p>'
    }

    returnHome.addEventListener('click', (event) => 
    {
        event.preventDefault()
        window.localStorage.clear()
        window.setTimeout(function () 
        {
            window.location = 'index.html'
        }, 2000)
    })
})

.catch(function(ex) 
{
    console.log(`Page error orderPlacedJS : ${JSON.stringify(ex)}`)
})