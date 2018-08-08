/**
 * Test the MusicPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import Album from 'components/Album';
import Artist from 'components/Artist';
import Track from 'components/Track';
import LoadingIndicator from 'components/LoadingIndicator';
import { MusicPage, mapDispatchToProps } from '../index';
import { loadMusic } from '../actions';

describe('<MusicPage />', () => {
  it('should load the music on mount', () => {
    const loadSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <MusicPage onLoad={loadSpy} />
      </IntlProvider>,
    );
    expect(loadSpy).toHaveBeenCalled();
  });

  it('should render a LoadingIndicator', () => {
    const props = {
      loading: true,
      error: false,
      onLoad: jest.fn(),
    };
    const renderedComponent = shallow(<MusicPage {...props} />);
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  it('should render the track list', () => {
    const props = {
      loading: false,
      error: false,
      tracks: [{}, {}],
      onLoad: jest.fn(),
    };
    const renderedComponent = shallow(<MusicPage {...props} />);
    expect(renderedComponent.find(Track)).toHaveLength(2);
  });

  it('should render the album list', () => {
    const props = {
      loading: false,
      error: false,
      albums: [{}, {}],
      onLoad: jest.fn(),
    };
    const renderedComponent = shallow(<MusicPage {...props} />);
    expect(renderedComponent.find(Album)).toHaveLength(2);
  });

  it('should render the artist list', () => {
    const props = {
      loading: false,
      error: false,
      artists: [{}, {}],
      onLoad: jest.fn(),
    };
    const renderedComponent = shallow(<MusicPage {...props} />);
    expect(renderedComponent.find(Artist)).toHaveLength(2);
  });

  describe('mapDispatchToProps', () => {
    describe('onLoad', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoad).toBeDefined();
      });

      it('should dispatch loadMusic when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoad();
        expect(dispatch).toHaveBeenCalledWith(loadMusic());
      });
    });
  });
});
