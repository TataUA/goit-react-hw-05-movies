import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilmReviews } from 'services/API';
import { Loader } from 'components/Loader/Loader';
import { Reviews } from 'components/Reviews/Reviews';

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchReview() {
      try {
        setLoading(true);
        const response = await getFilmReviews(movieId);
        const reviewsMovie = response.results.map(
          ({ id, author, content }) => ({
            id,
            author,
            content,
          })
        );
        setReviews(reviewsMovie);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchReview();
  }, [movieId]);

  return (
    <section>
      {loading && <Loader />}
      {reviews.length === 0 ? (
        <div>We don't have any reviews for this movie.</div>
      ) : (
        <Reviews reviews={reviews} />
      )}
      {error && <div>Something went wrong... &#128576;</div>}
    </section>
  );
};

export default MovieReviews;
