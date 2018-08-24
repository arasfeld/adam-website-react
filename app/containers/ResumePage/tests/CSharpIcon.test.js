import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import CSharpIcon from '../CSharpIcon';

describe('<CSharpIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<CSharpIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
