// import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  Link,
  NavLink,
  Outlet,
  // useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';

import { getMovieDetails } from 'services/api/fetchApi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { iconSize } from 'services/iconSize';
import css from './MovieInfoPage/MovieInfoPage.module.css';

export const MovieInfoPage = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [item, setItem] = useState({});

  useEffect(() => {
    setIsLoading(true);

    getMovieDetails(id)
      .then(({ data }) => {
        const { poster_path, original_title, overview, genres, vote_average } =
          data;
        console.log(data);
        const genresMovie = genres.map(genre => genre.name).join(', ');
        const userScore = Math.round(vote_average * 10);

        setItem({
          poster_path,
          original_title,
          userScore,
          overview,
          genresMovie,
        });
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [id, setItem]);

  const { poster_path, original_title, userScore, overview, genresMovie } =
    item;

  return (
    <main>
      <div className="container">
        <Link className={css.link} to={location.state.from}>
          <span>
            <BsArrowLeftShort
              size={iconSize.sm}
              style={{
                fill: 'inherit',
              }}
            />
          </span>
          Go back
        </Link>

        {isLoading && <Loader />}
        {error &&
          toast.error('Somthing wrong. Try again', {
            theme: 'colored',
            position: 'top-center',
          })}
        <div className={css.wrapper}>
          <div className={css.imgWrap}>
            <img
              src={`https://image.tmdb.org/t/p/w300/${poster_path}`}
              alt={original_title}
              width="300"
              height="500"
            />
          </div>
          <div>
            <h2 className={css.title}>{original_title}</h2>
            <p className={css.description}>User Score: {userScore}%</p>
            <h3 className={css.subtitle}>Overview</h3>
            <p className={css.description}>{overview}</p>
            <h3 className={css.subtitle}>Genres</h3>
            <p className={css.description}>{genresMovie}</p>
          </div>
        </div>
        <h3 className={css.subtitle}>Additional information</h3>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </main>
  );
};
