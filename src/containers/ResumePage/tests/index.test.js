import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Typography from '@material-ui/core/Typography';

import messages from '../messages';
import ResumePage from '../index';

describe('<ResumePage />', () => {
  it('should render its heading', () => {
    const renderedComponent = shallow(
      <ResumePage />
    );
    expect(renderedComponent.contains(
      <Typography variant="display2" gutterBottom>
        <FormattedMessage {...messages.header} />
      </Typography>
    )).toBe(true);
  });

  it('should never re-render the component', () => {
    const renderedComponent = shallow(
      <ResumePage />
    );
    const inst = renderedComponent.instance();
    expect(inst.shouldComponentUpdate()).toBe(false);
  });
});
