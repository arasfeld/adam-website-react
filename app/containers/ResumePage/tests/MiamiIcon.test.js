import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import MiamiIcon from '../MiamiIcon';

describe('<MiamiIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<MiamiIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
