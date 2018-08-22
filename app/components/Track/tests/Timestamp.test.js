import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import EqualizerIcon from '../EqualizerIcon';
import Timestamp from '../Timestamp';
import messages from '../messages';

describe('<Timestamp />', () => {
  it('should render <EqualizerIcon /> when date is not defined', () => {
    const renderedComponent = shallow(<Timestamp />);
    expect(renderedComponent.find(EqualizerIcon)).toHaveLength(1);
  });

  it('should render "Now Playing" message when date is not defined', () => {
    const renderedComponent = shallow(<Timestamp />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.playing} />),
    ).toBe(true);
  });
});
