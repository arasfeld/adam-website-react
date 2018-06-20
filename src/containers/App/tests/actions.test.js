import {
  CLOSE_SIDENAV,
  OPEN_SIDENAV,
  TOGGLE_SIDENAV,
} from '../constants';

import {
  closeSideNav,
  openSideNav,
  toggleSideNav,
} from '../actions';

describe('App Actions', () => {
  describe('closeSideNav', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: CLOSE_SIDENAV,
      };

      expect(closeSideNav()).toEqual(expectedResult);
    });
  });

  describe('openSideNav', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: OPEN_SIDENAV,
      };

      expect(openSideNav()).toEqual(expectedResult);
    });
  });

  describe('toggleSideNav', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: TOGGLE_SIDENAV,
      };

      expect(toggleSideNav()).toEqual(expectedResult);
    });
  });
});
