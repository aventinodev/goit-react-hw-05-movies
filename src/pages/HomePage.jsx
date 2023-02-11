import { useState, useEffect } from 'react';

import { Loader } from 'components/Loader/Loader';

import { showError } from 'services/utils/showError';
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
        setItems([...results]);
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
        {error && showError()}
        <MoviesList movies={items} />
      </div>
    </main>
  );
};
