import React from 'react';
import{
  BrowserRouter as Router,
  Route,
  Link,
  Redirect,
  Switch,
} from "react-router-dom";
import HomeMenuBody from './HomeMenuBody';
import homeMenuInfo from '../homeMenuBody.json'

function HomeMenu() {
  return (
      <ul className="collapsible">
        <li>
          <div className="collapsible-header"><i className="large material-icons">grid_on</i>My Closet</div>
          <div className="collapsible-body">
            <HomeMenuBody 
              para={homeMenuInfo.myCloset.para}
              img={homeMenuInfo.myCloset.img}
              title={homeMenuInfo.myCloset.title}
              link={homeMenuInfo.myCloset.link}
            />
          </div>
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">wc</i>My Outfits</div>
          <div className="collapsible-body">
            <HomeMenuBody 
              para={homeMenuInfo.myOutfits.para}
              img={homeMenuInfo.myOutfits.img}
              title={homeMenuInfo.myOutfits.title}
              link={homeMenuInfo.myOutfits.link}
            />
          </div>        
        </li>
        <li>
          <div className="collapsible-header"><i className="material-icons">group</i>My Articles</div>
          <div className="collapsible-body">
            <HomeMenuBody 
              para={homeMenuInfo.myArticles.para}
              img={homeMenuInfo.myArticles.img}
              title={homeMenuInfo.myArticles.title}
              link={homeMenuInfo.myArticles.link}
            />
          </div>
        </li>
        <li>
          <div className="collapsible-header" id="login-btn">
            <i className="large material-icons">lock</i>
            <Link to="/auth">Account</Link>
          </div>
        </li>

      </ul>
  )
}

export default HomeMenu;