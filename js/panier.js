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
                chosenItems.innerHTML += `
                <td>${response[e].name} </td>
                <td>${response[e].price / 100} € </td>
                <td>${userBasket[f][2]}(NC) </td>
                <td>${userBasket[f][1]} </td>
                <td>${(response[e].price / 100) * userBasket[f][1]}€ </td>`
                    
                totalPay += (response[e].price / 100) * userBasket[f][1]
            }
        }
    }

    if (totalPay >= 1) 
    {
        totalContent.textContent = `Récapitulatif de votre commande d'un total de : ${totalPay}€`
    } else 
    {
        totalContent.textContent = "Vous n'avez pas d'article dans le panier actuellement"
    }

    // ajout d'un bouton pour vider la panier
    let divRemoveArticle = document.querySelector(".removeArticle");
    divRemoveArticle.classList.add("row");
    let removeArticle = document.createElement("a");
    removeArticle.classList.add("btn", "btn-primary", "btn-top");
    removeArticle.type="button";
    removeArticle.href="panier.html";
    removeArticle.classList.add = ""
    divRemoveArticle.appendChild(removeArticle).innerHTML+="Vider le panier";
    removeArticle.addEventListener("click", function (e) {
        localStorage.clear()
    })

})

.catch(function (error)
{
    alert("erreur total panier");
})




