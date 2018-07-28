/*
 * ContactPage
 *
 * Allow users to contact me via email
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import ContactForm from 'components/ContactForm';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { changeEmail, changeName, changeText, sendMessage } from './actions';
import {
  makeSelectLoading,
  makeSelectError,
  makeSelectEmail,
  makeSelectName,
  makeSelectText,
} from './selectors';
import messages from './messages';
import reducer from './reducer';
import saga from './saga';

function ContactPage(props) {
  return (
    <article>
      <Helmet>
        <title>Contact Me</title>
        <meta
          name="description"
          content="Contact page of Adam Rasfeld's website"
        />
      </Helmet>
      <div>
        <Typography variant="display2" gutterBottom>
          <FormattedMessage {...messages.header} />
        </Typography>

        <Card>
          <CardContent>
            <ContactForm {...props} />
          </CardContent>
        </Card>
      </div>
    </article>
  );
}

ContactPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  email: PropTypes.string,
  name: PropTypes.string,
  text: PropTypes.string,
  onChangeEmail: PropTypes.func,
  onChangeName: PropTypes.func,
  onChangeText: PropTypes.func,
  onSubmit: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onChangeEmail: email => dispatch(changeEmail(email)),
    onChangeName: name => dispatch(changeName(name)),
    onChangeText: text => dispatch(changeText(text)),
    onSubmit: message => dispatch(sendMessage(message)),
  };
}

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  email: makeSelectEmail(),
  name: makeSelectName(),
  text: makeSelectText(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'contact', reducer });
const withSaga = injectSaga({ key: 'contact', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(ContactPage);
