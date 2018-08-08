import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function CSharpIcon({ className, color, ...other }) {
  return (
    <SvgIcon className={className} color={color} viewBox="0 0 64 64" {...other}>
      <circle fill="#05930c" cx="32" cy="32" r="32" />
      <path fill="#fff" opacity="0.1" d="M9.82,9A32,32,0,1,0,55,54.18Z" />
      <path
        fill="#fff"
        d="M30.43,43.55a14.78,14.78,0,0,1-7,1.48,11.23,11.23,0,0,1-8.61-3.46,12.78,12.78,0,0,1-3.23-9.09,13.39,13.39,0,0,1,3.64-9.77A12.35,12.35,0,0,1,24.49,19a14.8,14.8,0,0,1,5.94,1v3.15a12,12,0,0,0-6-1.51,9.17,9.17,0,0,0-7,2.9,10.93,10.93,0,0,0-2.7,7.75,10.4,10.4,0,0,0,2.52,7.34,8.58,8.58,0,0,0,6.62,2.73,12.42,12.42,0,0,0,6.57-1.69Z"
      />
      <path
        fill="#fff"
        d="M52.76,26.46l-.4,1.86H47.76L46.66,33.6H51.6l-.47,1.86H46.29l-1.55,7H42.53l1.51-7H39.64l-1.48,7H36l1.48-7H32.84l.35-1.86h4.66l1.07-5.27H34.05l.37-1.86h4.87l1.48-7.07H43l-1.48,7.07h4.43l1.51-7.07h2.16l-1.48,7.07Zm-7.17,1.86H41.15L40,33.6h4.46Z"
      />
    </SvgIcon>
  );
}

CSharpIcon.propTypes = {
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

CSharpIcon.defaultProps = {
  color: 'inherit',
};

export default CSharpIcon;
