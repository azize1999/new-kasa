import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Error from '../pages/Error.jsx';
import Collapses from '../composant/collapses.jsx';
import './Details.scss';

// Composant Owner
const Owner = (props) => (
  <div className="owner">
    <p>{props.host.name}</p>
    <img 
      src={props.host.picture} 
      alt={props.host.name} 
      className="host-picture" 
    />
  </div>
);

 
// Composant Rating
const Rating = ({ rating }) => (
  <div className="etoile">
    {Array.from({ length: 5 }).map((_, i) => (
      <i
        key={i}
        className={`fa-solid fa-star ${i < rating ? 'filled' : ''}`}
      />
    ))}
  </div>
);
 
// Composant Tags
const Tags = ({ tags }) => (
  <div className="labels">
    {tags.map((tag) => (
      <span key={tag} className="label">
        {tag}
      </span>
    ))}
  </div>
);

const Details = () => {
  const { id } = useParams();
  const item = data.find((item) => item.id === id);

  const [currentIndex, setCurrentIndex] = useState(0);

  if (!item) {
    return <Error />;
  }

  const pictures = item.pictures || [item.cover];

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

      <header className="details__header">
        <div className="details__info">
          <div className="details__header-row">
        <h1 className="details__title">{item.title}</h1>
       <div className='score'>
        {item.host && <Owner host={item.host} />}
       {item.rating && <Rating rating={parseInt(item.rating, 10)} />}
       </div>
      </div>
        <p className="details__location">{item.location}</p>
          {item.tags && <Tags tags={item.tags} />}
        </div>
      </header>
    <div className='double-collapses'>
   <Collapses title="Description" description={item.description} />
      <Collapses 
        title="Équipements" 
        description={
          <ul>
            {item.equipments?.map((equipment, index) => (
              <li key={index}>{equipment}</li>
            ))}
          </ul>
        } />
        </div>
    </section>
  );
};

export default Details;
