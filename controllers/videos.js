var sha256 = require('js-sha256');
const SALT = "donuts are fancy";

module.exports = (db) => {

    let recentPageControllerCallback = (request, response) => {

        const callback = (error, videos) => {

            const data = {
                myVideos : videos
            }

            response.render('recent', data);
    };
        db.videos.recentPage(callback)
};


    return {
        recentPage: recentPageControllerCallback
    }
};

