import React from 'react';
import './navbar.scss';

const Navbar = ({ title, image }) => {
  return (
    <div className="Àpropos">
      <img src={image} alt="À propos" className="Àpropos-image" />
      <div className="Àpropos-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};

export default Navbar;