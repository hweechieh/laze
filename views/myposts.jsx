var React = require('react');
var NavBar = require('./navbar');
var Buttons = require('./buttons')

class MyPosts extends React.Component {
    render() {

        const allPosts = this.props.myPosts.map((post) => {
            let link = "/editpost/" + post.id;
            let deleteLink = "/myposts" + post.id;

            return (
                <div className="row">
                    <div className="col"><div className="p-title">{post.title}</div></div>
                    <div className="col"><div className="p-post">{post.post}</div></div>

                        <form action={link} method="GET">
                            <button value={post.id} type="submit">Edit</button>
                        </form>
                        <form action={deleteLink} method="POST">
                            <button value={post.id} className="delete-btn" type="button">Delete</button>
                        </form>
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
                    <div className="greeting">My Posts</div>
                    <Buttons/>
                    <br></br>
                    <br></br>

                <div className="post-container">
                <div className="row">
                    <div className="col"><div className="col-inner">Title</div></div>
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