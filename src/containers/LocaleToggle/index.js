/*
 *
 * LocaleToggle
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { injectIntl, intlShape } from 'react-intl';
import Select from '@material-ui/core/Select';

import messages from './messages';
import { appLocales } from '../../i18n';
import { changeLocale } from '../LanguageProvider/actions';
import { makeSelectLocale } from '../LanguageProvider/selectors';

export class LocaleToggle extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Select native value={this.props.locale} onChange={this.props.onLocaleToggle}>
        {appLocales.map((appLocale) => (
          <option key={appLocale} value={appLocale}>
            {messages[appLocale] ? this.props.intl.formatMessage(messages[appLocale]) : appLocale}
          </option>
        ))}
      </Select>
    );
  }
}

LocaleToggle.propTypes = {
  onLocaleToggle: PropTypes.func,
  locale: PropTypes.string,
  intl: intlShape.isRequired,
};

const mapStateToProps = createSelector(
  makeSelectLocale(),
  (locale) => ({ locale })
);

export function mapDispatchToProps(dispatch) {
  return {
    onLocaleToggle: (evt) => dispatch(changeLocale(evt.target.value)),
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(LocaleToggle));
