var React = require('react');
var NavBar = require('./navbar');
var Buttons = require('./buttons')

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
                    <NavBar/>
                    <div className="greeting">Hey {this.props.loggedInUser[0].username}! Nice to have you back!</div>
                <Buttons/>
                <br></br>
                <br></br>
                </body>
              </html>
        );
    }
}

module.exports = Greeting;