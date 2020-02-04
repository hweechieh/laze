var React = require('react');
var NavBar = require('./navbar');

class MyPosts extends React.Component {
    render() {

        const allPosts = this.props.myPosts.map((post) => {
            let link = "/editpost/" + post.id;

            return (
                <div className="row">
                    <div className="col"><div>{post.title}</div></div>
                    <div className="col"><div>{post.post}</div></div>
                        <form action={link} method="GET">
                            <button value={post.id} type="submit">Edit</button>
                        </form>
                    <button value={post.id} className="delete-btn" type="button">delete</button>
                </div>
            )
        })
        return (
            <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                    <NavBar/>
                    <div className="myposts-title"><h1>My Posts</h1></div>
                    <script src="/script.js"></script>
                <div className="post-container">
                <div className="row">
                    <div className="col"><div className="col-inner">Post Title</div></div>
                    <div className="col"><div className="col-inner">Post</div></div>
                </div>
                {allPosts}
                </div>

                </body>
              </html>
        );
    }
}

module.exports = MyPosts;