import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { SearchBox } from '../../components/SearchBox/SearchBox';
import API from '../../components/services/fetchFilms';

const Movies = () => {
  const [movieList, setMovieList] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const queryParam = searchParams.get('search_query');
  const [query, setQuery] = useState('' || queryParam);

  const getQuery = value => {
    setQuery(value);
    setSearchParams(value !== '' ? { search_query: value } : {});
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function searchMoviesByName() {
      try {
        const filmsList = await API.searchMovie(query);
        setMovieList(filmsList);
      } catch (error) {
        toast.error('Something went wrong :(. Try again.');
        console.log(error);
      }
    }
    searchMoviesByName();
  }, [query, queryParam]);

  return (
    <>
      <SearchBox onSearch={getQuery} />
      {movieList && (
        <ul>
          {movieList.results.map(movie => {
            return (
              <li key={movie.id}>
                <NavLink to={`${movie.id}`}>
                  {movie.title || movie.name}
                </NavLink>
              </li>
            );
          })}
        </ul>
      )}
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movies;
