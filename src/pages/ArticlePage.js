import React from 'react';
import HomeBtn from '../components/HomeBtn';

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  render() {
    return (
      <div>
        <h1>
          ArticlePage
        </h1>
        {/* <div className="carousel">
          <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a>
        </div> */}
        <span><HomeBtn title="Home" className="btn" link="./" /></span>

      </div>
        

    )
  }

}

export default ArticlePage;