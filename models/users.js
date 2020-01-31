module.exports = (signUpInputInstance) => {

  // `dbPoolInstance` is accessible within this function scope

  let signUp = (values, callback) => {

    let query = ('INSERT INTO users (username, password) VALUES ($1, $2) RETURNING *');
    // console.log(query + "yeeeeeeeeh");

    signUpInputInstance.query(query, values, (error, queryResult) => {
      if( error ){

        // invoke callback function with results after query has executed
        callback(error, null);

      }else{

        // invoke callback function with results after query has executed

        if( queryResult.rows.length > 0 ){
          callback(null, queryResult.rows);
          console.log(query);

        }else{
          callback(null, null);

        }
      }
    });
  };




  return {
    signUp: signUp
  };
};