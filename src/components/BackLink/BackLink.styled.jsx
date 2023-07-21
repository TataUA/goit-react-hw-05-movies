import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Button = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
  padding: 4px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 400;
  font-size: 14px;
  border: 1px solid black;
  &:hover {
    color: white;
    background-color: orangered;
  }
`;
