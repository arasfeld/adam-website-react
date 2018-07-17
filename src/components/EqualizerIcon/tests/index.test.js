import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import EqualizerIcon from '../index';

describe('<EqualizerIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<EqualizerIcon />);
    expect(renderedComponent.find(SvgIcon).length).toBe(1);
  });
});
