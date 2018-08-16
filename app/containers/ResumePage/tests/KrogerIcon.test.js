import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import KrogerIcon from '../KrogerIcon';

describe('<KrogerIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<KrogerIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});