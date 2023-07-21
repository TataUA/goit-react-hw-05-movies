import { HiArrowLeft } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { Button } from 'components/BackLink/BackLink.styled';

export const BackLink = ({ to, children }) => {
  return (
    <Button to={to}>
      <HiArrowLeft size="14" />
      {children}
    </Button>
  );
};

BackLink.propTypes = {
  to: PropTypes.object,
  children: PropTypes.string,
};
