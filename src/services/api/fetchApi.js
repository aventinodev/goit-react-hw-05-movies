import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '31449444226ba6345698313fe055564a';

const TRENDING_MOVIE = 'trending/movie/day';
const SEARCH_MOVIE = 'search/movie';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getTrending = async (page = 1) => {
  const response = await instance.get(
    `${TRENDING_MOVIE}?api_key=${API_KEY}&page=${page}`
  );

  return response.data;
};

export const getMovieDetails = async movie_id => {
  const data = await instance.get(`/movie/${movie_id}?api_key=${API_KEY}`);

  return data;
};
