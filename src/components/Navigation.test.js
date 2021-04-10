import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Navigation from './Navigation';

describe('Navigation Component', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Navigation/>).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('Title is correct', () => {
    render(<Navigation/>);
    const i = screen.getByText(/Dark Mode/i);
    expect(i).toBeInTheDocument();
  });

});