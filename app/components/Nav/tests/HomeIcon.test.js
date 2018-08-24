import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import HomeIcon from '../HomeIcon';

describe('<HomeIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<HomeIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
