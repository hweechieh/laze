var React = require('react');
var NavBar = require('./navbar')

class LogIn extends React.Component {

    render() {
        console.log('rendering');

        return (
                <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                <div className="container">
                <NavBar/>
                  <div><h1 className="title">Log In</h1><br></br>
                  <form className="signup-form" action="/welcomeback" method="POST">
                    <h2>Username &nbsp; &nbsp;<input type="text" name="username" placeholder="Username"></input></h2>
                    <h2>Password &nbsp; &nbsp;<input type="password" name="password" placeholder="Password"></input></h2>
                    <input type="submit" value="Log In!"></input>
                  </form>
                  </div>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = LogIn;