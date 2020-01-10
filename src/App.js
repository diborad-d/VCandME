import React from 'react';
import 'bulma/css/bulma.css';
import { useAuth0 } from './contexts/auth0-context';
import Header from './components/Header';


import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClosetPage from "./pages/ClosetPage";
import OutfitPage from "./pages/OutfitPage";
import ArticlePage from "./pages/ArticlePage";

import "./App.css";
import HomeBtn from "./components/HomeBtn";

// import user here

function App() {
  const { isLoading, user, loginWithRedirect, logout } = useAuth0();

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/closetPage" component={ClosetPage} />
          <Route exact path="/outfitPage" component={OutfitPage} />
          <Route exact path="/articlePage" component={ArticlePage} />

          <Route exact path="/auth">
            <>
              <Header />
              <div className="hero is-info is-fullheight">
                <div className="hero-body">
                  <div className="container has-text-centered">
                    {!isLoading && !user && (
                      <>
                        <h1>Click Below!</h1>
                        <button onClick={loginWithRedirect} className="button is-danger">
                          Login
                        </button>
                      </>
                    )}
                    {!isLoading && user && (
                      <>
                        <h1>You are logged in!</h1>
                        <p>Hello {user.name}</p>

                        {user.picture && <img src={user.picture} alt="My Avatar" />}
                        <hr />

                        <button onClick={() => logout({ returnTo: window.location.origin })} className="button is-small is-dark">
                          Logout
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;