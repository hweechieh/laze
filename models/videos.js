module.exports = (dbPoolInputInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let recentPage = (callback) => {

    let query = 'SELECT * FROM videos';

    dbPoolInputInstance.query(query, (error, queryResult) => {

      if( error ){
        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed
        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);

        }else{
          callback(null, null);

        }
      }
    });
  };

    return {
    recentPage: recentPage
}
};

