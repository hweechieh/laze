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
                    <div className="greeting"><h1>Hey. nice to have you back!</h1></div>

                    <nav>
                        <a href="/recent">my favorites</a> |
                        <a href="/recent">posts</a> |
                        <a href="/recent">create new posts</a>
                    </nav>
                </div>

                </body>
              </html>
        );
    }
}

module.exports = Greeting;