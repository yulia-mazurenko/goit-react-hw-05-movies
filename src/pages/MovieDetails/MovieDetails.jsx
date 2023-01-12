import { useState, useEffect, Suspense } from 'react';
import { NavLink, Outlet, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import API from '../../components/services/fetchFilms';
import { Placeholder } from '../../components/Placeholders/ImgPlaceholders/ImgPlaceholder';
import Box from 'components/Box';
import { BackButton } from './MovieDetails.styled';
import { ReactComponent as BackIcon } from '../../icons/back-arrow.svg';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w500';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [filmCard, setFilmCard] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function getDetails() {
      try {
        const filmDetails = await API.getMovieDetails(movieId);

        setFilmCard(filmDetails);
      } catch (error) {
        console.log(error);

        toast.error('Something went wrong :( Try again.');
      }
    }
    getDetails();
  }, [movieId]);

  if (filmCard === null) {
    return null;
  }

  const genresList = filmCard.genres.map(genre => genre.name).join(', ');

  const { poster_path, vote_average, popularity, title, name, overview } =
    filmCard;

  const navItems = [
    { href: 'cast', text: 'Cast' },
    { href: 'reviews', text: 'Reviews' },
  ];

  return (
    <>
      <BackButton onClick={() => navigate(-1)}>
        <BackIcon width="24" height="24" fill="currentColor" />
        Go Back
      </BackButton>
      <Box
        as="div"
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="300px"
        p={4}
      >
        {poster_path ? (
          <img
            src={`${BASE_URL}${IMG_SIZE}${poster_path}`}
            height="100%"
            alt="poster of film"
            loading="lazy"
          />
        ) : (
          <Placeholder />
        )}
        <Box as="div" p={4} maxWidth="70%">
          {title && <h2>{title}</h2>}
          {name && <h2>{name}</h2>}
          {vote_average !== 0 && <p>User score: {vote_average}</p>}
          {popularity && <p>Popularity: {popularity}</p>}
          {overview && (
            <div>
              <b>Overview</b>
              <p>{overview}</p>
            </div>
          )}
          {genresList && (
            <div>
              <b>Genres</b>
              <p>{genresList}</p>
            </div>
          )}
        </Box>
      </Box>

      <Box as="div" p={4}>
        <h3>Additional information</h3>

        <Box as="ul" display="flex" flexDirection="column">
          {navItems.map(({ href, text }) => {
            return (
              <li key={href}>
                <NavLink to={href}>{text}</NavLink>
              </li>
            );
          })}
        </Box>
      </Box>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
