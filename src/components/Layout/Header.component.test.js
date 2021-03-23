import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Header from './Header.component';

describe('Header Component', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Header/>).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Title is correct', () => {
    render(<Header/>);
    const i = screen.getByText(/Dark Mode/i);
    expect(i).toBeInTheDocument();
  });
});