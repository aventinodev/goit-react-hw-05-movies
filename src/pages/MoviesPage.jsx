import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

import SearchMovie from 'components/SearchMovie/SearchMovie';
import MoviesList from 'components/MoviesList/MoviesList';
import { searchMovies } from 'services/api/fetchApi';
import { showError } from 'services/utils/showError';

const MoviesPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [items, setItems] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }
    setIsLoading(true);
    searchMovies(query)
      .then(({ results }) => {
        setItems([...results]);
        if (!results.length) {
          showMessage();
          setSearchParams({ query: '' });
        }
      })
      .catch(error => setError(error.message))
      .finally(() => setIsLoading(false));
  }, [query, setSearchParams]);

  const handleFormSubmit = query => {
    setSearchParams({ query: query });
    setItems([]);
  };

  const showMessage = query => {
    return alert('We did not find such movie');
  };
  return (
    <main>
      {error && showError()}
      <SearchMovie onSubmit={handleFormSubmit} />
      {isLoading && <Loader />}
      <MoviesList movies={items} />
    </main>
  );
};
export default MoviesPage;
