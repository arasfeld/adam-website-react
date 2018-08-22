import React from 'react';
import { shallow } from 'enzyme';

import DotNetCoreIcon from '../DotNetCoreIcon';

describe('<DotNetCoreIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<DotNetCoreIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
