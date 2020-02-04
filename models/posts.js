module.exports = (dbPoolInputInstance) => {

        // `dbPoolInstance` is accessible within this function scope

        let createNew = (callback, userId, titleInput, postInput) => {

            const values = [userId, titleInput, postInput];
            let query = 'INSERT INTO posts (user_id, title, post) VALUES ($1, $2, $3) RETURNING *';

            dbPoolInputInstance.query(query, values, (error, queryResult) => {
                if (error) {

                    // invoke callback function with results after query has executed
                    callback(error, null);

                } else {

                    // invoke callback function with results after query has executed

                    if (queryResult.rows.length > 0) {
                        callback(null, queryResult.rows);

                    } else {
                        callback(null, null);

                    }
                }
            });
        }


        let displayPosts = (callback, userId) => {

            const values = [userId];
            let query = 'SELECT * FROM posts WHERE user_id=$1';

            dbPoolInputInstance.query(query, values, (error, queryResult) => {
                if (error) {

                    // invoke callback function with results after query has executed
                    callback(error, null);

                } else {
                        // console.log(queryResult.rows);
                    // invoke callback function with results after query has executed

                    if (queryResult.rows.length > 0) {
                        callback(null, queryResult.rows);

                    } else {
                        callback(null, null);

                    }
                }
            });
        }


        let selectEditPosts = (callback, postId, userId) => {

            const values = [postId, userId];
            let query = 'SELECT * FROM posts WHERE id=$1 AND user_id=$2;';

            dbPoolInputInstance.query(query, values, (error, queryResult) => {
                if (error) {

                    // invoke callback function with results after query has executed
                    callback(error, null);

                } else {
                        // console.log(queryResult.rows);
                    // invoke callback function with results after query has executed

                    if (queryResult.rows.length > 0) {
                        callback(null, queryResult.rows);

                    } else {
                        callback(err, null);

                    }
                }
            });
        }


        let editPosts = (callback, postId, userId, titleInput, postInput) => {

            const values = [postId, userId, titleInput, postInput];
            let query = 'UPDATE posts SET title=$3, post=$4 WHERE id=$1 AND user_id=$2 RETURNING *';

            dbPoolInputInstance.query(query, values, (error, queryResult) => {
                if (error) {

                    // invoke callback function with results after query has executed
                    callback(error, null);

                } else {

                    // invoke callback function with results after query has executed
                    if (queryResult.rows.length > 0) {
                        callback(null, queryResult.rows);

                    } else {
                        callback(null, null);

                    }
                }
            });
        }


            return {
                createNew : createNew,
                displayPosts : displayPosts,
                selectEditPosts : selectEditPosts,
                editPosts : editPosts
        };
    };