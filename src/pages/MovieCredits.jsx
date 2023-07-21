import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';
import { Credits } from 'components/Credits/Credits';
import { getActorsInfo } from 'services/API';

const MovieCredits = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchActors() {
      try {
        setLoading(true);
        const response = await getActorsInfo(movieId);
        const actorsList = response.cast.map(
          ({ id, original_name, character, profile_path }) => ({
            id,
            original_name,
            character,
            profile_path,
          })
        );
        setActors(actorsList);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    fetchActors();
  }, [movieId]);

  return (
    <section>
      {loading && <Loader />}
      <Credits actors={actors} />
      {error && <div>Something went wrong... &#128576;</div>}
    </section>
  );
};

export default MovieCredits;
