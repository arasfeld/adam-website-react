import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';
import MessageIcon from '@material-ui/icons/Message';

import messages from './messages';

class TextField extends React.Component {
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
        error: 'Text is required',
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
          multiline
          rows={4}
          value={value}
          onChange={this.update}
          onBlur={this.validate}
          startAdornment={
            <InputAdornment position="start">
              <MessageIcon />
            </InputAdornment>
          }
        />
        <FormHelperText>{error}</FormHelperText>
      </FormControl>
    );
  }
}

TextField.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  value: '',
  error: null,
};

export default TextField;
