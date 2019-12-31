import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import ArticlePage from "./ArticlePage";

const ClosetPage = () => {
  // state

  
    const styles = {
      // config these style using sass
      closetContainer: {
        border:{
          width: '500px',
          hegiht:'400px',
          display: "flex"
        }
      }
    };
  return (
    <Router>
      <Switch>
        <Route exact path= '/' component= { ArticlePage}>
          <h1  style= { styles.closetContainer } > Closet page</h1>
            
        </Route>
        <ArticlePage />
      </Switch>
    </Router>
  );

};

export default ClosetPage;
