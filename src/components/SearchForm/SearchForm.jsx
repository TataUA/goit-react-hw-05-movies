import PropTypes from 'prop-types';
import { Input, Button } from 'components/SearchForm/SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    onSubmit(value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        name="search"
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies"
      />
      <Button type="submit">Search</Button>
    </form>
  );
};

SearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
