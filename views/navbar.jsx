var React = require('react');

class NavBar extends React.Component {

    render() {
        console.log('rendering');

        return (
                <html>
                <head>
                  <title>laze</title>
                  <link href="https://fonts.googleapis.com/css?family=Fredericka+the+Great&display=swap" rel="stylesheet"></link>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                    <nav>
                      <div className="logo">laze</div>
                      <a href="/login">log in</a>
                      <a href="/signup">sign up</a>
                      <a href="/recent">recent</a>
                    </nav>
                </body>

              </html>
        );
    }
}

module.exports = NavBar;