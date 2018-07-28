import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import OctocatIcon from '../index';

describe('<OctocatIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<OctocatIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
