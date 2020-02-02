var React = require('react');
var NavBar = require('./navbar')

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
                  <div className="title"><p>Peace for everyone.</p>
                  </div>
                <script src="/signup.js"></script>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = Landing;