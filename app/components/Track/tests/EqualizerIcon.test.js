import React from 'react';
import { shallow } from 'enzyme';

import EqualizerIcon from '../EqualizerIcon';

describe('<EqualizerIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<EqualizerIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
