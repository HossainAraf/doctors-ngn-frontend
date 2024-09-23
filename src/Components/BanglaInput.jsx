import React, { useState } from 'react';

const BanglaInput = ({ id, name, value, onChange, ...props }) => {
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
        {...props}
      />
      {inputValue.length > 0 && !BanglaRegex.test(inputValue) && (
        <p>Please enter Bangla text only.</p>
      )}
    </div>
  );
};

export default BanglaInput;
