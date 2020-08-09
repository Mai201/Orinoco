// récupérer item avec sessionStorage
// à gauche: afficher les items (par Id) avec localStorage du panier
// prendre depuis 1 seule variable

// à droite: afficher prix total
// faire formulaire de contact 
// avec form à respecter sur inputs en javascript

// si tout est valide, envoyer cet objet contact avec 
// prix total(à récupérer dans commande.js) 
// et produits commandés 
// avec ID de commande, (objet order id) à récupérer dans commande.js
// requete post avec /order 


// Récupération de données API (tableau GET/ faite dans request.js)

var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY

promiseGet()
.then(function(response)
{
    let chosenItems=document.querySelector(".js-chosenBasket");
    let totalContent=document.querySelector(".js-priceBasket");
    let totalPay = 0
    for (let i = 0; i < response.length; i += 1) 
    {
        for (let j = 0; j < userBasket.length; j += 1) 
        {
            if (userBasket[j][0] === response[i]._id) 
            {
                if (chosenItems) 
                {
                    chosenItems.innerHTML += `<li>${response[i].name}</li><li>${response[i].price / 100}</li><li>${
                    userBasket[j][2]
                    }</li><li>${userBasket[j][1]}</li><li>${(response[i].price / 100) * userBasket[j][1]}€</li>`
                    totalPay += (response[i].price / 100) * userBasket[j][1]
                }
            }
        }
    }
    if (totalPay >= 1) 
    {
        if (totalContent) 
        {
            totalContent.textContent = `Récapitulatif de votre commande d'un total de : ${totalPay}€`
        } else 
        {
            totalContent.textContent = "Vous n'avez pas d'article dans le panier actuellement"
        }
    }
})

.catch(function (error)
{
    alert("erreur total panier");
})




