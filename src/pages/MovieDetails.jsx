import { useState, useEffect, useRef } from 'react';
import { Outlet, useParams, useLocation } from 'react-router-dom';
import { BackLink } from 'components/BackLink/BackLink';
import { MovieItem } from 'components/MovieItem/MovieItem';
import { Loader } from 'components/Loader/Loader';
import { getFullInfo } from 'services/API';
import { Section, Details } from 'components/MovieDetails/MovieDetails.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkHref = useRef(location.state?.from ?? '/');

  const [filmDetails, setFilmDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    async function filmInfo() {
      try {
        setLoading(true);
        const response = await getFullInfo(movieId);
        setFilmDetails(response);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    filmInfo();
  }, [movieId]);

  return (
    <main>
      <BackLink to={backLinkHref.current}>Go back</BackLink>
      {loading && <Loader />}
      {filmDetails && <MovieItem filmDetails={filmDetails} />}
      {error && <div>Something went wrong... &#128576;</div>}
      <p>Additional information</p>
      <Section>
        <li>
          <Details to="cast">cast</Details>
        </li>
        <li>
          <Details to="reviews">review</Details>
        </li>
      </Section>
      <Outlet />
    </main>
  );
};

export default MovieDetails;
