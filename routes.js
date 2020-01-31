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

    app.get('/', indexControllerCallbacks.index)
    app.post('/hello', signUpControllerCallbacks.signUp)
};