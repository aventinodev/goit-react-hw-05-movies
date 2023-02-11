import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '31449444226ba6345698313fe055564a';

const instance = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export const getTrending = async (page = 1) => {
  const trending_movie = 'trending/movie/day';
  const response = await instance.get(`${trending_movie}?&page=${page}`);

  return response.data;
};

export const getMovieDetails = async movie_id => {
  const data = await instance.get(`/movie/${movie_id}`);

  return data;
};

export const getMovieCredits = async id => {
  const response = await instance.get(`movie/${id}/credits`);

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await instance.get(`movie/${id}/reviews`);

  return response.data;
};

export const searchMovies = async query => {
  const searchMovie = '/search/movie';
  const response = await instance.get(
    `${searchMovie}?&query=${query}&include_adult=false`
  );

  return response.data;
};
