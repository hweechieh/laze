var React = require('react');
var NavBar = require('./navbar');

class Greeting extends React.Component {
    render() {
        // console.log('rendering');

        return (
            <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                <div className="container">
                    <NavBar/>
                    <div className="greeting">Hey! Nice to have you back!</div>
                <br></br>
                    <script src="/script.js"></script>
                </div>

                </body>
              </html>
        );
    }
}

module.exports = Greeting;