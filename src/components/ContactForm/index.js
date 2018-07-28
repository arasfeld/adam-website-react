import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';
import FormGroup from '@material-ui/core/FormGroup';
import SendIcon from '@material-ui/icons/Send';

import EmailField from 'components/EmailField';
import NameField from 'components/NameField';
import TextField from 'components/TextField';

import messages from './messages';

const styles = theme => ({
  formControl: {
    margin: theme.spacing.unit,
  },
  sendIcon: {
    marginRight: theme.spacing.unit,
  },
});

function ContactForm({
  classes,
  email,
  name,
  text,
  onChangeEmail,
  onChangeName,
  onChangeText,
  onSubmit,
}) {
  return (
    <FormGroup>
      <NameField
        className={classes.formControl}
        value={name}
        onChange={onChangeName}
      />

      <EmailField
        className={classes.formControl}
        value={email}
        onChange={onChangeEmail}
      />

      <TextField
        className={classes.formControl}
        value={text}
        onChange={onChangeText}
      />

      <Button
        className="contact-form-submit"
        variant="contained"
        color="primary"
        onClick={onSubmit}
      >
        <SendIcon className={classes.sendIcon} />
        <FormattedMessage {...messages.send} />
      </Button>
    </FormGroup>
  );
}

ContactForm.propTypes = {
  classes: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChangeEmail: PropTypes.func.isRequired,
  onChangeName: PropTypes.func.isRequired,
  onChangeText: PropTypes.func.isRequired,
  email: PropTypes.object,
  name: PropTypes.object,
  text: PropTypes.object,
};

ContactForm.defaultProps = {
  email: '',
  name: '',
  text: '',
};

export default withStyles(styles)(ContactForm);
