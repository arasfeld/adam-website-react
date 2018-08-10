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
  state = {
    error: null,
  };

  update = event => {
    this.props.onChange(event.target.value);
  };

  validate = () => {
    if (this.props.value == null || this.props.value.match(/^ *$/) !== null) {
      this.setState({ error: 'Name is required' });
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
          value={value}
          onChange={this.update}
          onBlur={this.validate}
          startAdornment={
            <InputAdornment position="start">
              <PersonIcon />
            </InputAdornment>
          }
        />
        <FormHelperText>{this.state.error}</FormHelperText>
      </FormControl>
    );
  }
}

NameField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

NameField.defaultProps = {
  value: '',
};

export default NameField;
