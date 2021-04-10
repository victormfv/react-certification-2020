import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';
import { render, screen } from '@testing-library/react';

describe('App Component', () => {

    it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
    });

    it('child components render correct', () => {
      render(<App/>);
      const i = screen.getByText(/Dark Mode/i);
      expect(i).toBeInTheDocument();
    });

});