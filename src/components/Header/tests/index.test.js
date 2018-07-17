import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';

import AppBar from '@material-ui/core/AppBar';
import Header from '../index';

describe('<Header />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render an AppBar', () => {
    const props = {
      toggleSideNav: jest.fn(),
    };
    const renderedComponent = shallow(<Header {...props} />);
    expect(renderedComponent.find(AppBar).exists()).toBe(true);
  });
});
