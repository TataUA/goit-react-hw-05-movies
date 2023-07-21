import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Item } from 'components/MoviesList/MovieList.styled';

export const MoviesList = ({ films }) => {
  const location = useLocation();

  return (
    <ul>
      {films.map(({ id, original_title }) => (
        <li key={id}>
          <Item to={`/movies/${id}`} state={{ from: location }}>
            <p>{original_title}</p>
          </Item>
        </li>
      ))}
    </ul>
  );
};

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
    })
  ),
};
