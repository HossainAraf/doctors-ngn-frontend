import React, { useState } from 'react';

const BengaliInput = () => {
  const [inputValue, setInputValue] = useState('');
  const bengaliRegex = /^[\u0980-\u09FF]+$/; // Regular expression for Bengali characters

  const handleChange = (event) => {
    const newValue = event.target.value.replace(/[^\\u0980-\\u09FF]/g, '');
    setInputValue(newValue);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        lang="bn"
      />
      {inputValue.length > 0 && !bengaliRegex.test(inputValue) && (
        <p>Please enter Bengali text only.</p>
      )}
    </div>
  );
};

export default BengaliInput;
