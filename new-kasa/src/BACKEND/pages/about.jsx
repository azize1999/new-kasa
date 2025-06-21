import React from "react";
import "./about.scss";
import Collapses from "../composant/collapses"; // Ton composant Collapse
import informations from "../composant/collapses.json"; // Assurez-vous que le chemin est correct

const Navbar = ({ title, image }) => {
  return (
    <div className="about">
      <img src={image} alt="à propos" className="about-image" />
      <div className="about-text">
        <h1>{title}</h1>
      </div>

      <div id ="about-collapses"className="about-collapses">
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
