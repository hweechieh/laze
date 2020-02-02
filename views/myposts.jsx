var React = require('react');
var NavBar = require('./navbar');

class MyPosts extends React.Component {
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
                    <div className="greeting"><h1>My Posts</h1></div>

                    <nav>
                        <a href="/favorites">my favorites</a>
                        <a href="/posts">posts</a>
                        <a href="/newpost">create new posts</a>
                    </nav>

                    <script src="/newpost.js"></script>

                </div>

                </body>
              </html>
        );
    }
}

module.exports = MyPosts;