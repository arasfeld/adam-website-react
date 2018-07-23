import React from 'react';
import { shallow } from 'enzyme';
// import { FormattedMessage } from 'react-intl';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

// import messages from '../messages';
import RecentGame from '../index';

describe('<RecentGame />', () => {
  it('should render a <ListItem />', () => {
    const props = {
      image: '',
      name: 'Test name',
      playtime: 0,
    };
    const renderedComponent = shallow(<RecentGame {...props} />);
    expect(renderedComponent.find(ListItem)).toHaveLength(1);
  });

  it('should render an <Avatar />', () => {
    const props = {
      image: '',
      name: 'Test name',
      playtime: 0,
    };
    const renderedComponent = shallow(<RecentGame {...props} />);
    expect(renderedComponent.find(Avatar)).toHaveLength(1);
  });

  it('should render game name', () => {
    const props = {
      image: '',
      name: 'Test name',
      playtime: 0,
    };
    const renderedComponent = shallow(<RecentGame {...props} />);
    expect(renderedComponent.find(ListItemText).props().primary).toEqual(
      props.name,
    );
  });
});
