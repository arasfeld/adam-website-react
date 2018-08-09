import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function WarcraftIcon({ className, color, ...other }) {
  return (
    <SvgIcon
      className={className}
      color={color}
      viewBox="0 0 512 512"
      {...other}
    >
      <g>
        <path
          d="M 255.7, 256.5 m -168, 0 a 168,168 0 1,0 336,0 a 168,168 0 1,0 -336,0
          M134.9,157.9h68.7c-1.4,7.6-2.1,15.3-2.1,23.6c2.8,30.5,22.9,115.2,22.9,115.2L257,164.9L290.4,294
          c0,0,20.1-113.9,20.1-121.5c-0.7-5.6-3.5-11.1-8.3-14.6h72.9c-9.7,9-16.7,20.1-20.8,33.3c-6.2,25-28.5,151.3-28.5,159
          c0.7,8.3,3.5,16,8.3,22.9h-68c1.4-6.2,2.1-12.5,2.1-18.7c0-11.8-10.4-66.6-10.4-66.6s-13.9,56.9-13.9,67.3c0,6.2,1.4,12.5,4.2,18
          h-68.7c0,0,13.2-9.7,13.2-18.7c-1.4-25.7-37.5-159.7-40.3-170.1C150.1,173.9,143.9,164.2,134.9,157.9z"
        />
        <path
          d="M466,256.5c0-42.3-13.2-84-36.8-119.4V85.7c0-1.4-1.4-2.8-2.8-2.8h-51.4c-71.5-49.3-165.9-49.3-237.4,0H86.3
          c-0.7,0-1.4,0-2.1,0.7c-0.7,0.7-0.7,1.4-0.7,2.1v50.7c-50,72.2-50,167.3,0,239.5v50.7c0,1.4,1.4,2.8,2.8,2.8h51.4
          c72.2,49.3,166.6,48.6,238.8-0.7h50.7c1.4,0,2.8-1.4,2.8-3.5l0,0v-50.7C453.5,340.5,466,298.9,466,256.5z M73.8,256.5
          c0-100.7,81.2-181.9,181.9-181.9s181.9,81.2,181.9,181.9s-81.2,181.9-181.9,181.9l0,0l0,0C155,438.4,73.8,357.2,73.8,256.5z"
        />
      </g>
    </SvgIcon>
  );
}

WarcraftIcon.propTypes = {
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

WarcraftIcon.defaultProps = {
  color: 'inherit',
};

export default WarcraftIcon;