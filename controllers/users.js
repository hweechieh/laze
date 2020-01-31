var sha256 = require('js-sha256');
const SALT = "donuts are fancy";

module.exports = (db) => {

    /**
     * ===========================================
     * Controller logic
     * ===========================================
     */

    let indexControllerCallback = (request, response) => {
        // db.tweedr.getAll((error, tweedr) => {
        response.render('landing');
        // });
    };


    let signUpControllerCallback = (request, response) => {
        let nameInput = request.body.username;
        let passwordInput = sha256(request.body.password + SALT);
        const values = [nameInput, passwordInput];

        db.users.signUp(values, (error, users) => {
            if (error) {
                response.send("USERNAME TAKEN! TRY A NEW ONEEEE")
            }

            response.render('hello');
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
        signUp: signUpControllerCallback
    };

};