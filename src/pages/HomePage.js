import React from 'react';
import Header from '../components/Header';
import HomeMenu from '../components/HomeMenu';



function HomePage() {

  return (
    <div className="container">
       <Header title="Virtual Closet"/>
       <HomeMenu /> 
    </div>

  );
}

export default HomePage;
