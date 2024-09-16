import React from 'react';

const Button = ({ label, onClick, className }) => (
  <button type="button" onClick={onClick} className={className}>
    {label}
  </button>
);

export default Button;
