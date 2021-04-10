import React from 'react';
import renderer from 'react-test-renderer';
import Layout from './Layout';
import { render, screen } from '@testing-library/react';

describe('Layout Component', () => {

    it('renders correctly', () => {
      const tree = renderer.create(<Layout/>).toJSON();
      expect(tree).toMatchSnapshot();
    });

    it('child components render correct', () => {
      render(<Layout/>);
      const i = screen.getByText(/Dark Mode/i);
      expect(i).toBeInTheDocument();
    });
    
  });