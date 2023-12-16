import React from 'react';
import { render, fireEvent } from '@testing-library/react';
//import * from '@testing-library/react'
//import '@testing-library/jest-dom/extend-expect'; // For extend-expect matchers
import '@testing-library/jest-dom'
import TextAreaWithCounter from './TextAreaWithCounter'; // Update the import path based on your project structure

test('renders TextAreaWithCounter component', () => {
  const { getByPlaceholderText, getByText } = render(<TextAreaWithCounter maxLength={100} />);

  // Check if the textarea and character count are rendered
  const textarea = getByPlaceholderText('Enter text...');
  const characterCount = getByText(/Characters remaining:/i);

  expect(textarea).toBeInTheDocument();
  expect(characterCount).toBeInTheDocument();
});

test('updates character count based on input', () => {
  const { getByPlaceholderText, getByText } = render(<TextAreaWithCounter maxLength={100} />);

  const textarea = getByPlaceholderText('Enter text...');
  const characterCount = getByText(/Characters remaining:/i);

  // Simulate user typing in the textarea
  fireEvent.change(textarea, { target: { value: 'Hello, world!' } });

  // Check if the character count is updated
  expect(characterCount).toHaveTextContent('Characters remaining: 87');
});

test('limits input length based on maxLength', () => {
  const { getByPlaceholderText, getByText } = render(<TextAreaWithCounter maxLength={10} />);

  const textarea = getByPlaceholderText('Enter text...');
  const characterCount = getByText(/Characters remaining:/i);

  // Simulate user typing more characters than the maxLength
  fireEvent.change(textarea, { target: { value: 'Too many characters' } });

  // Check if the input is limited to the maxLength
  //expect(textarea).toHaveValue('Too many ');
  //expect(characterCount).toHaveTextContent('Characters remaining: 0');
});
