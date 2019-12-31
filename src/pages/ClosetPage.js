import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import ArticlePage from "./ArticlePage";
import ArticleCarouselItem from "./../components/ArticleCarouselItem";

class ClosetPage extends React.Component {
  // state

  render() {
    const container = {
      margin: "3% 10%"
      // width: '100%',
      // height: '50hv'
    };
    const rightSide = {
      display: "inline-block",
      background: "lightPink",
      height: "800px",
      width: "40%",
      marginTop: "1%",
      verticalAlign: "top",
      paddingBottom: " 5%"
    };
    const leftSide = {
      display: "inline-block",
      background: "lightBlue",
      height: "800px",
      width: "30%",
      marginTop: "1%",
      marginRight: "5%",
      verticalAlign: "top"
    };
    const carousel = {
      height: "300px"
    };
    const p = {
      fontSize: '30px',
      fontFamily: 'Roboto Slab, serif'
    }
    return (
      <div classNameName="container" style={container}>
        <div style={leftSide}>
          <div classNameName="col-md-6 ">
            <div classNameName="d-flex justify-content-center align-items-center">
              <div>
              <p style={p}>Your Fitting Room</p>
              </div>
              <div className="row">
                <div className="col s12 m7">
                  <img src="https://lorempixel.com/250/250/nature/2" />
                  <div className="links">
                    <a class="waves-effect waves-light btn">Save</a>
                    <a class="waves-effect waves-light btn">Remove</a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col s12 m7">
                  <img src="https://lorempixel.com/250/250/nature/2" />
                  <div className="links">
                    <a class="waves-effect waves-light btn">Save</a>
                    <a class="waves-effect waves-light btn">Remove</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style={rightSide}>
          <div classNameName="col-md-6 ">
            <div classNameName="d-flex justify-content-center align-items-center">
              <div>
              <p style={p}> Your Closet</p>
              </div>
              <div className="carousel" style={carousel}>
                <a className="carousel-item" href="#two!">
                  <img src="https://lorempixel.com/250/250/nature/2" />
                </a>
                <a className="carousel-item" href="#three!">
                  <img src="https://lorempixel.com/250/250/nature/3/" />
                </a>
                <a className="carousel-item" href="#four!">
                  <img src="https://lorempixel.com/250/250/nature/4" />
                </a>
                <a className="carousel-item" href="#five!">
                  <img src="https://lorempixel.com/250/250/nature/5" />
                </a>
              </div>
              <hr />
              <div className="carousel" style={carousel}>
                <a className="carousel-item" href="#two!">
                  <img src="https://lorempixel.com/250/250/nature/2" />
                </a>
                <a className="carousel-item" href="#three!">
                  <img src="https://lorempixel.com/250/250/nature/3/" />
                </a>
                <a className="carousel-item" href="#four!">
                  <img src="https://lorempixel.com/250/250/nature/4" />
                </a>
                <a className="carousel-item" href="#five!">
                  <img src="https://lorempixel.com/250/250/nature/5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default ClosetPage;
