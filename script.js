
var button = document.createElement("button");
button.innerText = "Clickkk Meeeee";
document.body.appendChild(button);

//event.target.value
//if element is an input, use the above to access the input

button.addEventListener('click', function(event) {
    var request = new XMLHttpRequest();

    // what to do when we recieve the request
    var responseHandler = function() {
        console.log("response text", this.responseText);
        console.log("status text", this.statusText);
        console.log("status code", this.status);


    var para = document.createElement("p");
    para.innerText = "Your output is " + this.responseText;
    document.body.appendChild(para)
    };

    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "http://localhost:3000/banana";
    request.open("GET", url);

    // send the request
    request.send();
});