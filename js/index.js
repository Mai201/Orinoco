// Récupération de données API (tableau GET/ faite dans request.js)
var GET_choice = API_URL._HOST + API_URL._DIR + API_URL._CATEGORY


// Affectation des données sur page d'accueil

promiseGet()
    .then(function(response) 
    {
        for (let i=0;i<response.length;i++) 
        {
            let items=document.querySelector(".js-allArticlesByCategory");
            const liCamera=document.createElement("li");
            liCamera.classList.add("list-cards-item");
            const imageCamera=document.createElement("img");
            imageCamera.classList.add("card-img-top");
            imageCamera.src=response[i]["imageUrl"];
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
            const divButton=document.createElement("div");
            divButton.classList.add("card-button")
            const lienCamera=document.createElement("a");
            lienCamera.classList.add("btn", "btn-primary")
            let idLien= response[i]["_id"]
            lienCamera.href="p-produit.html?id="+idLien;
            items.appendChild(liCamera).appendChild(imageCamera)
            items.appendChild(liCamera).appendChild(divBody).appendChild(nameCamera).innerHTML="Appareil photo "+response[i]["name"];
            items.appendChild(liCamera).appendChild(divBody).appendChild(priceCamera).innerHTML="Prix: "+response[i]["price"]/100+"€";
            items.appendChild(liCamera).appendChild(divBody).appendChild(descriptionCamera).innerHTML="Description du produit: " +response[i]["description"];
            items.appendChild(liCamera).appendChild(divBody).appendChild(divButton).appendChild(lienCamera).innerHTML="Sélectionner le modèle "+response[i]["name"];
        }
    })

    .catch(function (error)
    {
        alert("erreur affectation réponse");
    })
