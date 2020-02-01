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
                  <div className="title"><h1>Log In</h1><br></br>
                  <form action="/welcomeback" method="POST">
                    Username: <input type="text" name="username" placeholder="Username"></input><br></br>
                    Password: <input type="text" name="password" placeholder="Password"></input><br></br>
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