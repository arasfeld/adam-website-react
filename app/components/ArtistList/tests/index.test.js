import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import Artist from 'components/Artist';
import messages from '../messages';
import ArtistList from '../index';

describe('<ArtistList />', () => {
  it('should render its heading', () => {
    const props = {
      artists: [{ key: 'artist-1', image: '', name: 'Test Artist' }],
    };
    const renderedComponent = shallow(<ArtistList {...props} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toBe(true);
  });

  it('should not render anything if no artists are provided', () => {
    const renderedComponent = shallow(<ArtistList />);

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render an <Artist /> for each item', () => {
    const props = {
      artists: [
        { key: 'artist-1', image: '', name: 'Test Artist' },
        { key: 'artist-2', image: '', name: 'Test Artist' },
      ],
    };
    const renderedComponent = shallow(<ArtistList {...props} />);

    expect(renderedComponent.find(Artist)).toHaveLength(2);
  });
});
