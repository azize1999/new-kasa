import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import accueilImage from '../../assets/images/accueil.png';
import data from '../data.json';

const Banner = ({ title, image }) => {
  return (
    <div className="banner">
      <img src={image} alt="accueil" className="banner-image" />
      <div className="banner-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
};
 
const Carte = ({ carte }) => {
  return (
    <div className="carte">
      <img src={carte.cover} alt={carte.title} />
      <h2>{carte.title}</h2>
    </div>
  );
};

const ListeCartes = ({ cartes }) => {
  return (
    <div className="liste-cartes">
      {cartes.map((carte) => (
        <Link to={`/carte/${carte.id}`} key={carte.id}>
          <Carte carte={carte} />
        </Link>
      ))}
    </div>
  );
};

const Home = () => {
  const [cartes] = useState(data); 

  return (
    <>
      <Banner title="Chez vous, partout et ailleurs" image={accueilImage} />
      <ListeCartes cartes={cartes} />
    </>
  );
};

export default Home;