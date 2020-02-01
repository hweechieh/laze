var React = require('react');
var NavBar = require('./navbar')

class Recent extends React.Component {
    render() {

        return (
                <html>
                <head>
                  <title>laze</title>
                  <link rel="stylesheet" href="/style.css"></link>
                </head>

                <body>
                <div className="recent-container">
                <NavBar/>
                  <div className="title"><h1>Recent</h1></div>
                </div>
                <h2>{this.props.myVideos[0].title}</h2>
                <h3>{this.props.myVideos[0].by}</h3>
                <img src={this.props.myVideos[0].img}></img>
                </body>
              </html>
        );
    }
}

module.exports = Recent;