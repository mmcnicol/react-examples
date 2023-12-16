import React, { useState } from 'react';

const TextAreaWithCounter = ({ maxLength }) => {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;
    // If inputText is less than or equal to maxLength, update the state
    if (inputText.length <= maxLength) {
      setText(inputText);
    }
  };

  const remainingCharacters = maxLength - text.length;

  return (
    <div>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Enter text..."
        rows={5}
        cols={40}
      />
      <p>Characters remaining: {remainingCharacters}</p>
    </div>
  );
};

export default TextAreaWithCounter;
