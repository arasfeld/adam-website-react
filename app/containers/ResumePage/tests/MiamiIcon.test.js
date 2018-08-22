import React from 'react';
import { shallow } from 'enzyme';

import MiamiIcon from '../MiamiIcon';

describe('<MiamiIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<MiamiIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
