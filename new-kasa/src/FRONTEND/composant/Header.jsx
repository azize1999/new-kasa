import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';
import Logo from '../../assets/images/kasa_red.svg';

function Header() {
  const getActiveClass = ({ isActive }) => (isActive ? 'active' : '');

  return (
    <header className="header">
      <div className="logo">
        <img src={Logo} alt="Logo de la page d'accueil" />
      </div>
      <nav className="about">
        <ul>
          {[
            { path: '/', label: 'Accueil' },
            { path: '/about', label: 'A propos' },
          ].map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} className={getActiveClass}>{/* pour éviter la répétition du className. */}
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
