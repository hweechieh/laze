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
                  <div className="title"><h1>laze around</h1>
                  <p>The world can get a little too loud sometimes;
                  let’s find some quiet together.</p>
                  <script src="/script.js"></script>
                  </div>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = Landing;