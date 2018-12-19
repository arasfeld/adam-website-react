import React from 'react';
import { shallow } from 'enzyme';
import { NavLink } from 'react-router-dom';

import Nav from './Nav';

describe('<Nav />', () => {
  it('should render a nav', () => {
    const renderedComponent = shallow(<Nav mobileOpen={false} />);
    expect(renderedComponent.find('nav')).toHaveLength(1);
  });

  it('should render the links', () => {
    const renderedComponent = shallow(<Nav mobileOpen={false} />);
    expect(renderedComponent.find(NavLink)).not.toHaveLength(0);
  });
});
