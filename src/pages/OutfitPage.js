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
         OutfitPage
        </h1>
        <span><HomeBtn title="Home" className="btn" link="./" /></span>

      </div>
        

    )
  }

}

export default ArticlePage;