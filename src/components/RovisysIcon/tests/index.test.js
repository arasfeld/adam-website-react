import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import RovisysIcon from '../index';

describe('<RovisysIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<RovisysIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
