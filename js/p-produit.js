// nouvelle variable pour GET, pour récupérer les éléments par Id (des app photos, ici)
var GET_choice=`${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ID}`

// Affectation des données sur page produit

promiseGet()

.then(function(response)
{
    // console.log(`response GetArticleById():${response}`)
    let items=document.querySelector(".js-chosen-article");
    const liCamera=document.createElement("li");
    liCamera.classList.add("list-cards-item");
    const imageCamera=document.createElement("img");
    imageCamera.classList.add("card-img-top");
    imageCamera.src=response["imageUrl"];
    const divBody=document.createElement("div");
    divBody.classList.add("card-body");
    const nameCamera=document.createElement("h3");
    nameCamera.classList.add("card-title");
    const priceCamera=document.createElement("p");
    priceCamera.classList.add("card-text");
    const optionCamera=document.createElement("p");
    optionCamera.classList.add("card-text");
    const descriptionCamera=document.createElement("p");
    descriptionCamera.classList.add("card-text");
    const divDropdown=document.createElement("div");
    divDropdown.classList.add("dropdown");
    const buttonLenses=document.createElement("button");
    buttonLenses.classList.add("btn","btn-info","dropdown-toggle")
    buttonLenses.type="button";
    buttonLenses.setAttribute("data-toggle", "dropdown");
    const divButton=document.createElement("div");
    divButton.classList.add("card-button")
    const lensesChoice=document.createElement("div");
    lensesChoice.classList.add("dropdown-menu");
    
    items.appendChild(liCamera).appendChild(imageCamera)
    items.appendChild(liCamera).appendChild(divBody).appendChild(nameCamera).innerHTML="Appareil photo "+response["name"];
    items.appendChild(liCamera).appendChild(divBody).appendChild(priceCamera).innerHTML="Prix: "+response["price"]/100+"€";
    items.appendChild(liCamera).appendChild(divBody).appendChild(descriptionCamera).innerHTML="Description du produit: " +response["description"];
    items.appendChild(liCamera).appendChild(divBody).appendChild(divDropdown).appendChild(buttonLenses).innerHTML+="Lentilles disponibles: ";
    items.appendChild(liCamera).appendChild(divBody).appendChild(divDropdown).appendChild(lensesChoice);
    items.appendChild(liCamera).appendChild(divBody).appendChild(divButton);


    // simple menu déroulant pour liste des lentilles disponibles
    try
        {
            for (let j = 0; j < response.lenses.length; j++) 
            {
                let option=document.querySelector(".dropdown-menu");
                option.value = response.lenses[j];
                // console.log(j);
                // console.log(response.lenses[j]);
                option.innerHTML+=`<a class="dropdown-item" >lentille: ${response.lenses[j]}</a>`
            }
        } catch (error)
        {
            alert("erreur boucle des lentilles");
        }
})

.catch(function (error)
{
    alert("erreur affectation réponse");
})


// boutons ajout et supression du panier, et affichage de la quantité
// config pour panier sur la page p-produit.html avec local storage et confirm panier pour commande

// userbasket à initialiser

if (window.localStorage.getItem('userBasket')) 
{
    console.log('User basket init and available in local browser storage')
} else 
{
    const userBasketInit = []
    window.localStorage.setItem('userBasket', JSON.stringify(userBasketInit))
}
  
// confirmer le panier

if (window.localStorage.getItem('confirmShoppingCart')) 
{
    console.log('Confirm shopping cart and available in local browser storage')
} else 
{
    const confirmShoppingCartInit = []
    window.localStorage.setItem('confirmShoppingCart', JSON.stringify(confirmShoppingCartInit))
}
  
// config du local storage pour envoyer dans panier
  const userBasket = JSON.parse(window.localStorage.getItem('userBasket'))
  const confirmShoppingCart = JSON.parse(window.localStorage.getItem('confirmShoppingCart'))

promiseGet()

.then(function(response) 
{
    console.log(`response GetArticleById():${response}`)
    let itemsPanier=document.querySelector(".card-button");
    const ajoutPanier=document.createElement("a");
    ajoutPanier.classList.add("btn", "btn-primary", "btn-top","col-6", "js-addBasket");
    ajoutPanier.type="button";
    ajoutPanier.href="#";
    const supprPanier=document.createElement("a");
    supprPanier.classList.add("btn", "btn-danger", "btn-top","offset-1","col-5", "js-deleteBasket", "js-activeButtonDelete");
    supprPanier.type="reset";
    supprPanier.href="#";
    const quantitePanier=document.createElement("a");
    quantitePanier.classList.add("btn","btn-outline-info", "btn-top","col-6","js-quantityIsActive");
    const quantiteMessage=document.createElement("span");
    quantiteMessage.classList.add("js-quantityMessage");
    const validPanier=document.createElement("a");
    validPanier.classList.add("btn", "btn-success", "btn-top","offset-1","col-5", "js-validBasket","js-activeButtonValid");
    validPanier.type="submit";
    validPanier.href="panier.html";


    itemsPanier.appendChild(ajoutPanier).innerHTML="Ajouter dans panier";
    itemsPanier.appendChild(supprPanier).innerHTML="Supprimer du panier";
    itemsPanier.appendChild(quantitePanier).innerHTML="Quantité: ";
    itemsPanier.appendChild(quantitePanier).appendChild(quantiteMessage);
    itemsPanier.appendChild(validPanier).innerHTML="Valider le panier";
    
    try
        {
            ajoutPanier.addEventListener('click', (event) => 
            {
                event.preventDefault()
                quantitePanier.style.display = 'inline-block'
                quantiteMessage.textContent = Number(quantiteMessage.textContent) + 1

                // console.log(quantiteMessage.textContent);

                if (quantiteMessage.textContent <= 1) 
                {   
                    userBasket.push([response._id, quantiteMessage.textContent])
                } else
                {
                    userBasket.push([response._id, '1'])
                }
                
                if (window.localStorage.getItem('userBasket', JSON.stringify(userBasket)) !== null) 
                {
                    window.localStorage.setItem('userBasket', JSON.stringify(userBasket))
                }

                supprPanier.style.display = 'inline-block'
                validPanier.style.display = 'inline-block'

            })
        } catch (error)
        {
            alert("erreur ajout dans panier");
        }


        try
        {
            supprPanier.addEventListener('click', (event) => 
            {
                event.preventDefault()
                quantiteMessage.textContent = Number(quantiteMessage.textContent) - 1
            
                // console.log(quantiteMessage.textContent);
                
                if (Number(quantiteMessage.textContent) >= 1) 
                {
                    userBasket.pop(response)
                    window.localStorage.setItem('userBasket', JSON.stringify(userBasket))
                } else 
                {
                    supprPanier.style.display = 'none'
                    quantitePanier.style.display = 'none'
                    validPanier.style.display = 'none'
                }
            })
        } catch(error) 
        {
            alert("erreur suppression dans panier")
        }   
})