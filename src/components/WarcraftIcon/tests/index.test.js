import React from 'react';
import { shallow } from 'enzyme';

import WarcraftIcon from '../index';

describe('<WarcraftIcon />', () => {
  it('should render an SVG', () => {
    const renderedComponent = shallow(
      <WarcraftIcon />
    );
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
