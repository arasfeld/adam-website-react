import React from 'react';
import { mount } from 'enzyme';

import HomeIcon from './HomeIcon';

describe('<HomeIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = mount(<HomeIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
