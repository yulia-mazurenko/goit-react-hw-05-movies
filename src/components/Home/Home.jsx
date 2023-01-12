import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../services/fetchFilms';

export const Home = () => {
  const [films, setFilms] = useState([]);

  useEffect(() => {
    async function getTrendingFilms() {
      const data = await API.getTrendingFilms();
      const searchFilms = data.results;

      setFilms(searchFilms);

      try {
      } catch (error) {
        console.log(error);
        toast.error('Something went wrong :(. Try again.');
      }
    }
    getTrendingFilms();
  }, []);

  if (!films) {
    return;
  }

  return (
    <>
      <h2>Trending today</h2>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`movies/${film.id}`}>{film.title || film.name}</Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};
