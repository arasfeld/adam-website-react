import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import EqualizerIcon from '../EqualizerIcon';

describe('<EqualizerIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<EqualizerIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
