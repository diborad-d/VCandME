import React from 'react';
import HomeBtn from '../components/HomeBtn';
import ArticleCarouselItem from '../components/ArticleCarouselItem';
import articlesInfo from '../articles.json'

class ArticlePage extends React.Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }

  
  render() {

    const styles = {
      // config these style using sass
      carouselStyle: {
        height: "500px",
        display: "flex"
      }
    }
    return (
      <div>
        <h1>
          ArticlePage
        </h1>

          <span><HomeBtn title="Show All" className="btn" link="#" /></span>
          <span><HomeBtn title="Filter Tops" className="btn" link="#" /></span>
          <span><HomeBtn title="Filter Bottoms" className="btn" link="#" /></span>

        <div  className="container">
        <div className="carousel" style={styles.carouselStyle}>
          {/*filter articles from dB */}
          {/*map articles and pass props from dB */}
          {/*materialbox image to zoom on article */}
          {Object.values(articlesInfo).map( article => {
            const keywords = article.keywords
            
            
    
            return (<ArticleCarouselItem 
              name={article.name}
              key={article.id}
              id={article.id}
              type={article.type}
              image={article.image}
              keywords={article.keywords}
              goesWith={article.goesWith}
            />)
            })}
        </div>

        </div>
      
        <span><HomeBtn title="Home" className="btn" link="./" /></span>
        <span><HomeBtn title="New" className="btn" link="#" /></span>
        <span><HomeBtn title="Burn Everything" className="btn" link="#" /></span>

      </div>
    )
  }

}

export default ArticlePage;