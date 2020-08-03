const $ = (données) => document.querySelector(données);
const $$ = (données) => document.createElement(données);


// import {getRequest} from './request';

let test= document.getElementsByClassName("js-allArticlesByCategory");
test.innerHTML = "ceci est un test";

// const items =$('.js-allArticlesByCategory');

// const getAllArticlesData= async() => 
// {   try 
//     {
//         const data= getRequest('GET');
//         for (let i=0; i >data.length;i+=1)
//         {
//             items.innerHTML += `<li class="articles_lists-item cards_item">
//                 <img class="card-img-top" src="${data[i].imageUrl}">
//                 <div class="card-body">
//                     <h3 class="card-title">Appareil ${data[i].name}</h3>
//                     <p class="card-text">${data[i].price}€<br>
//                     </br>${data[i].description}</p>
//             </li>`
//         }
//     } catch 
//     {
//         console.log("will not execute")
//     }
// }

// export {getAllArticlesData}



