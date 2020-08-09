// Récupération de données API (tableau GET/ faite dans request.js)

var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY

promiseGet()
.then(function(response)
{
    const chosenItems=document.querySelector(".js-chosenBasket");
    const totalContent=document.querySelector(".js-priceBasket");
    let totalPay = 0

    for (let e = 0; e < response.length; e ++) 
    {
        for (let f = 0; f < userBasket.length; f ++) 
        {
            if (userBasket[f][0] === response[e]._id) 
            {
                if (chosenItems) 
                {
                    chosenItems.innerHTML += `
                    <td>${response[e].name} </td>
                    <td>${response[e].price / 100} € </td>
                    <td>${userBasket[f][2]} </td>
                    <td>${userBasket[f][1]} </td>
                    <td>${(response[e].price / 100) * userBasket[f][1]}€ </td>`
                    
                    totalPay += (response[e].price / 100) * userBasket[f][1]
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




