import React from 'react';
import { shallow } from 'enzyme';

import GridListTile from '@material-ui/core/GridListTile';

import Album from '../index';

describe('<Album />', () => {
  it('should render a GridListTile', () => {
    const renderedComponent = shallow(
      <Album />
    );
    expect(renderedComponent.find(GridListTile).length).toEqual(1);
  });

  it('should not have a className attribute', () => {
    const renderedComponent = shallow(
      <Album />
    );
    expect(renderedComponent.prop('className')).toBeUndefined();
  });

  it('should adopt a className attribute', () => {
    const className = 'test';
    const renderedComponent = shallow(
      <Album className={className} />
    );
    expect(renderedComponent.hasClass(className)).toBe(true);
  });
});
