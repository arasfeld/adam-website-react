import React from 'react';
import { mount } from 'enzyme';

import MusicIcon from './MusicIcon';

describe('<MusicIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = mount(<MusicIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
