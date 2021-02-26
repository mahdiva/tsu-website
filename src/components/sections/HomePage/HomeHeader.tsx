import React from 'react';
import tsu_logo from 'images/logo_white_start.png';
import './HomeHeader.css';

function HomeHeader(){
    return <div className="homeHeader">
      <img className="homeHeader__logo" src={tsu_logo}></img>
      <div className="homeHeader__description">Tech Start UCalgary is a new club building software projects and exploring tech entrepreneurship.
      </div>
      <a className="homeHeader__cta" href="https://linktr.ee/techstartuofc">Learn more about us!</a>

      <p className="homeHeader__construction">This website is under construction... come back soon!</p>
    </div>
}

export default HomeHeader;