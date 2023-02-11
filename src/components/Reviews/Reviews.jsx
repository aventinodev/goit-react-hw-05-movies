import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { getMovieReviews } from 'services/api/fetchApi';

import css from 'components/Reviews/Reviews.module.css';

const Reviews = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(id)
      .then(({ results }) => {
        setReviews([...results]);
      })
      .catch(error => setError(error))
      .finally(setIsLoading(false));
  }, [id]);

  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Somthing wrong. Try again</p>}
      {!reviews.length ? (
        <p>No information</p>
      ) : (
        <ul className={css.list}>
          {reviews.map(({ id, author, content }) => (
            <li key={id} className={css.item}>
              <h4 className={css.subtitle}>Author: {author}</h4>
              <p>{content}</p>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};
Reviews.propTypes = {
  id: PropTypes.number.isRequired,
};
export default Reviews;
