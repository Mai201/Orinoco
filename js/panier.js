// Récupération de données API (tableau GET/ faite dans request.js)

// const { request } = require("express");
var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY

promiseGet()
.then(function(response)
{
  const totalContent=document.querySelector(".js-priceBasket");
  let totalPay = 0

  for (let e = 0; e < response.length; e ++) 
  {
    for (let f = 0; f < userBasket.length; f ++) 
    {
      const chosenItems=document.querySelector(".js-chosenBasket");
      const dataItems=document.createElement("tr");
      const dataTd1=document.createElement("td");
      const dataTd2=document.createElement("td");
      const dataTd3=document.createElement("td");
      const dataTd4=document.createElement("td");

      if (userBasket[f][0] === response[e]._id) 
      {
        chosenItems.appendChild(dataItems).appendChild(dataTd1).innerHTML += response[e]["name"];
        chosenItems.appendChild(dataItems).appendChild(dataTd2).innerHTML += response[e]["price"] / 100 +"€";
        chosenItems.appendChild(dataItems).appendChild(dataTd3).innerHTML += userBasket[f][2]+"(NC)";
        chosenItems.appendChild(dataItems).appendChild(dataTd4).innerHTML += userBasket[f][1];
                    
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

    totalPrice.push(totalPay)
    console.log(totalPrice)
    if (window.localStorage.getItem('totalPrice', JSON.stringify(totalPrice)) !== null) 
    {
    window.localStorage.setItem('totalPrice', JSON.stringify(totalPrice))
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
    removeArticle.addEventListener("click", function (e) 
    {
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
  // constantes pour récup éléments du DOM
  const familyName = document.querySelector('.js-familyName')
  const givenName = document.querySelector('.js-givenName')
  const email = document.querySelector('.js-email')
  const address = document.querySelector('.js-address')
  const addressCity = document.querySelector('.js-addressCity')
  const submitForm = document.querySelector('.js-submitForm')

  console.log(userBasket);

  submitForm.addEventListener('click', event => 
  {
    event.preventDefault()

    let contact= 
    {
      firstName:givenName.value,
      lastName: familyName.value,
      address: address.value,
      city:addressCity.value,
      email:email.value,
    }

    console.log(userBasket)
    let products = [];
    
            for (f = 0; f < userBasket.length; f++) 
            {
                let article = userBasket[f][0]

                products.push(article);
            }

    console.log(products);

    // Récupération de config POST (/ORDER dans request.js)

    var GET_choice = `${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ORDER}`
    console.log(`POST_URL :${GET_choice}`)

    let objet = {
      contact,
      products
    };
    
    let order= JSON.stringify(objet);
    console.log(order);

    // Requete POST
    promisePost()
      .then(function(response) 
      {
        console.log(`response 'POST' ? ${response}`)
        alert("lire la reponse promise")
      })
      .catch(function(ex) 
      {
        alert(`erreur requete promise : ${JSON.stringify(ex)}`)
      })
    

    
    alert("Votre commande a bien été prise en compte! Merci de patienter")

    confirmShoppingCart.push(contact, products)


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


} else 
{
  alert("panier vide, commande impossible");
}
