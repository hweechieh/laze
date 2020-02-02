module.exports = (dbPoolInputInstance) => {

        // `dbPoolInstance` is accessible within this function scope

        let createNew = (callback, titleInput, postInput) => {

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

            return {
                createNew: createNew
            }
        };
    };