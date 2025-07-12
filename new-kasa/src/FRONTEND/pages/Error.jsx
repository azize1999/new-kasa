import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './Error.scss';

const Error = () => {
  const { id } = useParams();
  
  const validIds = [
    "c67ab8a7", "b9123946", "46d188c5", "7af00cd6", "0979876d", "f72a452f",
    "b4c67936", "bc6f7112", "cb2f9222", "d60ca600", "2cf259e1", "5323c29b",
    "af6d2d48", "7cbb378e", "ba55a0cc", "1e181317", "1e180563", "2139a317",
    "6ff132c6", "cb02d69b"
  ];

  // Si l'ID n'est pas dans la liste, afficher la page d'erreur
  if (!validIds.includes(id)) {
    return (
      <section className="error">
        <header>
          <h1 className="error__title">404</h1>
        </header>
        <article>
          <p className="error__message">
            Oups! La page que &nbsp;

            <span> vous demandez n'existe pas.</span>
          </p>
          
        </article>
        
          <Link to="/" className="error__link">
            Retourner sur la page d'accueil
          </Link>
       
      </section>
    );
  }

  // Si l'ID est valide, retourner null (ne rien afficher)
  return null;
};

export default Error;