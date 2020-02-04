//DIV FOR ALL BUTTONS
var containerDiv = document.createElement("div");
containerDiv.setAttribute("style", "display: flex; margin: auto; padding-left: 410px");
document.body.appendChild(containerDiv);


//FAVORITE POSTS
var favesDiv = document.createElement("div");
favesDiv.classList.add("button");
var favesBtn = document.createElement("img");
favesBtn.src = "./images/faves-btn.png";
favesBtn.setAttribute("height", 'auto');
favesBtn.setAttribute("width", '200px');
favesBtn.setAttribute("style", 'padding-right: 20px');
favesDiv.appendChild(favesBtn);
containerDiv.appendChild(favesDiv);


favesDiv.addEventListener('click', function(event) {
    var request = new XMLHttpRequest();

    // what to do when we recieve the request
    var responseHandler = function() {

        var form = document.createElement("form");
        form.setAttribute("action", "/favorites");
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
    var url = "http://localhost:3000/myfaves/:userid";
    request.open("GET", url);

    // send the request
    request.send();
});


//DISPLAY ALL POSTS BY USER
var allpostDiv = document.createElement("div");
allpostDiv.classList.add("button");
var allpostBtn = document.createElement("img");
allpostBtn.src = "./images/viewallpost-btn.png";
allpostBtn.setAttribute("height", "auto");
allpostBtn.setAttribute("width", "200px");
allpostBtn.setAttribute("action", "/myposts");
allpostBtn.setAttribute("style", "display: inline-block")

allpostDiv.appendChild(allpostBtn);
containerDiv.appendChild(allpostDiv);

allpostDiv.addEventListener('click', directToMyPosts);

        function directToMyPosts() {
            var request = new XMLHttpRequest();
            response.redirect("/myposts");
            request.send();
        };






        // make a new request


        // listen for the request response
        // request.addEventListener("load", responseHandler);

        // ready the system by calling open, and specifying the url


        // // send the request




        //CREATE NEW POST
        var newpostDiv = document.createElement("div");
        newpostDiv.classList.add("button");
        var newpostBtn = document.createElement("img");
        newpostBtn.src = "./images/newpost-btn.png";
        newpostBtn.setAttribute("height", 'auto');
        newpostBtn.setAttribute("width", '200px');
        newpostBtn.setAttribute("style", 'padding-left: 20px');
        newpostDiv.appendChild(newpostBtn);
        containerDiv.appendChild(newpostDiv);


        newpostDiv.addEventListener('click', function(event) {

            // what to do when we recieve the request
            var responseHandler = function() {

                var form = document.createElement("form");
                form.setAttribute("action", "/myposts");
                form.setAttribute("method", "POST");
                form.setAttribute("id", "myPost");
                document.body.appendChild(form);

                var titleDiv = document.createElement("div")
                var titleInput = document.createElement("input");
                titleInput.setAttribute("type", "text");
                titleInput.setAttribute("name", "title");
                titleInput.setAttribute("placeholder", "Title");
                titleDiv.appendChild(titleInput);
                document.getElementById("myPost").appendChild(titleDiv);


                var postDiv = document.createElement("div");
                var postInput = document.createElement("textarea");
                postInput.setAttribute("type", "text");
                postInput.setAttribute("name", "post");
                postInput.setAttribute("style", "font-size: 16px; width: 1000px; height: 400px");
                postInput.setAttribute("placeholder", "My thoughts...");
                postDiv.appendChild(postInput);
                document.getElementById("myPost").appendChild(postDiv);

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

           //  document.getElementById("myPost").ontoggle = function() {
           //  console.log("HEY!")
           // };

            // ready the system by calling open, and specifying the url
            var url = "http://localhost:3000/myposts";
            request.open("GET", url);

            // send the request
            request.send();
        });