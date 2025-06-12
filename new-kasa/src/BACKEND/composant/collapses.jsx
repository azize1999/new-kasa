import React, { useState } from "react";
import './collapses.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const Collapse = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="collapse">
      <div
        className="collapse-header"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h2>{title}</h2>
        <i className={`fa-solid ${isOpen ? "fa-chevron-up" : "fa-chevron-down"}`}></i>
      </div>
      {isOpen && <div className="collapse-content">{description}</div>}
    </div>
  );
};

export default Collapse;
