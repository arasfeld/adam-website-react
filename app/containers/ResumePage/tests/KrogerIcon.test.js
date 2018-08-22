import React from 'react';
import { shallow } from 'enzyme';

import KrogerIcon from '../KrogerIcon';

describe('<KrogerIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<KrogerIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
