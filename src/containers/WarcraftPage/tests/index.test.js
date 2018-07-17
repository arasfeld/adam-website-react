/**
 * Test the WarcraftPage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import LoadingIndicator from 'components/LoadingIndicator';
import { WarcraftPage, mapDispatchToProps } from '../index';
import { loadCharacter } from '../actions';

describe('<WarcraftPage />', () => {
  it('should load the character on mount', () => {
    const loadSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <WarcraftPage onLoad={loadSpy} />
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
    const renderedComponent = shallow(<WarcraftPage {...props} />);
    expect(renderedComponent.contains(<LoadingIndicator />)).toEqual(true);
  });

  describe('mapDispatchToProps', () => {
    describe('onLoad', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onLoad).toBeDefined();
      });

      it('should dispatch loadCharacter when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onLoad();
        expect(dispatch).toHaveBeenCalledWith(loadCharacter());
      });
    });
  });
});
