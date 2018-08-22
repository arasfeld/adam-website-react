import React from 'react';
import { shallow } from 'enzyme';

import ContactIcon from '../ContactIcon';

describe('<ContactIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<ContactIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
