var React = require('react');
var NavBar = require('./navbar');
var Buttons = require('./buttons')

class Landing extends React.Component {

    render() {
        console.log('rendering');

        return (
                <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                <div className="landing-container">
                <NavBar/>
                  <div className="landing-title">Peace for everyone.</div>
                </div>
                <div className="enjoyfree-btn">
                  <a href="/signup"><img src="./images/enjoyfree-btn.png" /></a>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = Landing;