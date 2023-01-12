import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import API from '../services/fetchFilms';
import { ReviewTitle, ReviewText } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviewList, setReviewList] = useState(null);

  useEffect(() => {
    const getReviews = async () => {
      try {
        const filmReviews = await API.getMovieReviews(movieId);
        setReviewList(filmReviews);
      } catch (error) {
        toast.error('Something went wrong :(. Try again.');
        console.log(error);
      }
    };
    getReviews();
  }, [movieId]);

  if (reviewList === null) {
    return null;
  }

  return (
    <>
      {reviewList.results.length !== 0 ? (
        <ul>
          {reviewList.results.map(({ id, author, content }) => {
            return (
              <li key={id}>
                <ReviewTitle>{author}</ReviewTitle>
                <ReviewText>{content}</ReviewText>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
};
export default Reviews;
