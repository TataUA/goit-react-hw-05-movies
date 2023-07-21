import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchForm } from 'components/SearchForm/SearchForm';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { findFilmByName } from 'services/API';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieName = searchParams.get('query') ?? '';

  const [filmsByName, setFilmsByName] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!movieName) {
      return;
    }
    async function findFilms() {
      try {
        setLoading(true);
        const response = await findFilmByName(movieName);
        const films = response.results.map(({ id, original_title }) => ({
          id,
          original_title,
        }));
        setFilmsByName(films);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }
    findFilms();
  }, [movieName]);

  const handleChange = value => {
    if (value === '') {
      alert('You need write something...');
      return;
    }
    setSearchParams({
      query: value.toLowerCase(),
    });
    setFilmsByName([]);
  };

  return (
    <main>
      <SearchForm onSubmit={handleChange} />
      {loading && <Loader />}
      {filmsByName.length === 0 && movieName ? (
        <div>Sorry, but nothing was found for your request &#x2639;</div>
      ) : (
        <MoviesList films={filmsByName} />
      )}
      {error && <div>Something went wrong... &#128576;</div>}
    </main>
  );
};

export default Movies;
