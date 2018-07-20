import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Track from 'components/Track';
import messages from '../messages';
import TrackList from '../index';

describe('<TrackList />', () => {
  it('should render its heading', () => {
    const props = {
      tracks: [
        {
          key: 'track-1',
          album: 'Test Album',
          artist: 'Test Artist',
          image: '',
          name: 'Test Track',
        },
      ],
    };
    const renderedComponent = shallow(<TrackList {...props} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toBe(true);
  });

  it('should not render anything if no tracks are provided', () => {
    const renderedComponent = shallow(<TrackList />);

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render a <Track /> for each item', () => {
    const props = {
      tracks: [
        {
          key: 'track-1',
          album: 'Test Album',
          artist: 'Test Artist',
          image: '',
          name: 'Test Track',
        },
        {
          key: 'track-2',
          album: 'Test Album',
          artist: 'Test Artist',
          image: '',
          name: 'Test Track',
        },
      ],
    };
    const renderedComponent = shallow(<TrackList {...props} />);

    expect(renderedComponent.find(Track)).toHaveLength(2);
  });
});
