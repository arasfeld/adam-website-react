import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import RecentGame from 'components/RecentGame';
import messages from '../messages';
import RecentGameList from '../index';

describe('<RecentGameList />', () => {
  it('should render its heading', () => {
    const props = {
      games: [
        {
          key: 'recent-game-1',
          iconImage: '',
          name: 'Test name',
          recentPlaytime: 0,
        },
      ],
    };
    const renderedComponent = shallow(<RecentGameList {...props} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toBe(true);
  });

  it('should not render anything if no games are provided', () => {
    const renderedComponent = shallow(<RecentGameList />);

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render a <RecentGame /> for each item', () => {
    const props = {
      games: [
        {
          key: 'recent-game-1',
          iconImage: '',
          name: 'Test name',
          recentPlaytime: 0,
        },
        {
          key: 'recent-game-2',
          iconImage: '',
          name: 'Test name',
          recentPlaytime: 0,
        },
      ],
    };
    const renderedComponent = shallow(<RecentGameList {...props} />);

    expect(renderedComponent.find(RecentGame)).toHaveLength(2);
  });
});
