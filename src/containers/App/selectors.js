/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location')
);

const makeSelectMobileSideNav = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('mobileSideNav')
);

export {
  selectGlobal,
  makeSelectLocation,
  makeSelectMobileSideNav,
};
