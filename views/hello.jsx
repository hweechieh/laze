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
                    <div className="greeting"><h1>Hello,</h1>{this.props.name}!</div>

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