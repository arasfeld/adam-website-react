import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function AngularIcon({ className, color, ...other }) {
  return (
    <SvgIcon className={className} color={color} viewBox="0 0 64 64" {...other}>
      <g>
        <polygon
          fill="#DD0031"
          points="61.875306142,10.756969624 32.1575236,0.159436 2.439741058,10.756969624 6.972421102,50.050836766 32.1575236,64.0 57.342626098,50.050836766"
        />
        <polygon
          fill="#C3002F"
          points="57.342626098,50.050836766 61.875306142,10.756969624 32.1575236,0.159436 32.1575236,7.245738604 32.1575236,7.213818322 32.1575236,39.549063988 32.1575236,64.0"
        />
        <path
          fill="#FFFFFF"
          d="M32.157524 7.2510052C32.157524 7.2510052 13.579919 48.906973 13.579919 48.906973C13.579919 48.906973 13.579919 48.906973 13.579919 48.906973C13.579919 48.906973 20.506621 48.906973 20.506621 48.906973C20.506621 48.906973 20.506621 48.906973 20.506621 48.906973C20.506621 48.906973 24.241294 39.586251 24.241294 39.586251C24.241294 39.586251 40.009913 39.586251 40.009913 39.586251C40.009913 39.586251 43.744586 48.906973 43.744586 48.906973C43.744586 48.906973 43.744586 48.906973 43.744586 48.906973C43.744586 48.906973 50.671287 48.906973 50.671287 48.906973C50.671287 48.906973 50.671287 48.906973 50.671287 48.906973C50.671287 48.906973 32.157524 7.2510052 32.157524 7.2510052M37.583972 33.8406C37.583972 33.8406 26.731076 33.8406 26.731076 33.8406C26.731076 33.8406 32.157524 20.785205 32.157524 20.785205C32.157524 20.785205 37.583972 33.8406 37.583972 33.8406"
        />
      </g>
    </SvgIcon>
  );
}

AngularIcon.propTypes = {
  /**
   * @ignore
   */
  className: PropTypes.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * You can use the `nativeColor` property to apply a color attribute to the SVG element.
   */
  color: PropTypes.oneOf([
    'inherit',
    'primary',
    'secondary',
    'action',
    'error',
    'disabled',
  ]),
};

AngularIcon.defaultProps = {
  color: 'inherit',
};

export default AngularIcon;
