import React from 'react';
import './Footer.scss';
import Image from "../../assets/images/kasa_white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <img src={Image} alt="" />
        <p>© 2020 Kasa. 
          <span>All rights reserved.</span>
        </p>
      </div>
    </footer>
  );
};


export default Footer;
