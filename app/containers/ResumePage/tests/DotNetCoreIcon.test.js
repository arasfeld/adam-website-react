import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import DotNetCoreIcon from '../DotNetCoreIcon';

describe('<DotNetCoreIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<DotNetCoreIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
