import React from 'react';
import { shallow } from 'enzyme';

import Header from './Header';

describe('<Header />', () => {
  it('should render a header', () => {
    const renderedComponent = shallow(<Header />);
    expect(renderedComponent.find('header')).toHaveLength(1);
  });
});
