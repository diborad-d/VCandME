import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { render } from "@testing-library/react";
import ArticlePage from "./ArticlePage";

const ClosetPage = () => {
  // state

  return (
    <Router>
      <Switch>
        <Route exact path= '/' component= { ArticlePage}>
          <h1>Closet page</h1>

      


        </Route>
        <ArticlePage />
      </Switch>
    </Router>
  );
};

export default ClosetPage;
