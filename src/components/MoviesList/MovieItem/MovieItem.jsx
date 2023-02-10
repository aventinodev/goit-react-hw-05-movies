import { Link, useLocation } from 'react-router-dom';

import css from '../MovieItem/MovieItem.module.css';

export const MovieItem = ({ id, title, pathSrc }) => {
  const pathImg = 'https://image.tmdb.org/t/p/w300/';
  const location = useLocation();

  return (
    <li className={css.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div className={css.movieWrap}>
          <div className={css.imgWrap}>
            <img
              src={`${pathImg}${pathSrc}`}
              alt={title}
              className={css.imgMovie}
              loading="lazy"
              width="395"
              height="569"
            />
          </div>
          <h2 className={css.nameMovie}>{title}</h2>
        </div>
      </Link>
    </li>
  );
};
