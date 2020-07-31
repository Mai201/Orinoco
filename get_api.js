var request = new XMLHttpRequest();

request.onreadystatechange = function() {
    if (this.readyState == XMLHttpRequest.DONE && this.status == 200) {
        // alert(XMLHttpRequest.responseText);
        var response = JSON.parse(this.responseText);
        console.log(response);
    } 
    // else {
    //     alert("Un problème est survenu");
    // }
};

request.open("GET", "http://localhost:3000/api/cameras");
request.send();