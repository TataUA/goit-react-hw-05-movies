import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.ul`
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.4);
`;

export const Details = styled(Link)`
  &:hover {
    color: orangered;
  }
`;
