import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClosetPage from "./pages/ClosetPage";
import OutfitPage from "./pages/OutfitPage";
import ArticlePage from "./pages/ArticlePage";

import './App.css';


function App() {
  return (

    <Router>
      <div>
        <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/closetPage">
          <ClosetPage />
        </Route>
        <Route exact path="/outfitPage">
          <OutfitPage />
        </Route>
        <Route exact path="/articlePage">
          <ArticlePage />
        </Route>
      </Switch>
      </div>
    </Router>

  );
}

export default App;
