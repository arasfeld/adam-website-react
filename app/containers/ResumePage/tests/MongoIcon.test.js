import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import MongoIcon from '../MongoIcon';

describe('<MongoIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<MongoIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
