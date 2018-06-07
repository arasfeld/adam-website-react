/**
 * Test the HomePage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import messages from '../messages';
import HomePage from '../index';

describe('<HomePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    expect(renderedComponent.contains(
      <Typography variant="display2" gutterBottom>
        <FormattedMessage {...messages.header} />
      </Typography>
    )).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <HomePage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
