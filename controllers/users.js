var sha256 = require('js-sha256');
const SALT = "donuts are fancy";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

     // let loggedIn = (request, response) => {

     // }


    let indexControllerCallback = (request, response) => {
        response.render('landing');
    };


    let signUpControllerCallback = (request, response) => {
        let nameInput = request.body.username;
        let passwordInput = sha256(request.body.password + SALT);
        const values = [nameInput, passwordInput];

        const callback = (error, users) => {
                const data = {
                signedInUser : users
            }
        };

        db.users.signUp(values, data, (error, users) => {

            if (nameInput === null || passwordInput === null) {
                response.send("INCOMPLETE INPUTS, TRY AGAIN!!!")
            }

            if (error) {
                response.send("USERNAME TAKEN! TRY A NEW ONEEEE")
            }

            else {
            response.cookie('loggedin', true);
            response.render('hello', data);

            }
        });
    };


    let signUpPage = (request, response) => {
        response.render('signup');
};


    let logInPage = (request, response) => {
        response.render('login');
};


    let logInControllerCallback = (request, response) => {

        let nameInput = request.body.username;
        let passwordInput = sha256(request.body.password + SALT);
        const values = [nameInput, passwordInput];

        // const callback = (error, users) => {
        //         const data = {
        //         loggedInUser : users
        //     }
        // };

        db.users.logIn(values, (error, users) => {

            if (users === null) {
                response.send("Incorrect username or password. Try again!")
                console.log(users);
            }

            else {
            let currentSessionCookie = sha256(users.id + 'logged' + SALT);
            response.cookie('logged in', currentSessionCookie);
            response.render('welcomeback');
            }
        });
    };


    // let signUpConfirmationControllerCallback = (request, response) => {

    // };

    /**
     * ===========================================
     * Export controller functions as a module
     * ===========================================
     */
    return {
        index: indexControllerCallback,

        signUp: signUpControllerCallback,
        signUpPage: signUpPage,

        logInPage: logInPage,
        logIn: logInControllerCallback
    };

};