var React = require('react');

class Buttons extends React.Component {

    render() {

        return (
            <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                <div className="btns-container">
                    <a href="/favorites"><img className="three-btns" src="./images/faves-btn.png" /></a>
                    <a href="/myposts"><img className="three-btns" src="./images/viewallpost-btn.png" /></a>
                    <a href="/createnew"><img className="three-btns" src="./images/newpost-btn.png" /></a>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = Buttons;