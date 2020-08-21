// Pour récupérer order mis dans localstorage au moment de la requete POST sur panier:
let order = JSON.parse(window.localStorage.getItem("order"));
//Pour récupérer prix total mis dans localstorage dans config et mis à jour sur panier
JSON.parse(window.localStorage.getItem("totalPrice"))

// si ajout ou retour au panier, plusieurs éléments dans prix total, donc faire boucle pour garder le dernier total:
while (totalPrice.length>=2)
{
    var first=totalPrice.shift();
}

const orderDescription = document.querySelector(".js-orderDescription")
const infoConfirm=document.createElement("h2");
const infoCommande=document.createElement("p");
const returnHome = document.querySelector(".js-backHome")

// Récupération de données API/GET, fonction faite dans request.js
// + ajout données en arguments
promiseGet('GET', openURL)
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
        `<h2>Il y a un problème avec votre commande</h2><p><a href="panier.html">Retour au panier</a></p>`
    }

    returnHome.addEventListener('click', (event) => 
    {
        event.preventDefault()
        returnHome.classList.add("alert","alert-warning")
        returnHome.innerHTML="Réinitialisation. Vous pouvez désormais passer une nouvelle commande"
        window.localStorage.clear()
        window.setTimeout(function () 
        {
            window.location = "index.html"
        }, 2000)
    })
})

.catch(function(ex) 
{
    console.error("erreur de données de confirmation")
})