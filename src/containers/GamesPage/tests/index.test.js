/**
 * Test the GamesPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import LoadingIndicator from 'components/LoadingIndicator';
import { GamesPage, mapDispatchToProps } from '../index';
import { loadGames } from '../actions';

describe('<GamesPage />', () => {
  it('should load the games on mount', () => {
    const loadSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <GamesPage onLoad={loadSpy} />
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
    const renderedComponent = shallow(<GamesPage {...props} />);
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onLoad', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoad).toBeDefined();
      });

      it('should dispatch loadGames when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoad();
        expect(dispatch).toHaveBeenCalledWith(loadGames());
      });
    });
  });
});
