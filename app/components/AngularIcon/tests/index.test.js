import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import AngularIcon from '../index';

describe('<AngularIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<AngularIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
