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
                    <NavBar/>
                    <div className="greeting">Edit Post</div>
                    <div className="btns-container">
                        <a href="/favorites"><img className="three-btns" src=".././images/faves-btn.png" /></a>
                        <a href="/myposts"><img className="three-btns" src=".././images/viewallpost-btn.png" /></a>
                        <a href="/createnew"><img className="three-btns" src=".././images/newpost-btn.png" /></a>
                    </div>
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