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
import HomeBtn from './components/HomeBtn';

// import user here

function App() {
  return (

    <Router>
      <div>
        <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/closetPage" component={ClosetPage} />
        <Route exact path="/outfitPage" component={OutfitPage} />
        <Route exact path="/articlePage" component={ArticlePage} />
       
      </Switch>
      </div>
    </Router>

  );
}

export default App;
