import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import InputLabel from '@material-ui/core/InputLabel';

import MailIcon from '@material-ui/icons/Mail';
import MessageIcon from '@material-ui/icons/Message';
import PersonIcon from '@material-ui/icons/Person';
import SendIcon from '@material-ui/icons/Send';

import messages from './messages';

const EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+(\.[-!#$%&'*+/0-9=?A-Z^_`a-z{|}~]+)*@[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?(\.[A-Za-z0-9]([A-Za-z0-9-]{0,61}[A-Za-z0-9])?)*$/;

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  sendIcon: {
    marginRight: theme.spacing.unit,
  },
});

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: '', error: '', valid: false },
      email: { value: '', error: '', valid: false },
      message: { value: '', error: '', valid: false },
      valid: false,
    };
  }

  updateField = event => {
    // eslint-disable-line
    const field = event.target;
    this.setState({
      [field.name]: { ...this.state[field.name], value: field.value },
    });
  };

  validateField = event => {
    // eslint-disable-line
    const field = event.target;
    if (
      field.required &&
      (field.value == null || field.value.match(/^ *$/) !== null)
    ) {
      this.setState({
        [field.name]: {
          ...this.state[field.name],
          error: 'Field is required',
          valid: false,
        },
        valid: false,
      });
      return;
    }
    if (
      field.type === 'email' &&
      !EMAIL_REGEXP.test(field.value.toLowerCase())
    ) {
      this.setState({
        [field.name]: {
          ...this.state[field.name],
          error: 'Invalid email',
          valid: false,
        },
        valid: false,
      });
      return;
    }
    this.setState({
      [field.name]: { ...this.state[field.name], error: '', valid: true },
    });
  };

  render() {
    const { classes } = this.props;
    const { valid } = this.state;

    return (
      <FormGroup>
        <FormControl
          required
          className={classes.formControl}
          error={!this.state.name.valid && this.state.name.error !== ''}
        >
          <InputLabel id="name-field">
            <FormattedMessage {...messages.name} />
          </InputLabel>
          <Input
            id="name-field"
            name="name"
            value={this.state.name.value}
            onChange={this.updateField}
            onBlur={this.validateField}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon />
              </InputAdornment>
            }
          />
          <FormHelperText id="name-error-text">
            {this.state.name.error}
          </FormHelperText>
        </FormControl>

        <FormControl
          required
          className={classes.formControl}
          error={!this.state.email.valid && this.state.email.error !== ''}
        >
          <InputLabel id="email-field">
            <FormattedMessage {...messages.email} />
          </InputLabel>
          <Input
            id="email-field"
            name="email"
            type="email"
            value={this.state.email.value}
            onChange={this.updateField}
            onBlur={this.validateField}
            startAdornment={
              <InputAdornment position="start">
                <MailIcon />
              </InputAdornment>
            }
          />
          <FormHelperText id="email-error-text">
            {this.state.email.error}
          </FormHelperText>
        </FormControl>

        <FormControl
          required
          className={classes.formControl}
          error={!this.state.message.valid && this.state.message.error !== ''}
        >
          <InputLabel id="message-field">
            <FormattedMessage {...messages.message} />
          </InputLabel>
          <Input
            id="message-field"
            name="message"
            multiline
            rows={4}
            value={this.state.message.value}
            onChange={this.updateField}
            onBlur={this.validateField}
            startAdornment={
              <InputAdornment position="start">
                <MessageIcon />
              </InputAdornment>
            }
          />
          <FormHelperText id="message-error-text">
            {this.state.message.error}
          </FormHelperText>
        </FormControl>

        <Button
          variant="contained"
          color="primary"
          disabled={!valid}
          onClick={this.submit}
        >
          <SendIcon className={classes.sendIcon} />
          <FormattedMessage {...messages.send} />
        </Button>
      </FormGroup>
    );
  }
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default withStyles(styles)(ContactForm);
