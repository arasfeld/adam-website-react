import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import OctocatIcon from '../OctocatIcon';

describe('<OctocatIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<OctocatIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
