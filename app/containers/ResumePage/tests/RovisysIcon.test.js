import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import RovisysIcon from '../RovisysIcon';

describe('<RovisysIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<RovisysIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
