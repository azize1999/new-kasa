import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Error from '../pages/Error.jsx';
import './Details.scss';

const Details = () => {
  const { id } = useParams();
  const item = data.find(item => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!item) {
    return <Error />;
  }

  const pictures = item.pictures || [item.cover]; // fallback au cas où

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? pictures.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === pictures.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="details">
      <div className="details__cover-wrapper">
        <img
          src={pictures[currentIndex]}
          alt={item.title}
          className="details__cover"
        />
        {pictures.length > 1 && (
          <>
           <button className="arrow left" onClick={handlePrev}>
            <i className="fa-solid fa-chevron-left"></i>
          </button>
          <button className="arrow right" onClick={handleNext}>
            <i className="fa-solid fa-chevron-right"></i>
          </button>

          </>
        )}
      </div>

      <header>
        <h1 className="details__title">{item.title}</h1>
        <p>Ile de France - Paris 10e</p>
      </header>
      <article>
        <p className="details__description">{item.description}</p>
      </article>
    </section>
  );
};

export default Details;
