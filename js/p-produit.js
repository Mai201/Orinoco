// nouvelle variable pour GET, pour récupérer les éléments par Id (des app photos, ici)
var GET_choice=`${API_URL._HOST + API_URL._DIR + API_URL._CATEGORY}/${API_URL._ID}`

// Affectation des données sur page produit

promiseGet()

.then(function(response)
{
    console.log(`response GetArticleById():${response}`)
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
    buttonLenses.classList.add("btn","btn-secondary","dropdown-toggle")
    buttonLenses.type="button";
    buttonLenses.setAttribute("data-toggle", "dropdown");
    const divButton=document.createElement("div");
    divButton.classList.add("card-button")
    const lensesChoice=document.createElement("div");
    lensesChoice.classList.add("dropdown-menu");
    const lienPanier=document.createElement("a");
    lienPanier.classList.add("btn", "btn-primary")
    lienPanier.href="panier.html";
    items.appendChild(liCamera).appendChild(imageCamera)
    items.appendChild(liCamera).appendChild(divBody).appendChild(nameCamera).innerHTML="Appareil photo "+response["name"];
    items.appendChild(liCamera).appendChild(divBody).appendChild(priceCamera).innerHTML="Prix: "+response["price"]/100+"€";
    items.appendChild(liCamera).appendChild(divBody).appendChild(descriptionCamera).innerHTML="Description du produit: " +response["description"];
    items.appendChild(liCamera).appendChild(divBody).appendChild(divDropdown).appendChild(buttonLenses).innerHTML+="Choix de la lentille: ";
    items.appendChild(liCamera).appendChild(divBody).appendChild(divDropdown).appendChild(lensesChoice);
    items.appendChild(liCamera).appendChild(divBody).appendChild(divButton).appendChild(lienPanier).innerHTML="Ajouter dans le panier";

    // menu déroulant pour choix des lentilles
    try
        {
            for (let j = 0; j < response.lenses.length; j++) 
            {
                let option=document.querySelector(".dropdown-menu");
                option.value = response.lenses[j];
                console.log(j);
                console.log(response.lenses[j]);
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


// Reste à faire: 
// choix de la quantité d'appareils photos commandés



// bouton pour ajouter dans le panier = sessionStorage pour envoyer dans panier
// enregistrer dans variable du json (stringify)
