import React from 'react';
import { shallow } from 'enzyme';

import EqualizerIcon from '../index';

describe('<EqualizerIcon />', () => {
  it('should render an SVG', () => {
    const renderedComponent = shallow(
      <EqualizerIcon />
    );
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
