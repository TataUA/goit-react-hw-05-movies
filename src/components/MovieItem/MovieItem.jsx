import PropTypes from 'prop-types';
import { Section, Poster } from 'components/MovieItem/MovieItem.styled';

export const MovieItem = ({ filmDetails }) => {
  const {
    original_title,
    release_date,
    overview,
    genres,
    poster_path,
    vote_average,
  } = filmDetails;
  const releaseYear = release_date.split('-')[0];
  const genresList = genres?.map(genre => genre.name).join(', ');
  const popularity = Math.round(vote_average * 10);

  return (
    <Section>
      <Poster
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={original_title}
        width="200"
      />
      <div>
        <h2>
          {original_title} ({releaseYear})
        </h2>
        <p>{popularity} %</p>
        <h3>Overview </h3>
        <p>{overview}</p>
        <h3>Genres </h3>
        <p>{genresList}</p>
      </div>
    </Section>
  );
};

MovieItem.propTypes = {
  filmDetails: PropTypes.shape({
    original_title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    poster_path: PropTypes.string.isRequired,
    vote_average: PropTypes.number.isRequired,
  }),
};
