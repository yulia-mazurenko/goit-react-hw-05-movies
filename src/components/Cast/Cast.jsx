import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/fetchFilms';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CastTitle, CastText, CastCard } from './Cast.styled';
import Box from '../Box';
import { PhotoPlaceholder } from '../Placeholders/PhotoActorPlaceholder/PhotoActorPlaceholder';

const BASE_URL = 'https://image.tmdb.org/t/p/';
const IMG_SIZE = 'w500';

const Cast = () => {
  const { movieId } = useParams();
  const [actorList, setActorList] = useState(null);

  useEffect(() => {
    async function getCast() {
      try {
        const cast = await API.getMovieCredits(movieId);

        setActorList(cast);
      } catch (error) {
        toast.error('Something went wrong :(. Try again.');
      }
    }
    getCast();
  }, [movieId]);

  if (actorList === null) {
    return null;
  }

  return (
    <Box as="ul" display="flex" flexWrap="wrap" gridGap="50px">
      {actorList.cast.map(({ name, character, profile_path }) => {
        return (
          <CastCard key={name}>
            {profile_path ? (
              <img
                src={`${BASE_URL}${IMG_SIZE}${profile_path}`}
                width="100%"
                alt="actor"
              />
            ) : (
              <PhotoPlaceholder />
            )}

            <CastTitle>{name}</CastTitle>
            <CastText>
              <i>Character:</i> {character}
            </CastText>
          </CastCard>
        );
      })}
      ;
    </Box>
  );
};

export default Cast;
