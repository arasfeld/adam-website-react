/*
 * WarcraftPage
 *
 * Display my most listened to music from Spotify
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import Typography from '@material-ui/core/Typography';

import LoadingIndicator from 'components/LoadingIndicator';
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import { loadCharacter } from './actions';
import { makeSelectCharacter, makeSelectLoading, makeSelectError } from './selectors';
import reducer from './reducer';
import saga from './saga';

export class WarcraftPage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.onLoad();
  }

  render() {
    const { loading, error, character } = this.props;

    let content;
    if (loading) {
      content = <LoadingIndicator />;
    } else if (error !== false) {
      content = <Typography>Something went wrong!</Typography>;
    } else {
      content = (
        <img alt="char" src={`http://render-us.worldofwarcraft.com/character/${character.thumbnail}`} />
      );
    }

    return (
      <article>
        <Helmet>
          <title>Warcraft</title>
          <meta name="description" content="Warcraft page of Adam Rasfeld's website" />
        </Helmet>

        {content}
      </article>
    );
  }
}

WarcraftPage.propTypes = {
  loading: PropTypes.bool,
  error: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  character: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
  ]),
  onLoad: PropTypes.func,
};

export function mapDispatchToProps(dispatch) {
  return {
    onLoad: () => dispatch(loadCharacter()),
  };
}

const mapStateToProps = createStructuredSelector({
  character: makeSelectCharacter(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'warcraft', reducer });
const withSaga = injectSaga({ key: 'warcraft', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(WarcraftPage);
