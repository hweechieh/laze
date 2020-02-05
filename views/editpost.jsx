var React = require('react');
var NavBar = require('./navbar');
var Buttons = require('./buttons')

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
                    <NavBar/>
                    <div className="greeting">Edit Post</div>
                    <Buttons/>
                    <br></br>
                    <br></br>

                <form className="signup-form" action={link} method="POST">
                    <input type="text" name="title" value={this.props.selectedPost[0].title}></input>
                        <br></br>
                        <br></br>
                    <textarea type="text" name="post" value={this.props.selectedPost[0].post}></textarea>
                        <br></br>
                        <br></br>
                    <input type="submit" value="Update!"></input>
                </form>

                </body>
              </html>
        );
    }
}

module.exports = EditPost;