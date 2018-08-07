import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';

const styles = () => ({
  image: {
    height: '100%',
    width: '100%',
  },
});

function OwnedGame({ classes, className, name, totalPlaytime, logoImage }) {
  const tooltipContent = (
    <div>
      <div>{name}</div>
      <div>{`${Math.round((totalPlaytime / 60) * 10) / 10} hrs on record`}</div>
    </div>
  );

  return (
    <div className={classNames(classes.root, className)}>
      <Tooltip title={tooltipContent}>
        <img className={classes.image} src={logoImage} alt={name} />
      </Tooltip>
    </div>
  );
}

OwnedGame.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  totalPlaytime: PropTypes.number,
  logoImage: PropTypes.string.isRequired,
};

export default withStyles(styles)(OwnedGame);
