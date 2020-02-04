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
                <div class="btns-container">
                    <a href="/favorites"><img class="three-btns" src="./images/faves-btn.png" /></a>
                    <a href="/myposts"><img class="three-btns" src="./images/viewallpost-btn.png" /></a>
                    <a href="/createnew"><img class="three-btns" src="./images/newpost-btn.png" /></a>
                </div>
                </body>
              </html>
        );
    }
}

module.exports = Buttons;