import React from 'react';
import PropTypes from 'prop-types';
import Svg from './Svg';

function SvgIcon({ children, className, titleAccess, viewBox, ...other }) {
  return (
    <Svg
      className={className}
      focusable="false"
      viewBox={viewBox}
      aria-hidden={titleAccess ? 'false' : 'true'}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </Svg>
  );
}

SvgIcon.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  titleAccess: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SvgIcon;
