import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Adapte le chemin si besoin
import Error from '../pages/Error.jsx';
import './Details.scss';

const Details = () => {
  const { id } = useParams();

  // Cherche l'élément correspondant à l'ID
  const item = data.find(item => item.id === id);

  if (!item) {
    return <Error />;
  }

  return (
    <section className="details">
      <header>
        <h1 className="details__title">{item.title}</h1>
      </header>
      <article>
        <p className="details__description">{item.description}</p>
      </article>
    </section>
  );
};

export default Details;
