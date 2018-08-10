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
  state = {
    error: null,
  };

  update = event => {
    this.props.onChange(event.target.value);
  };

  validate = () => {
    if (this.props.value == null || this.props.value.match(/^ *$/) !== null) {
      this.setState({ error: messages.requiredError });
    } else if (!EMAIL_REGEXP.test(this.props.value.toLowerCase())) {
      this.setState({ error: messages.invalidError });
    } else {
      this.setState({ error: null });
    }
  };

  render() {
    const { value, ...other } = this.props;
    const hasError = this.state.error != null;

    return (
      <FormControl required error={hasError} {...other}>
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
        <FormHelperText>
          {hasError && <FormattedMessage {...this.state.error} />}
        </FormHelperText>
      </FormControl>
    );
  }
}

EmailField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

EmailField.defaultProps = {
  value: '',
};

export default EmailField;
