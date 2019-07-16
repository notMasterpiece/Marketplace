import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Btn = styled.button`
  background: #349a89;
  border-radius: 5px;
  padding: 20px 30px;
  color: #fff;
  width: 100%;
  max-width: 380px;
  text-align: center;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`;

const Button = ({ children, isLoading, type, isSubmitting }) => (
  <Btn type={type} disabled={isSubmitting || isLoading}>
    {isSubmitting ? 'Loading...' : children}
  </Btn>
);

Button.propTypes = {
  type: PropTypes.string,
  isSubmitting: PropTypes.bool,
  isLoading: PropTypes.bool,
  children: PropTypes.any,
};

export default Button;
