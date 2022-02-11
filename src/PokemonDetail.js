import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';
import { toTitle } from './utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSinglePokemon(params.id);
      setPokemon(data);
    }
    onLoad();
  }, [params.id]);

  return (
    <>
      <Link to="/">Home</Link>
      <section className="detail-container">
        <div className="detail-card">
          <p>{pokemon.pokemon && toTitle(pokemon.pokemon)}</p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
        </div>
      </section>
    </>
  );
}
