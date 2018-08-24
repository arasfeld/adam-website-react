import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from 'components/SvgIcon';
import MusicIcon from '../MusicIcon';

describe('<MusicIcon />', () => {
  it('should render an SvgIcon', () => {
    const renderedComponent = shallow(<MusicIcon />);
    expect(renderedComponent.find(SvgIcon)).toHaveLength(1);
  });
});
