import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { FormattedMessage } from 'react-intl';

import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <FormattedMessage {...messages.licenseMessage} />,
      ),
    ).toBe(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <a href="https://github.com/arasfeld">Adam Rasfeld</a>,
          }}
        />,
      ),
    ).toBe(true);
  });
});
