import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from '@material-ui/core/SvgIcon';

import WarcraftIcon from '../index';

describe('<WarcraftIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<WarcraftIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
