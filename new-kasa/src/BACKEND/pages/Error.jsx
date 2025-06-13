import React from 'react';
import { Link } from 'react-router-dom';
import './Error.scss';

function Error() {
  return (
    <section className="error">
      <header>
        <h1 className="error__title">404</h1>
      </header>
      <article>
        <p className="error__message">
          Oups! La page que vous recherchez n'existe pas.
        </p>
      </article>
      <footer>
        <Link to="/" className="error__link">
          Retourner sur la page d'accueil
        </Link>
      </footer>
    </section>
  );
}

export default Error;
