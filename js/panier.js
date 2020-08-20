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
  console.error("erreur total panier");
})


// constante pour récup élément du DOM
const form=document.querySelector('.form');

// envoi POST, order, et formulaire à vérifier avant envoi, si quelque chose dans le panier
if (userBasket.length>=1)
{
  const formInfo=document.createElement('div');
  formInfo.classList.add('form-info');
  const legendInfo=document.createElement('legend');
  const labelFamilyName=document.createElement('label')
  const familyName = document.createElement('input');
  familyName.classList.add('js-familyName', 'form-control')
  let helpForm=document.createElement('div')
  helpForm.classList.add('text-center')
  familyName.required=true;
  familyName.name="Nom de famille"
  familyName.id="familyName"
  familyName.type="text"
  familyName.placeholder="Minuscule ou majuscule"

  form.appendChild(formInfo).appendChild(legendInfo).innerHTML="Formulaire à remplir pour passer commande :"
  form.appendChild(formInfo).appendChild(labelFamilyName).innerHTML="Nom de famille :"
  form.appendChild(formInfo).appendChild(familyName)

  const labelGivenName=document.createElement('label')
  const givenName = document.createElement('input');
  givenName.classList.add('js-givenName', 'form-control')
  givenName.required=true;
  givenName.name="Prénom"
  givenName.id="givenName"
  givenName.type="text"
  givenName.placeholder="Minuscule ou majuscule"

  form.appendChild(formInfo).appendChild(labelGivenName).innerHTML="Prénom :"
  form.appendChild(formInfo).appendChild(givenName)

  const labelEmail=document.createElement('label')
  const email = document.createElement('input');
  email.classList.add('js-email', 'form-control')
  email.required=true;
  email.name="Adresse e-mail"
  email.id="email"
  email.type="email"
  email.placeholder="adresse@domaine.fr"

  form.appendChild(formInfo).appendChild(labelEmail).innerHTML="Adresse e-mail :"
  form.appendChild(formInfo).appendChild(email)

  const labelAddress=document.createElement('label')
  const address = document.createElement('input');
  address.classList.add('js-address', 'form-control')
  address.required=true;
  address.name="Adresse"
  address.id="address"
  address.type="text"
  address.placeholder="Minuscule ou majuscule"

  form.appendChild(formInfo).appendChild(labelAddress).innerHTML="Adresse :"
  form.appendChild(formInfo).appendChild(address)

  const labelAddressCity=document.createElement('label')
  const addressCity = document.createElement('input');
  addressCity.classList.add('js-addressCity', 'form-control')
  addressCity.required=true;
  addressCity.name="Ville"
  addressCity.id="addressCity"
  addressCity.type="text"
  addressCity.placeholder="Minuscule ou majuscule"


  form.appendChild(formInfo).appendChild(labelAddressCity).innerHTML="Ville : "
  form.appendChild(formInfo).appendChild(addressCity)

  const commandForm=document.createElement('div')
  commandForm.classList.add('row', 'col')
  const submitForm = document.createElement('button');
  submitForm.classList.add('js-submitForm', 'btn', 'btn-primary', 'col-4')
  submitForm.type="submit"

  form.appendChild(formInfo).appendChild(commandForm).appendChild(submitForm).innerHTML="Confirmer"

  const resetForm=document.createElement('button')
  resetForm.classList.add('js-resetForm', 'btn','btn-danger','offset-4','col-4')
  resetForm.type="reset"

  form.appendChild(formInfo).appendChild(commandForm).appendChild(resetForm).innerHTML="Supprimer"

  //création de fonctions pour vérifier validité des champs à l'envoi, avec regex

  function validityOk(value)
  {
    return /^[A-Z-a-z]{3,40}$/.test(value); 
  }

  function validEmail(value)
  {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
  }
  function validAddress(value)
  {
    return /^[A-Z-a-z-0-9\s]{8,40}$/.test(value)
  }

  function validCity(value)
  {
    return /^[A-Z-a-z-\s]{3,40}$/.test(value)
  }

  form.addEventListener('submit', event => 
  {
    if (validityOk(familyName.value) && validityOk(givenName.value))
    {
    } else
    {
      form.appendChild(helpForm);
      helpForm.classList.add('alert', 'alert-info');
      helpForm.role="alert";
      helpForm.innerHTML=`Nom et prénom: seuls les caractères alpha sont autorisés`
      event.preventDefault()
    }   
    if (validEmail(email.value))
    {
    } else
    {
      form.appendChild(helpForm);
      helpForm.classList.add('alert', 'alert-info');
      helpForm.role="alert";
      helpForm.innerHTML=`Adresse mail incorrecte`
      event.preventDefault()
    }
    if(validAddress(address.value))
    {
    } else
    {
      form.appendChild(helpForm);
      helpForm.classList.add('alert', 'alert-info');
      helpForm.role="alert";
      helpForm.innerHTML=`Adresse incorrecte, minimum 8 caractères`
      event.preventDefault()
    }
    if(validCity(addressCity.value))
    {
    } else
    {
      form.appendChild(helpForm);
      helpForm.classList.add('alert', 'alert-info');
      helpForm.role="alert";
      helpForm.innerHTML=`Ville incorrecte, minimum 3 caractères`
      event.preventDefault()
    }


    if (validityOk(familyName.value) && validityOk(givenName.value) && validEmail(email.value) && validAddress(address.value) && validCity(addressCity.value)) 
    
    {
      event.preventDefault();

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
          
          
      function promisePost() 
          {
            return new Promise((resolve, reject)=> 
            {
              const request= new XMLHttpRequest();
              request.open("POST", GET_choice);
              request.setRequestHeader('Content-Type', 'application/json')
              //NB: const order à définir dans panier.js, avec objet contact et tableau products
              request.send(order);
              request.onreadystatechange = function() 
              {
                if (this.readyState === XMLHttpRequest.DONE) 
                {
                  if (this.status >=200 && this.status<300)
                  {
                    resolve(JSON.parse(this.responseText));
                    var response = JSON.parse(this.responseText);
                    console.log(response);
                    console.error("lire la réponse avec l'orderId")
                    window.localStorage.setItem("order", this.responseText)
                  } else 
                  {
                    reject(XMLHttpRequest);
                    console.error("erreur POST");
                  }
                }
              }
            })
      };
      
      var GET_choice = `${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ORDER}`
      console.log(`POST_URL :${GET_choice}`)
      
      let objet = 
      {
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
              console.error("lire la reponse promise")
              
              //une fois que la commande est passée, désactiver boutons submit et reset
              submitForm.style.display = 'none'
              resetForm.style.display= 'none'

              // alert bootstrap pour annoncer que commande passée
              form.classList.add('alert', 'alert-success');
              form.role="alert";
              form.innerHTML+=`Votre commande a bien été prise en compte! Merci de patienter`
      
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
            
        .catch(function(ex) 
        {
          console.error(`erreur requete promise : ${JSON.stringify(ex)}`)
        })

    } else 
    {
      event.preventDefault()
      console.error("erreur dans le formulaire, pas d'envoi")
    }
  });


} else 
{
  form.classList.add('alert', 'alert-info');
  form.role="alert";
  form.innerHTML+=`Panier vide, commande impossible`
}
