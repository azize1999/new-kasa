import React from 'react';
import './Home.scss';
import Home from '../../assets/images/accueil.png';

const Banner = () => {
  return (
    <div className="banner">
      <img src={Home} alt="accueil" className="banner-image" />
      <div className="banner-text">
        <h1>Chez vous, partout et ailleurs</h1>
       
      </div>
    </div>
  );
};

export default Banner;
