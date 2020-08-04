// Récupération de données API

function promiseGet() 
{
    return new Promise((resolve, reject)=> 
    {
        const request= new XMLHttpRequest();
        request.open("GET", "http://localhost:3000/api/cameras");
        request.send();
        request.onreadystatechange = function() 
        {
            if (this.readyState === XMLHttpRequest.DONE) 
            {
                if (this.status ===200)
                {
                   resolve(JSON.parse(this.responseText)) 
                   var response = JSON.parse(this.responseText);
                   console.log(response);
                } else 
                {
                    reject(XMLHttpRequest);
                    alert("erreur GET");
                }
            }
        }
    })
};