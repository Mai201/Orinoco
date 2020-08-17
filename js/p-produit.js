// nouvelle variable pour GET, pour récupérer les éléments par Id (des app photos, ici)
var GET_choice=`${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ID}`

// Affectation des données sur page produit

promiseGet()

.then(function(response)
{
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

    const lensesOption=document.createElement("label");
    lensesOption.classList.add("btn", "btn-outline-info");
    const lensesChoice=document.createElement("select");
    lensesChoice.classList.add("menu");
    const divButton=document.createElement("div");
    divButton.classList.add("card-button");
    
    items.appendChild(liCamera).appendChild(imageCamera)
    items.appendChild(liCamera).appendChild(divBody).appendChild(nameCamera).innerHTML="Appareil photo "+response["name"];
    items.appendChild(liCamera).appendChild(divBody).appendChild(priceCamera).innerHTML="Prix: "+response["price"]/100+"€";
    items.appendChild(liCamera).appendChild(divBody).appendChild(descriptionCamera).innerHTML="Description du produit: " +response["description"];
    items.appendChild(liCamera).appendChild(divBody).appendChild(lensesOption).innerHTML+="Lentilles disponibles: ";
    items.appendChild(liCamera).appendChild(divBody).appendChild(lensesOption).appendChild(lensesChoice);
    items.appendChild(liCamera).appendChild(divBody).appendChild(divButton);


    // menu pour liste des lentilles disponibles et choix
    try
        {
            for (let j = 0; j < response.lenses.length; j++) 
            {
                let option=document.querySelector(".menu");
                option.value = response.lenses[j];
                option.innerHTML+=`<option class="itemsChoice" >Choix: ${response.lenses[j]}</option>`
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
// pour mémoire: config avec local storage faite dans config-storage.js

promiseGet()

.then(function(response) 
{
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

                console.log(quantiteMessage.textContent);
                
                userBasket.push([response._id, quantiteMessage.textContent])
                
                console.log(userBasket)
                
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
            
                console.log(quantiteMessage.textContent);
                
                if (quantiteMessage.textContent >= 0) 
                {
                    userBasket.pop(response)
                    window.localStorage.setItem('userBasket', JSON.stringify(userBasket))
                }
                if (quantiteMessage.textContent <= 0)
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