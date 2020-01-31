var React = require('react');

class NavBar extends React.Component {

    render() {
        console.log('rendering');

        return (
                <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                    <nav>
                      <input type="text" placeholder="Search"></input>
                      <button type="submit"><i className="search"></i></button>
                      <a href="/recent">recent</a> |
                      <a href="/login">log in</a> |
                      <a href="/sign-up/">sign up</a>
                    </nav>
                </body>

              </html>
        );
    }
}

module.exports = NavBar;