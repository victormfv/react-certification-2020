import React from 'react';
import renderer from 'react-test-renderer';
import App from './App.component';
describe('App Component', () => {
    it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
    });
});