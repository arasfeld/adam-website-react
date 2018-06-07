/**
 * The global state selectors
 */

import { createSelector } from 'reselect';

const selectGlobal = (state) => state.get('global');

const selectRoute = (state) => state.get('route');

const makeSelectLayout = () => createSelector(
  selectGlobal,
  (globalState) => globalState.get('layout')
);

const makeSelectLocation = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').toJS()
);

const makeSelectPathname = () => createSelector(
  selectRoute,
  (routeState) => routeState.get('location').pathname
);

export {
  selectGlobal,
  makeSelectLayout,
  makeSelectLocation,
  makeSelectPathname,
};
