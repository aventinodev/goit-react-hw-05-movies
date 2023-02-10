import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { toast } from 'react-toastify';
import { getTrending } from 'services/api/fetchApi';

import { MoviesList } from 'components/MoviesList/MoviesList';

export const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setIsLoading(true);

    getTrending()
      .then(({ results }) => {
        const movies = results.map(({ id, original_title, poster_path }) => {
          return { id, original_title, poster_path };
        });

        setItems([...movies]);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => setIsLoading(false));
  }, [setItems]);

  return (
    <main>
      <div className="container">
        <h1 className="title">Trending today</h1>
        {isLoading && <Loader />}
        {error &&
          toast.error('Somthing wrong. Try again', {
            theme: 'colored',
            position: 'top-center',
          })}
        <MoviesList movies={items} />
      </div>
    </main>
  );
};
