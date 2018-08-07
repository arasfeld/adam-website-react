import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import CSharpIcon from '../index';

describe('<CSharpIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<CSharpIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
