import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Album from 'components/Album';
import messages from '../messages';
import AlbumList from '../index';

describe('<AlbumList />', () => {
  it('should render its heading', () => {
    const props = {
      albums: [
        { key: 'album-1', artist: 'Test Artist', image: '', name: 'Test name' },
      ],
    };
    const renderedComponent = shallow(<AlbumList {...props} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toBe(true);
  });

  it('should not render anything if no albums are provided', () => {
    const renderedComponent = shallow(<AlbumList />);

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render an <Album /> for each item', () => {
    const props = {
      albums: [
        { key: 'album-1', artist: 'Test Artist', image: '', name: 'Test name' },
        { key: 'album-2', artist: 'Test Artist', image: '', name: 'Test name' },
      ],
    };
    const renderedComponent = shallow(<AlbumList {...props} />);

    expect(renderedComponent.find(Album)).toHaveLength(2);
  });
});
