var React = require('react');
var NavBar = require('./navbar')

class SignUp extends React.Component {

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
                  <div><h1 class="title">Sign Up</h1><br></br>
                  <form class="signup-form" action="/hello" method="POST">
                    <h2>Username:&nbsp;<input type="text" name="username" placeholder="Username"></input></h2>
                    <h2>Password:&nbsp;<input type="text" name="password" placeholder="Password"></input></h2>
                    <input class="signup" type="submit" value="Sign Up!"></input>
                  </form>
                  </div>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = SignUp;