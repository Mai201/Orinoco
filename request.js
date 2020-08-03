// Récupération de données API

const getRequest =function (données)
{
    const request= new XMLHttpRequest();
    request.onreadystatechange = function() 
    {
        if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
        {
        var response = JSON.parse(this.responseText);
        } else 
        {
        console.log("Un problème est survenu");
        }
    }
request.open("GET", "http://localhost:3000/api/cameras");
request.send();
}



// Envoi des données à API

// const postRequest =function ()
// {
//     const request= new XMLHttpRequest();
//     request.onreadystatechange = function() 
//     {
//         if (this.readyState == XMLHttpRequest.DONE && this.status == 200) 
//         {
//         var response = JSON.parse(this.responseText);
//         console.log(response);
//         } else 
//         {
//         alert("Un problème est survenu");
//         }
//     }
// request.open("POST", "http://localhost:3000/api/cameras");
// request.setRequestHeader("Content-Type", "application/json");
// // request.send(JSON.stringify(jsonBody));
// request.send();

// };

// export {getRequest};
// export {postRequest};