import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import MongoIcon from '../index';

describe('<MongoIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<MongoIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
