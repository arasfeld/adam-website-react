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
  state = {
    error: null,
  };

  update = event => {
    this.props.onChange(event.target.value);
  };

  validate = () => {
    if (this.props.value == null || this.props.value.match(/^ *$/) !== null) {
      this.setState({ error: 'Text is required' });
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
        <FormHelperText>{this.state.error}</FormHelperText>
      </FormControl>
    );
  }
}

TextField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

TextField.defaultProps = {
  value: '',
};

export default TextField;
