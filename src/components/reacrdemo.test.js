import React from 'react';
import { render, screen } from '@testing-library/react';
import ReactDemo from './reactdemo';

test('renders learn react link', () => {
  render(<ReactDemo />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
