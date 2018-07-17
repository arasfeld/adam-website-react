import React from 'react';
import { createShallow, getClasses } from '@material-ui/core/test-utils';
import { FormattedMessage } from 'react-intl';

import LocaleToggle from 'containers/LocaleToggle';
import messages from '../messages';
import Footer from '../index';

describe('<Footer />', () => {
  let shallow;
  let classes;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
    classes = getClasses(<Footer />);
  });

  it('should render the copyright notice', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <FormattedMessage {...messages.licenseMessage} />,
      ),
    ).toBe(true);
  });

  it('should render the <LocaleToggle />', () => {
    const renderedComponent = shallow(<Footer />);
    expect(renderedComponent.contains(<LocaleToggle />)).toBe(true);
  });

  it('should render the credits', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: (
              <a className={classes.link} href="https://github.com/arasfeld">
                Adam Rasfeld
              </a>
            ),
          }}
        />,
      ),
    ).toBe(true);
  });
});
