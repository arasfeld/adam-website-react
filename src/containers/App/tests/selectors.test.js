import { fromJS } from 'immutable';

import { selectRoute, makeSelectLocation } from '../selectors';

describe('selectRoute', () => {
  it('should select the route state', () => {
    const routeState = fromJS({});
    const mockedState = fromJS({
      route: routeState,
    });
    expect(selectRoute(mockedState)).toEqual(routeState);
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
