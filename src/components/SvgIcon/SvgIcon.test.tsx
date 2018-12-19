import React from 'react';
import { shallow } from 'enzyme';

import SvgIcon from './SvgIcon';

describe('<SvgIcon />', () => {
  it('should render a SVG', () => {
    const renderedComponent = shallow(
      <SvgIcon viewBox="0 0 24 24">
        <path />
      </SvgIcon>
    );
    expect(renderedComponent.find('svg')).toHaveLength(1);
  });

  it('should pass viewBox to SVG', () => {
    const viewBox = '0 0 24 24';
    const renderedComponent = shallow(
      <SvgIcon viewBox={viewBox}>
        <path />
      </SvgIcon>
    );
    expect(renderedComponent.find('svg').prop('viewBox')).toEqual(viewBox);
  });
});
