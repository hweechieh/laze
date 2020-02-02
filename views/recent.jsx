var React = require('react');
var NavBar = require('./navbar')

class Recent extends React.Component {
    render() {
        console.log(this.props.myVideos)
        const random = [
  {
    id: 1,
    title: 'A new beginning that changes life',
    by: 'haegreendal',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1kv5FY68ito" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    img: 'https://i.ytimg.com/vi/M_35QbazHsk/maxresdefault.jpg'
  },
  {
        id: 2,
    title: 'A new beginning',
    by: 'haegreendal',
    link: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1kv5FY68ito" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    img: 'https://i.ytimg.com/vi/M_35QbazHsk/maxresdefault.jpg'
  }
]
        const something = random.map((video, index) => {
            return (
                <React.Fragment key={video.id}>
                    <h2>{video.title}</h2>
                    <h3>{video.by}</h3>
                    <img src={video.img} />
                </React.Fragment>
            )
        })

        // [1, 2].map((value, index) => { return value + 1})
        // [2, 3]

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
                    {something}
                </body>
              </html>
        );
    }
}

module.exports = Recent;

                // <h2>{this.props.myVideos[0].title}</h2>
                // <h3>{this.props.myVideos[0].by}</h3>
                // <img src={this.props.myVideos[0].img}></img>