var React = require('react');
var NavBar = require('./navbar');
var Buttons = require('./buttons')

class CreateNew extends React.Component {
    render() {

        return (
            <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>
                <body>
                    <NavBar/>
                    <div className="greeting">What's on your mind?</div>
                    <Buttons/>
                    <br></br>
                    <br></br>

                    <form  className="signup-form" action="/myposts" method="POST">
                        <input type="text" name="title" placeholder="Title"></input>
                        <br></br>
                        <br></br>
                        <textarea type="text" name="post" placeholder="My thoughts..."></textarea>
                        <br></br>
                        <br></br>
                        <input type="submit" value="Post!"></input>
                    </form>

                </body>
              </html>
        );
    }
}

module.exports = CreateNew;