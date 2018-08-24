import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import ReactIcon from '../ReactIcon';

describe('<ReactIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<ReactIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
