import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { NavLink } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import StyledIcon from './StyledIcon';

const styles = theme => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    fontWeight: theme.typography.fontWeightRegular,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
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
      href,
      icon,
      onClick,
      message,
      intl,
      ...other
    } = this.props;

    const IconComponent = icon;
    const iconComponent = IconComponent ? (
      <StyledIcon>
        <IconComponent />
      </StyledIcon>
    ) : null;

    if (/^https?:\/\//i.test(href)) {
      return (
        <ListItem className={classes.item} disableGutters {...other}>
          <Button
            className={classes.button}
            disableRipple
            onClick={onClick}
            href={href}
          >
            {iconComponent}
            {message ? intl.formatMessage(message) : href}
          </Button>
        </ListItem>
      );
    }

    return (
      <ListItem className={classes.item} disableGutters {...other}>
        <Button
          component={NavLink}
          className={classes.button}
          activeClassName={classes.active}
          disableRipple
          onClick={onClick}
          to={href}
          exact
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
  href: PropTypes.string,
  message: PropTypes.object,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  intl: intlShape.isRequired,
};

export default withStyles(styles)(injectIntl(SideNavItem));
