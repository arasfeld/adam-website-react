import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { injectIntl, intlShape } from 'react-intl';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
    fontWeight: theme.typography.fontWeightRegular,
    '&.depth-0': {
      fontWeight: theme.typography.fontWeightMedium,
    },
  },
  active: {
    color: theme.palette.primary.main,
    fontWeight: theme.typography.fontWeightMedium,
  },
});

class SideNavItem extends React.Component {
  componentDidMount() {
    // Center the selected item in the list container.
    const activeElement = document.querySelector(
      `.${this.props.classes.active}`,
    );
    if (activeElement && activeElement.scrollIntoView) {
      activeElement.scrollIntoView({});
    }
  }

  render() {
    const {
      classes,
      active,
      href,
      icon,
      onClick,
      message,
      intl,
      ...other
    } = this.props;

    const IconComponent = icon;
    const iconComponent = IconComponent ? (
      <ListItemIcon>
        <IconComponent
          className={classNames({
            [classes.active]: active,
          })}
        />
      </ListItemIcon>
    ) : null;

    return (
      <ListItem className={classes.item} disableGutters {...other}>
        <Button
          component={Link}
          className={classNames(classes.button, {
            [classes.active]: active,
          })}
          disableRipple
          onClick={onClick}
          to={href}
        >
          {iconComponent}
          {message ? intl.formatMessage(message) : href}
        </Button>
      </ListItem>
    );
  }
}

SideNavItem.propTypes = {
  classes: PropTypes.object.isRequired,
  active: PropTypes.bool,
  href: PropTypes.string,
  message: PropTypes.object,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(SideNavItem));
