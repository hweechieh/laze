var React = require('react');
var NavBar = require('./navbar');

class EditPost extends React.Component {
    render() {
        // console.log('rendering');
        let link = "/myposts/" + this.props.selectedPost[0].id;
        return (
            <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                <div className="container">
                    <NavBar/>
                    <div className="greeting">Edit Post</div>
                    <br></br>
                    <script src="/script.js"></script>
                </div>

                <form id="editPost" action={link} method="POST" >
                    <div>
                        <input type="text" name="title" value={this.props.selectedPost[0].title}></input>
                    </div>
                    <div>
                        <textarea type="text" name="post" value={this.props.selectedPost[0].post}></textarea>
                    </div>
                    <button type="submit">Update!</button>
                </form>

                </body>
              </html>
        );
    }
}

module.exports = EditPost;