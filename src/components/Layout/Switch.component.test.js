import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Switch from './Switch.component';

describe('Switch Component', () => {

  it('renders correctly', () => {
    const tree = renderer.create(<Switch text="Dark Mode" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Title is correct', () => {
    render(<Switch text="Dark Mode" />);
    const i = screen.getByText(/Dark Mode/i);
    expect(i).toBeInTheDocument();
  });
});