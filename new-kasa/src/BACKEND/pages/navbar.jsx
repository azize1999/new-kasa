import React from "react";
import "./navbar.scss";
import Collapses from "../composant/collapses"; // Ton composant Collapse
import informations from "../composant/collapses.json"; // Assurez-vous que le chemin est correct

const Navbar = ({ title, image }) => {
  return (
    <div className="navbar">
      <img src={image} alt="à propos" className="navbar-image" />
      <div className="navbar-text">
        <h1>{title}</h1>
      </div>

      <div className="navbar-collapses">
        {informations.map((item, index) => (
          <Collapses
            key={index}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Navbar;
