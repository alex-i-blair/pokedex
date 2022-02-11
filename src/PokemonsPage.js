import React, { useEffect, useState } from 'react';
import { getPokemon } from './services/fetch-utils';
import PokemonList from './PokemonList';

function PokemonsPage() {
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  const [pokemons, setPokemons] = useState([]);
  const PER_PAGE = 20;

  useEffect(() => {
    async function fetchIt() {
      const start = PER_PAGE * (page - 1) + 1;
      const end = start - 1 + PER_PAGE;
      const pokes = await getPokemon(start, end, search);
      console.log(pokes);
      setPokemons(pokes);
    }
    fetchIt();
  }, [page, search]);

  return (
    <>
      <section className="header-container">
        <h2>Current Page {page}</h2>
        <div className="buttons">
          <h3>Search</h3>
          <input onChange={(e) => setSearch(e.target.value)} />
          <button onClick={() => setPage(page - 1)} disabled={page === 1}>
            Previous
          </button>
          <button onClick={() => setPage(page + 1)} disabled={pokemons.length < PER_PAGE}>
            Next
          </button>
        </div>
      </section>
      <div className="list-container">
        <PokemonList pokemons={pokemons} />
      </div>
    </>
  );
}

export default PokemonsPage;
