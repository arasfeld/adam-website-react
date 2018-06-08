/**
 * Testing the NotFoundPage
 */

import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import NotFound from '../index';

describe('<NotFound />', () => {
  it('should render the Page Not Found text', () => {
    const renderedComponent = shallow(
      <NotFound />
    );
    expect(renderedComponent.contains(
      <Typography variant="display2" gutterBottom>
        <FormattedMessage
          id="app.containers.NotFoundPage.header"
          defaultMessage={'Page not found.'}
        />
      </Typography>)).toEqual(true);
  });
});
