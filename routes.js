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

    const createNewPageControllerCallbacks = require('./controllers/posts')(allModels);
    const createNewControllerCallbacks = require('./controllers/posts')(allModels);
    const displayPostsControllerCallbacks = require('./controllers/posts')(allModels);

    const selectEditPostsControllerCallbacks = require('./controllers/posts')(allModels);
    const editPostsControllerCallbacks = require('./controllers/posts')(allModels);

    const selectDeletePostsControllerCallbacks = require('./controllers/posts')(allModels);
    const deletePostsControllerCallbacks = require('./controllers/posts')(allModels);



    app.get('/', indexControllerCallbacks.index)
    app.post('/hello', signUpControllerCallbacks.signUp)

    app.get('/login', logInPageControllerCallbacks.logInPage)
    app.post('/welcomeback', logInControllerCallbacks.logIn)
    app.get('/welcomeback', logInControllerCallbacks.logIn)

    app.get('/signup', signUpPageControllerCallbacks.signUpPage)

    app.get('/recent', recentPageControllerCallbacks.recentPage)

    app.get('/createnew', createNewPageControllerCallbacks.createNewPage)
    app.post('/myposts', createNewControllerCallbacks.createNew)
    app.get('/myposts', displayPostsControllerCallbacks.displayPosts)

    app.get('/editpost/:id', selectEditPostsControllerCallbacks.selectEditPosts)
    app.post('/myposts/:id', editPostsControllerCallbacks.editPosts)

    app.get('/myposts/:id', selectDeletePostsControllerCallbacks.selectDeletePosts)
    app.delete('/myposts', deletePostsControllerCallbacks.deletePosts)
};