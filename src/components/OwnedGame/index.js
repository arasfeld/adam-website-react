import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  image: {
    height: '100%',
    width: '100%',
  },
});

function OwnedGame({ classes, className, name, image }) {
  return (
    <div className={classNames(classes.root, className)}>
      <img className={classes.image} src={image} alt={name} />
    </div>
  );
}

OwnedGame.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default withStyles(styles)(OwnedGame);
