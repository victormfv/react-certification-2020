import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <h1>Page Not Found</h1>
      <Link to="/" className="home-link">
        Go home
      </Link>
    </section>
  );
}

export default NotFound;
