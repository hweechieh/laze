
//Display post box for user to enter input

var newpostDiv = document.createElement("div");
newpostDiv.classList.add("button");
var newpostBtn = document.createElement("img");
newpostBtn.src = "./images/newpost-btn.png";
newpostBtn.setAttribute("height", 'auto');
newpostBtn.setAttribute("width", '200px');
newpostDiv.appendChild(newpostBtn);
document.body.appendChild(newpostDiv);


newpostDiv.addEventListener('click', function(event) {
    var request = new XMLHttpRequest();

    // what to do when we recieve the request
    var responseHandler = function() {
        // console.log("response text", this.responseText);
        // console.log("status text", this.statusText);
        // console.log("status code", this.status);

    var form = document.createElement("form");
    form.setAttribute("action", "/myposts");
    form.setAttribute("method", "POST");
    form.setAttribute("id", "myPost");
    document.body.appendChild(form);


    var titleInput = document.createElement("input");
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("name", "title");
    titleInput.setAttribute("placeholder", "Title");
    document.getElementById("myPost").appendChild(titleInput);


    var postInput = document.createElement("input");
    postInput.setAttribute("type", "text");
    postInput.setAttribute("name", "post");
    postInput.setAttribute("style", "font-size: 16px; width: 1000px; height: 400px");
    postInput.setAttribute("placeholder", "My thoughts...");
    document.getElementById("myPost").appendChild(postInput);

    var postBtn = document.createElement("button");
    postBtn.innerText = "Post!";
    postBtn.setAttribute("type", "submit");
    postBtn.setAttribute("action", "/myposts")
    document.getElementById("myPost").appendChild(postBtn);

    };


    // make a new request
    var request = new XMLHttpRequest();

    // listen for the request response
    request.addEventListener("load", responseHandler);

    // ready the system by calling open, and specifying the url
    var url = "http://localhost:3000/newpost/:userid";
    request.open("GET", url);

    // send the request
    request.send();
});


