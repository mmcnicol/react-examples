import React from 'react';
import { render } from '@testing-library/react';
//import {render, screen} from '@testing-library/react'
//import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Widget from './Widget';

test('renders the correct text', () => {
  // Arrange: Render the component
  const { getByText } = render(<Widget />);

  // Act: Get the element with the text 'Hello from React!'
  const textElement = getByText(/Hello from Widget!/i);

  // Assert: Ensure that the text is present in the component
  expect(textElement).toBeInTheDocument();
});
