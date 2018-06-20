import React from 'react';
import { shallow } from 'enzyme';

import LinearProgress from '@material-ui/core/LinearProgress';

import LoadingIndicator from '../index';

describe('<LoadingIndicator />', () => {
  it('should render a LinearProgress', () => {
    const renderedComponent = shallow(
      <LoadingIndicator />
    );
    expect(renderedComponent.find(LinearProgress).length).toBe(1);
  });
});
