import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import DotNetCoreIcon from '../index';

describe('<DotNetCoreIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<DotNetCoreIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
