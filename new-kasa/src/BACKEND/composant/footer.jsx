import React from 'react';
import './Footer.scss';
import Image from "../../assets/images/kasa_white.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content">
        <img src={Image} alt="" />
        <p>© 2020 Kasa. All rights reserved.</p>
      </div>
    </footer>
  );
};


export default Footer;
