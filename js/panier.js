// Récupération de données API (tableau GET/ faite dans request.js)

// const { request } = require("express");
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

    // ajout d'un bouton pour vider le panier
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



// envoi POST, order, et formulaire à vérifier avant envoi, si quelque chose dans le panier
if (userBasket.length>=1)
{
// Récupération de config POST (/ORDER dans request.js)

  var GET_choice = `${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ORDER}`
  console.log(`POST_URL :${GET_choice}`)


  // constantes pour récup éléments du DOM
  const familyName = document.querySelector('.js-familyName')
  const givenName = document.querySelector('.js-givenName')
  const email = document.querySelector('.js-email')
  const address = document.querySelector('.js-address')
  const addressCity = document.querySelector('.js-addressCity')
  const submitForm = document.querySelector('.js-submitForm')

  let contact= 
        {
          firstName:givenName.value,
          lastName: familyName.value,
          address: address.value,
          city:addressCity.value,
          email:email.value,
        }

  submitForm.addEventListener('click', event => 
  {
    event.preventDefault()

    alert("Votre commande a bien été prise en compte! Merci de patienter")
          
    confirmShoppingCart.push([ORDER_ID, contact, userBasket])
    // userBasket.clear();

    if (window.localStorage.getItem('confirmShoppingCart', JSON.stringify(confirmShoppingCart)) !== null) 
    {
      window.localStorage.setItem('confirmShoppingCart', JSON.stringify(confirmShoppingCart))
    }
    if (window.localStorage.getItem('userBasket', JSON.stringify(userBasket)) !== null) 
    {
      window.localStorage.setItem('userBasket', JSON.stringify(userBasket))
    }

    window.setTimeout(() => 
    {
    window.location = 'commande.html'
    }, 2000)
  })

  var order= JSON.stringify(confirmShoppingCart);
  // enlever le nombre d'éléments pour transmettre seulement l'ID ? 
  console.log(order);
    
  const createOrder = () => 
  {
  // Requete POST
    promisePost()
    .then(function(response) 
    {
      console.log(`response 'POST' ? ${response}`)
      // TODO request POST
    })
    .catch(function(ex) 
    {
      console.error(`erreur requete post : ${JSON.stringify(ex)}`)
    })
  }
} else 
{
  alert("panier vide, commande impossible");
}
