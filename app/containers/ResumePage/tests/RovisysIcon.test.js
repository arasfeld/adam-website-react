import React from 'react';
import { shallow } from 'enzyme';

import RovisysIcon from '../RovisysIcon';

describe('<RovisysIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<RovisysIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
