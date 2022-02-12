import { Link } from 'react-router-dom';
import { toTitle } from './utils';

export default function Pokemon({ poke }) {
  return (
    <Link to={`/pokemon/${poke.id}`}>
      <div className="poke">
        {toTitle(poke.pokemon)}
        <img className="poke-img" src={poke.url_image} />
      </div>
    </Link>
  );
}
