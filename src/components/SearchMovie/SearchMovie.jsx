import PropTypes from 'prop-types';
import { useState } from 'react';

import { ImSearch } from 'react-icons/im';
import { iconSize } from 'services/utils/iconSize';

import css from '../SearchMovie/SearchMovie.module.css';

const SearchMovie = ({ onSubmit, initialState }) => {
  const [query, setQuery] = useState(initialState ?? '');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (query.trim() === '') {
      return alert('Enter your regust');
    }
    onSubmit(query);
    // e.target.reset();
  };

  return (
    <div className="container">
      <form className={css.form} action="" onSubmit={handleSubmit}>
        <input
          className={css.input}
          type="text"
          name="query"
          value={query}
          placeholder="Enter your request"
          onChange={handleChange}
          // required
        />

        <button className={css.btn} type="submit">
          <ImSearch
            size={iconSize.md}
            style={{
              fill: '#212121',
            }}
          />
        </button>
      </form>
    </div>
  );
};

SearchMovie.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
export default SearchMovie;
