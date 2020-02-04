
var buttonDiv = document.createElement("div");
buttonDiv.setAttribute("style", "display: flex; margin: auto");

var button = document.createElement("img");
button.src = "./images/enjoyfree-btn";
button.setAttribute("height", "auto");
button.setAttribute("width", "200px");
button.setAttribute("style", "padding-left: 600px")
buttonDiv.appendChild(button);
document.body.appendChild(buttonDiv);

//event.target.value
//if element is an input, use the above to access the input

buttonDiv.addEventListener('click', function(event) {

    // what to do when we recieve the request
    var responseHandler = function() {

    document.body.removeChild(buttonDiv);

    var form = document.createElement("form");
    form.setAttribute("action", "/hello");
    form.setAttribute("method", "POST");
    form.setAttribute("id", "myForm");
    document.body.appendChild(form);

    var nameInput = document.createElement("input");
    nameInput.setAttribute("type", "text");
    nameInput.setAttribute("name", "username");
    nameInput.setAttribute("placeholder", "Username");
    document.getElementById("myForm").appendChild(nameInput);

    var passwordInput = document.createElement("input");
    passwordInput.setAttribute("type", "text");
    passwordInput.setAttribute("name", "password");
    passwordInput.setAttribute("placeholder", "Password");
    document.getElementById("myForm").appendChild(passwordInput);

    var submitBtn = document.createElement("button");
    submitBtn.innerText = "Submit";
    submitBtn.setAttribute("type", "submit");
    submitBtn.setAttribute("action", "/hello")
    document.getElementById("myForm").appendChild(submitBtn);

    };


    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "http://localhost:3000/hello";
    request.open("GET", url);

    // send the request
    request.send();
});


