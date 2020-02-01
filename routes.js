module.exports = (app, allModels) => {


    /*
     *  =========================================
     *  =========================================
     *  =========================================
     *  =========================================
     *    ALL ROUTES FOR POKEMON CONTROLLER
     *  =========================================
     *  =========================================
     *  =========================================
     */

    // require the controller
    const indexControllerCallbacks = require('./controllers/users')(allModels);

    const signUpControllerCallbacks = require('./controllers/users')(allModels);
    const signUpPageControllerCallbacks = require('./controllers/users')(allModels);

    const logInPageControllerCallbacks = require('./controllers/users')(allModels);
    const logInControllerCallbacks = require('./controllers/users')(allModels);

    const recentPageControllerCallbacks = require('./controllers/videos')(allModels);


    app.get('/', indexControllerCallbacks.index)
    app.post('/hello', signUpControllerCallbacks.signUp)

    app.get('/login', logInPageControllerCallbacks.logInPage)
    app.post('/welcomeback', logInControllerCallbacks.logIn)

    app.get('/signup', signUpPageControllerCallbacks.signUpPage)

    app.get('/recent', recentPageControllerCallbacks.recentPage)
};