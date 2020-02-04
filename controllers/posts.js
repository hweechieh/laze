var sha256 = require('js-sha256');
const SALT = "donuts are fancy";

module.exports = (db) => {


    let createNewControllerCallback = (request, response) => {
        let userId = request.cookies.user_id;
        let titleInput = request.body.title;
        let postInput = request.body.post;

        const callback = (error, posts) => {

            const data = {
                myPosts : posts
            }

            response.redirect('/myposts');
    }
        // db.posts.createNew(callback)
        db.posts.createNew(callback, userId, titleInput, postInput);
};


    let displayPostsControllerCallback = (request, response) => {
        let userId = request.cookies.user_id;

        const callback = (error, posts) => {
            const data = {
                myPosts : posts
            }
            console.log(data);
            response.render('myposts', data);
    }

        db.posts.displayPosts(callback, userId);
};


    let selectEditPostsControllerCallback = (request, response) => {
        let userId = request.cookies.user_id;
        let postId = request.params.id;

        const callback = (error, posts) => {

            const data = {
                selectedPost : posts
            }

            response.render('editpost', data);
    }
        db.posts.selectEditPosts(callback, postId, userId);
};


    let editPostsControllerCallback = (request, response) => {
        let userId = request.cookies.user_id;
        let postId = request.params.id;
        let titleInput = request.body.title;
        let postInput = request.body.post;

        const callback = (error, posts) => {

            const data = {
                myPosts : posts
            }
            response.redirect('/myposts');
    }

        db.posts.editPosts(callback, postId, userId, titleInput, postInput);
};

        return {
        createNew : createNewControllerCallback,
        displayPosts : displayPostsControllerCallback,
        selectEditPosts : selectEditPostsControllerCallback,
        editPosts : editPostsControllerCallback
    }
};