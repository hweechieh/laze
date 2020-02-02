var sha256 = require('js-sha256');
const SALT = "donuts are fancy";

module.exports = (db) => {


    let createNewControllerCallback = (request, response) => {

        let userId = request.params.id;
        let titleInput = request.body.title;
        let postInput = request.body.post;

        const callback = (error, posts) => {

            const data = {
                myPosts : posts
            }

            response.render('myposts', data);
    }
        // db.posts.createNew(callback)
        db.posts.createNew(callback, titleInput, postInput)

};

        return {
        createNew: createNewControllerCallback
    }
};