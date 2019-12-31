import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import ArticlePage from "./ArticlePage";
import ArticleCarouselItem from "./../components/ArticleCarouselItem";

class ClosetPage extends React.Component {
  // state

  render() {
    const container = {
      marginTop: "5%",
      // width: '100%',
      // height: '50hv'
    };
    const rightSide = {
      display: "inline-block",
      background: "lightPink",
      height: "800px",
      width: "50%",
      marginTop: "1%",
      verticalAlign: "top",
      paddingBottom:' 5%'

    };
    const leftSide = {
      display: "inline-block",
      background: "lightBlue",
      height: "800px",
      width: "40%",
      marginTop: "1%",
      marginRight: '5%',
      verticalAlign: "top"
    };
    const carousel = {
     height : '300px'
    }
    return (
      <div className="container" style={container}>
        <div style={leftSide}>
          <div className="col-md-6 ">
            <div className="d-flex justify-content-center align-items-center">
              <h3>Your Closet</h3>
            </div>
          </div>
        </div>

        <div style={rightSide}>
          <div className="col-md-6 ">
            <div className="d-flex justify-content-center align-items-center">
              <h3>Your Closet</h3>
            <div class="carousel" style = {carousel}>
              {/* <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a> */}
              <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
              <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3/"/></a>
              <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
              <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
              
            </div>
           <hr/>
            <div class="carousel" style = {carousel}>
              {/* <a class="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1"/></a> */}
              <a class="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2"/></a>
              <a class="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3/"/></a>
              <a class="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
              <a class="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
            </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClosetPage;
