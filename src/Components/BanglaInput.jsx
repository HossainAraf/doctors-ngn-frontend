import React, { useState } from 'react';
import PropTypes from 'prop-types';

const BanglaInput = ({
  id, name, value, onChange, ...props
}) => {
  const [inputValue, setInputValue] = useState(value || '');
  const BanglaRegex = /^[\u0980-\u09FF\s.,()\-!@#$%^&*+=?/{}[\]<>:;"'\\|~`_]+$/;

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^\u0980-\u09FF\s.,()\-!@#$%^&*+=?/{}[\]<>:;"'\\|~`_]/g, '');
    setInputValue(newValue);
    if (onChange) onChange(event); // Ensure to call the parent onChange
  };

  return (
    <div>
      <input
        id={id}
        name={name}
        value={inputValue}
        onChange={handleChange}
        type={props.type || 'text'} // Defaulting to "text" if no type is passed
        placeholder={props.placeholder || ''} // Defaulting to empty string
        required={props.required || false} // Defaulting to false
        disabled={props.disabled || false}// Defaulting to false
      />
      {inputValue.length > 0 && !BanglaRegex.test(inputValue) && (
        <p>Please enter Bangla text only.</p>
      )}
    </div>
  );
};

// PROPS VALIDATION
BanglaInput.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string, // Optional, hence no .isRequired
  placeholder: PropTypes.string, // Optional
  required: PropTypes.bool, // Optional
  disabled: PropTypes.bool, // Optional
};

// DEFAULT PROPS
BanglaInput.defaultProps = {
  type: 'text', // Default to 'text'
  placeholder: '', // No placeholder by default
  required: false, // Not required by default
  disabled: false, // Not disabled by default
};

export default BanglaInput;
