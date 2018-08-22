import React from 'react';
import { shallow } from 'enzyme';

import MongoIcon from '../MongoIcon';

describe('<MongoIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<MongoIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
