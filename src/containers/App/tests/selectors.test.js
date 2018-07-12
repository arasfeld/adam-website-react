import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectLocation,
  makeSelectMobileSideNav,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectLocation', () => {
  const locationStateSelector = makeSelectLocation();
  it('should select the location', () => {
    const route = fromJS({
      location: { pathname: '/foo' },
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(
      route.get('location').toJS(),
    );
  });
});

describe('makeSelectMobileSideNav', () => {
  const mobileSideNavStateSelector = makeSelectMobileSideNav();
  it('should select the mobile sidenav state', () => {
    const globalState = fromJS({
      mobileSideNav: false,
    });
    const mockedState = fromJS({
      global: globalState,
    });
    expect(mobileSideNavStateSelector(mockedState)).toEqual(
      globalState.get('mobileSideNav'),
    );
  });
});
