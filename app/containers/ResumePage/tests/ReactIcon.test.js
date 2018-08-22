import React from 'react';
import { shallow } from 'enzyme';

import ReactIcon from '../ReactIcon';

describe('<ReactIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<ReactIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
