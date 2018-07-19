import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import PersonIcon from '@material-ui/icons/Person';

import messages from './messages';

class NameField extends React.Component {
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
        error: 'Name is required',
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
          value={value}
          onChange={this.update}
          onBlur={this.validate}
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
        />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    );
  }
}

NameField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

NameField.defaultProps = {
  value: '',
  error: null,
};

export default NameField;
