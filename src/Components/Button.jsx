import React from 'react';
import { PropTypes } from 'prop-types';

const Button = ({ label, onClick, className }) => (
  <button type="button" onClick={onClick} className={className}>
    {label}
  </button>
);

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

export default Button;
