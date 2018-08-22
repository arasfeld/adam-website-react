import React from 'react';
import { shallow } from 'enzyme';

import CSharpIcon from '../CSharpIcon';

describe('<CSharpIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<CSharpIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
