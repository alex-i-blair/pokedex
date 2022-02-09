import React from 'react';
import Pokemon from './Pokemon';

export default function PokemonList({ pokemons }) {
  return (
    <div className="pokemons">
      {pokemons.map((poke, i) => (
        <Pokemon key={poke.id + i} poke={poke} />
      ))}
    </div>
  );
}
