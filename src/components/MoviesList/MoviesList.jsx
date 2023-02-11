import PropTypes from 'prop-types';

import { MovieItem } from './MovieItem/MovieItem';
import css from '../MoviesList/MovieList.module.css';

export const MoviesList = ({ movies }) => {
  return (
    <div>
      <ul className={css.list}>
        {movies.map(({ id, original_title, poster_path }) => (
          <MovieItem
            key={id}
            id={id}
            title={original_title}
            pathSrc={poster_path}
          />
        ))}
      </ul>
    </div>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string,
      poster_path: PropTypes.string,
    }).isRequired
  ).isRequired,
};
