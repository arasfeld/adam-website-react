import React from 'react';
import { shallow } from 'enzyme';
import { FormattedMessage } from 'react-intl';

import OwnedGame from 'components/OwnedGame';
import messages from '../messages';
import OwnedGameList from '../index';

describe('<OwnedGameList />', () => {
  it('should render its heading', () => {
    const props = {
      games: [{ key: 'owned-game-1', image: '', name: 'Test Game' }],
    };
    const renderedComponent = shallow(<OwnedGameList {...props} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.header} />),
    ).toBe(true);
  });

  it('should not render anything if no games are provided', () => {
    const renderedComponent = shallow(<OwnedGameList />);

    expect(renderedComponent.html()).toEqual(null);
  });

  it('should render an <OwnedGame /> for each item', () => {
    const props = {
      games: [
        { key: 'owned-game-1', image: '', name: 'Test Game' },
        { key: 'owned-game-2', image: '', name: 'Test Game' },
      ],
    };
    const renderedComponent = shallow(<OwnedGameList {...props} />);

    expect(renderedComponent.find(OwnedGame)).toHaveLength(2);
  });
});
