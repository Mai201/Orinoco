// Récupération de données API (tableau GET/ faite dans request.js)
var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY

let order = JSON.parse(window.localStorage.getItem("order"));
console.log(order);
console.log(confirmShoppingCart);

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
        orderDescription.appendChild(infoCommande).innerHTML="Récapitulatif de la commande: </br> Numéro de commande: <strong>"+ order["orderId"] +"</strong> </br> Montant total : <strong> € </strong> </br> Un message de confirmation, avec les informations de commande et le détail, vous a été envoyé à l'adresse mail suivante: <strong>"+confirmShoppingCart[0].email+"</strong>"
        //+totalPay+
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