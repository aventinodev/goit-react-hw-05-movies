import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits } from 'services/api/fetchApi';
import { toast } from 'react-toastify';
import NoImageAvailable from '../../images/NoImageAvailable.jpg';
import css from 'components/Cast/Cast.module.css';

import { Loader } from 'components/Loader/Loader';

export const Cast = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [cast, setCast] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(id)
      .then(({ cast }) => {
        setCast([...cast]);
      })
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, [id]);
  const pathImg = 'https://image.tmdb.org/t/p/w300/';
  return (
    <ul className={css.list}>
      {isLoading && <Loader />}
      {error &&
        toast.error('Somthing wrong. Try again', {
          theme: 'colored',
          position: 'top-center',
        })}
      {cast.map(({ id, profile_path, original_name, character }) => (
        <li key={id} className={css.item}>
          <div className={css.imgWrap}>
            <img
              src={
                profile_path ? `${pathImg}${profile_path}` : NoImageAvailable
              }
              alt={original_name}
              width="200"
            />
          </div>
          <p className={css.text}>{original_name}</p>
          <p className={css.text}>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};
