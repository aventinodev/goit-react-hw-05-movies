// import PropTypes from 'prop-types';

// import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
// import { FcFilmReel } from 'react-icons/fc';
import { ImSearch } from 'react-icons/im';
import { iconSize } from 'services/iconSize';

import css from '../SearchMovie/SearchMovie.module.css';

export const SearchMovie = ({ onSubmit }) => {
  const [query, setQuery] = useState('');

  const handleChange = e => {
    setQuery(e.target.value.toLowerCase());
  };

  const handleSubmit = e => {
    e.preventDafault();
    if (query.trim() === '') {
      return alert('Enter your regust');
      // toast.warn('Enter your regust', {
      //   theme: 'colored',
      //   position: 'top-center',
      // });
    }
    onSubmit(query);
    e.target.reset();
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
