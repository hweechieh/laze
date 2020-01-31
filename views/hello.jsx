var React = require('react');
var NavBar = require('./navbar')

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
                    <div className="greeting"><h1>Hello + {this.props.username}</h1></div>

                    <div>
                        <h2>Things you can do!!!</h2>
                    </div>
                </div>

                </body>
              </html>
        );
    }
}

module.exports = Greeting;