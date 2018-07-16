import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    position: 'relative',
    overflow: 'hidden',
  },
  image: {
    height: '100%',
    width: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 48,
    background: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    fontFamily: theme.typography.fontFamily,
  },
  titleWrap: {
    flexGrow: 1,
    marginLeft: theme.mixins.gutters().paddingLeft,
    marginRight: theme.mixins.gutters().paddingRight,
    color: theme.palette.common.white,
    overflow: 'hidden',
  },
  title: {
    fontSize: theme.typography.pxToRem(16),
    lineHeight: '24px',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
  subtitle: {
    fontSize: theme.typography.pxToRem(12),
    lineHeight: 1,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
  },
});

function Album({ classes, className, artist, image, name }) {
  return (
    <div className={classNames(classes.root, className)}>
      <img className={classes.image} src={image} alt={name} />
      <div className={classes.overlay}>
        <div className={classes.titleWrap}>
          <div className={classes.title}>{name}</div>
          <div className={classes.subtitle}>{artist}</div>
        </div>
      </div>
    </div>
  );
}

Album.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  artist: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default withStyles(styles)(Album);
