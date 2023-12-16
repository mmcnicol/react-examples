import React from 'react';
import { render } from '@testing-library/react';
//import {render, screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import App from './App';

test('renders the correct text', () => {
  // Arrange: Render the component
  const { getByText } = render(<App />);

  // Act: Get the element with the text 'Hello from App!'
  const textElement = getByText(/Hello from App!/i);

  // Assert: Ensure that the text is present in the component
  expect(textElement).toBeInTheDocument();
});
