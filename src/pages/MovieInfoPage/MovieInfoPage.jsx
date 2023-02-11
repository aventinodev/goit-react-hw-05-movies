import { useState, useEffect, Suspense } from 'react';
import {
  NavLink,
  Outlet,
  useNavigate,
  useParams,
  useLocation,
} from 'react-router-dom';

import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import NoImageAvailable from '../../images/NoImageAvailable.jpg';
import { getMovieDetails } from 'services/api/fetchApi';
import { BsArrowLeftShort } from 'react-icons/bs';
import { iconSize } from 'services/utils/iconSize';
import css from '../MovieInfoPage/MovieInfoPage.module.css';

export const MovieInfoPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';

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

  const GoBack = () => navigate(from);
  const { poster_path, original_title, userScore, overview, genresMovie } =
    item;
  const pathImg = 'https://image.tmdb.org/t/p/w300/';
  return (
    <main>
      <div className="container">
        <button type="button" onClick={GoBack} className={css.button}>
          <span>
            <BsArrowLeftShort
              size={iconSize.sm}
              style={{
                fill: 'inherit',
              }}
            />
          </span>
          Go back
        </button>

        {isLoading && <Loader />}
        {error &&
          toast.error('Somthing wrong. Try again', {
            theme: 'colored',
            position: 'top-center',
          })}
        <div className={css.wrapper}>
          <div className={css.imgWrap}>
            <img
              src={poster_path ? `${pathImg}${poster_path}` : NoImageAvailable}
              alt={original_title}
              width="300"
              height="500"
            />
          </div>
          <div>
            <h2 className={css.title}>{original_title}</h2>
            <p className={css.description}>
              User Score: {userScore ? userScore + '%' : 'no information'}
            </p>
            <h3 className={css.subtitle}>Overview</h3>
            <p className={css.description}>
              {overview ? overview : 'no information'}
            </p>
            <h3 className={css.subtitle}>Genres</h3>
            <p className={css.description}>
              {genresMovie ? genresMovie : 'no information'}
            </p>
          </div>
        </div>
        <h3 className={css.subtitle}>Additional information</h3>
        <ul className={css.list}>
          <li className={css.item}>
            <NavLink
              className={css.link}
              state={{ from }}
              to={`/movies/${id}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li className={css.item}>
            <NavLink
              className={css.link}
              state={{ from }}
              to={`/movies/${id}/reviews`}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </main>
  );
};
