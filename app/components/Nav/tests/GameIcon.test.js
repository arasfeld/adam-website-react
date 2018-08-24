import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import GameIcon from '../GameIcon';

describe('<GameIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<GameIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
