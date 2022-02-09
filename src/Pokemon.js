import React from 'react';
import { Link } from 'react-router-dom';

export default function Pokemon({ poke }) {
  return (
    <Link to={`/pokemon/${poke.id}`}>
      <div className="poke">
        {poke.pokemon}
        <img className="poke-img" src={poke.url_image} />
      </div>
    </Link>
  );
}
