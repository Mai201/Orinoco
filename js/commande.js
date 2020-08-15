// Récupération de données API (tableau GET/ faite dans request.js)
var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY

// Pour récupérer order mis dans localstorage au moment de la requete POST sur panier:
let order = JSON.parse(window.localStorage.getItem("order"));
//Pour récupérer prix total mis dans localstorage dans config et mis à jour sur panier
JSON.parse(window.localStorage.getItem("totalPrice"))
console.log(totalPrice.length);

// si ajout ou retour au panier, plusieurs éléments dans prix total, donc faire boucle pour garder le dernier total:
while (totalPrice.length>=2)
{
    var first=totalPrice.shift();
}

console.log(totalPrice);

const orderDescription = document.querySelector('.js-orderDescription')
const infoConfirm=document.createElement("h2");
const infoCommande=document.createElement("p");
const returnHome = document.querySelector('.js-backHome')

promiseGet()
.then(function(response)
{

    if (confirmShoppingCart !== null) 
    {
        orderDescription.appendChild(infoConfirm).innerHTML="Votre commande a bien été validée, Mme/M. "+ confirmShoppingCart[0].firstName + " " + confirmShoppingCart[0].lastName 
        orderDescription.appendChild(infoCommande).innerHTML="Récapitulatif de votre achat: </br> Identifiant de commande: <strong>"+ order["orderId"] +"</strong> </br> Montant total de cet achat : <strong>"+totalPrice+" € </strong>"
        "</strong>"
    } else 
    {
        orderDescription.innerHtml +=
        '<h2>Il y a un problème avec votre commande</h2><p><a href="panier.html">Retour au panier</a></p>'
    }

    returnHome.addEventListener('click', (event) => 
    {
        event.preventDefault()
        alert("Attention, les données de commande vont être effacées")
        window.localStorage.clear()
        window.setTimeout(function () 
        {
            window.location = 'index.html'
        }, 2000)
    })
})

.catch(function(ex) 
{
    console.log(`erreur de données de confirmation : ${JSON.stringify(ex)}`)
})