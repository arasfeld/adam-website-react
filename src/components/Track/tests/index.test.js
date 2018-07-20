import React from 'react';
import { createShallow } from '@material-ui/core/test-utils';
import { FormattedMessage } from 'react-intl';

import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import EqualizerIcon from 'components/EqualizerIcon';

import messages from '../messages';
import Track from '../index';

describe('<Track />', () => {
  let shallow;

  beforeAll(() => {
    shallow = createShallow({ dive: true });
  });

  it('should render a <ListItem />', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
      date: new Date(),
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(ListItem)).toHaveLength(1);
  });

  it('should render an <Avatar />', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
      date: new Date(),
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(Avatar)).toHaveLength(1);
  });

  it('should render track name', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
      date: new Date(),
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(ListItemText).props().primary).toContain(
      props.name,
    );
  });

  it('should render artist name', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
      date: new Date(),
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(ListItemText).props().primary).toContain(
      props.artist,
    );
  });

  it('should render <EqualizerIcon /> when date is not defined', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(renderedComponent.find(EqualizerIcon)).toHaveLength(1);
  });

  it('should render "Now Playing" message when date is not defined', () => {
    const props = {
      album: 'Test Album',
      artist: 'Test Artist',
      image: '',
      name: 'Test name',
    };
    const renderedComponent = shallow(<Track {...props} />);
    expect(
      renderedComponent.contains(<FormattedMessage {...messages.playing} />),
    ).toBe(true);
  });
});
