import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import NoImageAvailable from '../../../images/NoImageAvailable.jpg';
import css from '../MovieItem/MovieItem.module.css';

const MovieItem = ({ id, title, pathSrc }) => {
  const pathImg = 'https://image.tmdb.org/t/p/w300/';
  const location = useLocation();

  return (
    <li className={css.item}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        <div className={css.movieWrap}>
          <div className={css.imgWrap}>
            <img
              src={pathSrc ? `${pathImg}${pathSrc}` : NoImageAvailable}
              alt={title}
              className={css.imgMovie}
              loading="lazy"
              width="395"
              height="500"
            />
          </div>
          <h2 className={css.nameMovie}>{title}</h2>
        </div>
      </Link>
    </li>
  );
};
MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  pathSrc: PropTypes.string,
  title: PropTypes.string,
};

export default MovieItem;
