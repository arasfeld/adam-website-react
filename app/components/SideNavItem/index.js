import React from 'react';
import PropTypes from 'prop-types';
import { injectIntl, intlShape } from 'react-intl';
import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import { primaryColor } from 'static/colors';
import { fontWeightMedium, fontWeightRegular } from 'static/typography';
import StyledIcon from './StyledIcon';

const styles = {
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0,
  },
  button: {
    fontWeight: fontWeightRegular,
    justifyContent: 'flex-start',
    textTransform: 'none',
    width: '100%',
  },
  active: {
    color: primaryColor,
    fontWeight: fontWeightMedium,
  },
};

function SideNavItem({ href, icon, onClick, message, intl, ...other }) {
  const IconComponent = icon;
  const iconComponent = IconComponent ? (
    <StyledIcon>
      <IconComponent />
    </StyledIcon>
  ) : null;

  if (/^https?:\/\//i.test(href)) {
    return (
      <ListItem style={styles.item} disableGutters {...other}>
        <Button
          style={styles.button}
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
    <ListItem style={styles.item} disableGutters {...other}>
      <Button
        component={NavLink}
        style={styles.button}
        activeStyle={styles.active}
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

SideNavItem.propTypes = {
  href: PropTypes.string,
  message: PropTypes.object,
  icon: PropTypes.any,
  onClick: PropTypes.func,
  intl: intlShape.isRequired,
};

export default injectIntl(SideNavItem);
