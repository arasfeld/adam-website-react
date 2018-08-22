import React from 'react';
import { shallow } from 'enzyme';

import AngularIcon from '../AngularIcon';

describe('<AngularIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(<AngularIcon />);
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });
});
