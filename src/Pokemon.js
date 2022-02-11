import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { toTitle } from './utils';

export default function Pokemon({ poke }) {
  const [name, setName] = useState('');

  useEffect(() => {
    async function onLoad() {
      const data = await toTitle(poke.pokemon);
      setName(data);
    }
    onLoad();
  }, []);

  return (
    <Link to={`/pokemon/${poke.id}`}>
      <div className="poke">
        {name}
        <img className="poke-img" src={poke.url_image} />
      </div>
    </Link>
  );
}
