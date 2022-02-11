import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getSinglePokemon } from './services/fetch-utils';
import { toTitle } from './utils';

export default function PokemonDetail() {
  const [pokemon, setPokemon] = useState({});
  const [name, setName] = useState('');
  const params = useParams();

  useEffect(() => {
    async function onLoad() {
      const data = await getSinglePokemon(params.id);
      setPokemon(data);
    }
    onLoad();
  }, [params.id]);
  useEffect(() => {
    async function onLoad() {
      const data = await toTitle(params.pokemon);
      setName(data);
    }
    onLoad();
  }, [params.pokemon]);

  return (
    <>
      <Link to="/">Home</Link>
      <div className="detail-container">
        <div className="detail-card">
          <p>{name}</p>
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
      </div>
    </>
  );
}
