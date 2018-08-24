import React from 'react';
import { shallow } from 'enzyme';

import Svg from '../Svg';
import SvgIcon from '../index';

describe('<SvgIcon />', () => {
  const path = <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />;

  it('should render Svg component', () => {
    const renderedComponent = shallow(<SvgIcon>{path}</SvgIcon>);
    expect(renderedComponent.find(Svg)).toHaveLength(1);
  });
});
