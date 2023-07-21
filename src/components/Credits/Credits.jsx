import PropTypes from 'prop-types';
import comingSoon from 'images/comingSoon.jpg';
import { Section } from 'components/Credits/Credits.styled';

export const Credits = ({ actors }) => {
  return (
    <Section>
      {actors.map(({ id, original_name, character, profile_path }) => (
        <li key={id}>
          {!profile_path ? (
            <img src={comingSoon} alt={original_name} width="100" />
          ) : (
            <img
              src={`https://image.tmdb.org/t/p/w500${profile_path}`}
              alt={original_name}
              width="100"
            />
          )}
          <h4>{original_name}</h4>
          {character ? (
            <p>Character: {character}</p>
          ) : (
            <p>Character: unknown</p>
          )}
        </li>
      ))}
    </Section>
  );
};

Credits.propTypes = {
  actors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ),
};
