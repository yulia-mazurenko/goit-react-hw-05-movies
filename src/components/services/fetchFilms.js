import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3';
const TREND_URL = '/trending/all/day';
const SEARCH_URL = '/search/movie';
const DETAILS_URL = '/movie/';
const API_KEY = 'ae41ac8beda98b2e2d51e160e21365e8';

const getTrendingFilms = async () => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
  });

  const response = await axios.get(`${BASE_URL}${TREND_URL}?${searchParams}`);
  return response.data;
};

const searchMovie = async queryString => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en - US',
    query: queryString,
    page: 1,
    include_adult: false,
  });

  const response = await axios.get(`${BASE_URL}${SEARCH_URL}?${searchParams}`);
  return response.data;
};

const getMovieDetails = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en - US',
  });

  const response = await axios.get(
    `${BASE_URL}${DETAILS_URL}${id}?${searchParams}`
  );
  return response.data;
};

const getMovieCredits = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
  });

  const response = await axios.get(
    `${BASE_URL}${DETAILS_URL}${id}/credits?${searchParams}`
  );
  return response.data;
};

const getMovieReviews = async id => {
  const searchParams = new URLSearchParams({
    api_key: API_KEY,
    language: 'en-US',
    page: 1,
  });

  const response = await axios.get(
    `${BASE_URL}${DETAILS_URL}${id}/reviews?${searchParams}`
  );
  return response.data;
};

// https://api.themoviedb.org/3/trending/all/day?api_key=<<api_key>>
//https://api.themoviedb.org/3/search/movie?api_key=<<api_key>>&language=en-US&page=1&include_adult=false
//https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
//https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1

const API = {
  getTrendingFilms,
  searchMovie,
  getMovieDetails,
  getMovieCredits,
  getMovieReviews,
};

export default API;
