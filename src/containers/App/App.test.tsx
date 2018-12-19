import React from 'react';
import { shallow } from 'enzyme';
import { Route } from 'react-router-dom';

import App from './App';
import Header from '../../components/Header';

describe('<App />', () => {
  it('should render the header', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Header)).toHaveLength(1);
  });

  it('should render some routes', () => {
    const renderedComponent = shallow(<App />);
    expect(renderedComponent.find(Route)).not.toHaveLength(0);
  });
});
