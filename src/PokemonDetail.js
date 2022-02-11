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
        {pokemon.pokemon && (
          <div className="detail-card">
            <h1>{toTitle(pokemon.pokemon)}</h1>
            <img src={pokemon.url_image}></img>
            <div className="stat-container">
              <h2>Type:</h2>
              <p>{toTitle(pokemon.type_1)}</p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
            <div>
              <h2></h2>
              <p></p>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
