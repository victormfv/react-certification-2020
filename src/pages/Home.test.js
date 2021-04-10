import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import Home from './Home';

describe('Home Page', () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Home/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('Child component render is correct', () => {
      render(<Home/>);
      const i = screen.getByText(/Loading videos.../i);
      expect(i).toBeInTheDocument();
    });
  });