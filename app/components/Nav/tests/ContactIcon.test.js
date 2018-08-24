import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import ContactIcon from '../ContactIcon';

describe('<ContactIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<ContactIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
