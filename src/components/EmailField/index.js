import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MailIcon from '@material-ui/icons/Mail';

import messages from './messages';

const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

class EmailField extends React.Component {
  update = event => {
    this.props.onChange({
      value: event.target.value,
      error: this.props.error,
    });
  };

  validate = () => {
    if (this.props.value == null || this.props.value.match(/^ *$/) !== null) {
      this.props.onChange({
        value: this.props.value,
        error: 'Email is required',
      });
    } else if (!EMAIL_REGEXP.test(this.props.value.toLowerCase())) {
      this.props.onChange({
        value: this.props.value,
        error: 'Invalid email',
      });
    } else {
      this.props.onChange({
        value: this.props.value,
        error: null,
      });
    }
  };

  render() {
    const { className, value, error } = this.props;
    const hasError = error != null;

    return (
      <FormControl className={className} required error={hasError}>
        <InputLabel>
          <FormattedMessage {...messages.label} />
        </InputLabel>
        <Input
          type="email"
          value={value}
          onChange={this.update}
          onBlur={this.validate}
          startAdornment={
            <InputAdornment position="start">
              <MailIcon />
            </InputAdornment>
          }
        />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    );
  }
}

EmailField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

EmailField.defaultProps = {
  value: '',
  error: null,
};

export default EmailField;
