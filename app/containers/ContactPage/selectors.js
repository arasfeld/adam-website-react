/**
 * ContactPage selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectContact = state => state.get('contact', initialState);

const makeSelectLoading = () =>
  createSelector(selectContact, contactState => contactState.get('loading'));

const makeSelectError = () =>
  createSelector(selectContact, contactState => contactState.get('error'));

const makeSelectEmail = () =>
  createSelector(selectContact, contactState => contactState.get('email'));

const makeSelectName = () =>
  createSelector(selectContact, contactState => contactState.get('name'));

const makeSelectText = () =>
  createSelector(selectContact, contactState => contactState.get('text'));

export {
  selectContact,
  makeSelectLoading,
  makeSelectError,
  makeSelectEmail,
  makeSelectName,
  makeSelectText,
};
