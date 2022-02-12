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

  function handlePokeClick() {
    window.open(pokemon.pokedex);
  }

  return (
    <>
      <div className="nav-home">
        <Link to="/">Home</Link>
      </div>
      <section className="detail-container">
        {pokemon.pokemon && (
          <div onClick={handlePokeClick} className="detail-card">
            <div className="detail-top">
              <h1>{toTitle(pokemon.pokemon)}</h1>
              <img src={pokemon.url_image}></img>
            </div>
            <div className="detail-bottom">
              <div className="stat-container">
                <h4>Type 1:</h4>
                <p>{toTitle(pokemon.type_1)}</p>
              </div>
              <div className="stat-container">
                <h4>Type 2:</h4>
                <p>{toTitle(pokemon.type_2)}</p>
              </div>
              <div className="stat-container">
                <h4>Shape:</h4>
                <p>{toTitle(pokemon.shape)}</p>
              </div>
              <div className="stat-container">
                <h4>Ability 1:</h4>
                <p>{toTitle(pokemon.ability_1)}</p>
              </div>
              <div className="stat-container">
                <h4>Ability 2:</h4>
                <p>{toTitle(pokemon.ability_2)}</p>
              </div>
              <div className="stat-container">
                <h4>Hidden Ability:</h4>
                <p>{toTitle(pokemon.ability_hidden)}</p>
              </div>
              <div className="stat-container">
                <h4>Egg Group 1:</h4>
                <p>{toTitle(pokemon.egg_group_1)}</p>
              </div>
              <div className="stat-container">
                <h4>Egg Group 2:</h4>
                <p>{toTitle(pokemon.egg_group_2)}</p>
              </div>
              <div className="stat-container">
                <h4>Shape:</h4>
                <p>{toTitle(pokemon.shape)}</p>
              </div>
              <div className="stat-container">
                <h4>Pokebase:</h4>
                <p>{toTitle(pokemon.pokebase)}</p>
              </div>
              <div className="stat-container">
                <h4>Height:</h4>
                <p>{pokemon.height}</p>
              </div>
              <div className="stat-container">
                <h4>Weight:</h4>
                <p>{pokemon.weight}</p>
              </div>
              <div className="stat-container">
                <h4>Attack:</h4>
                <p>{pokemon.attack}</p>
              </div>
              <div className="stat-container">
                <h4>Defense:</h4>
                <p>{pokemon.defense}</p>
              </div>
              <div className="stat-container">
                <h4>HP:</h4>
                <p>{pokemon.hp}</p>
              </div>
            </div>
          </div>
        )}
      </section>
    </>
  );
}
