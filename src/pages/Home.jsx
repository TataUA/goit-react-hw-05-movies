import { useState, useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { getTrendingFilms } from 'services/API';

const Home = () => {
  const [filmsDay, setFilmsDay] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function trendingFilms() {
      try {
        setLoading(true);
        const response = await getTrendingFilms();
        const films = response.results.map(
          ({ poster_path, id, original_title }) => ({
            poster_path,
            id,
            original_title,
          })
        );
        setFilmsDay(films);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    trendingFilms();
  }, []);

  return (
    <main>
      <h1>Trending today</h1>
      {loading && <Loader />}
      <MoviesList films={filmsDay} />
      {error && <div>Something went wrong... &#128576;</div>}
    </main>
  );
};

export default Home;
