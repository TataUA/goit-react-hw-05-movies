import axios from 'axios';

const API_KEY = 'b2a327199ab710c06f4180e085359e4a';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: API_KEY,
  language: 'en',
};

export const getTrendingFilms = async () => {
  const { data } = await axios.get('/trending/movie/day');
  return data;
};

export const findFilmByName = async value => {
  const params = {
    query: value,
  };
  const { data } = await axios.get('/search/movie', { params });
  return data;
};

export const getFullInfo = async idFilm => {
  const { data } = await axios.get(`/movie/${idFilm}`);
  return data;
};

export const getActorsInfo = async idFilm => {
  const { data } = await axios.get(`movie/${idFilm}/credits`);
  return data;
};

export const getFilmReviews = async idFilm => {
  const { data } = await axios.get(`/movie/${idFilm}/reviews`);
  return data;
};
