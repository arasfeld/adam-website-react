import React from 'react';
import PropTypes from 'prop-types';
import SvgIcon from '@material-ui/core/SvgIcon';

function RovisysIcon({ className, color, ...other }) {
  return (
    <SvgIcon className={className} color={color} viewBox="0 0 64 64" {...other}>
      <g>
        <path
          fill="#ADB6D8"
          d="M48.962,10.067c2.625,2.844,4.936,5.926,6.961,9.22c2.76,4.484,4.945,9.22,6.131,14.375
	c0.998,4.345,1.27,8.719,0.281,13.101c-1.371,6.085-5.062,10.185-10.816,12.491c-2.488,0.998-5.057,1.709-7.691,2.188
	c-0.57-0.144-1.113,0.032-1.662,0.14c-3.359,0.245-6.426-0.491-9.048-2.71c-0.392-0.333-0.832-0.605-1.212-0.956
	c-0.392-0.505-0.77-1.021-1.129-1.552c-1.388-2.055-1.314-4.222,0.18-6.193c1.342-1.77,3.154-2.937,5.061-3.98
	c2.414-1.321,5.002-2.252,7.504-3.373c5.555-2.487,8.682-6.778,9.449-12.823c0.375-2.944,0.064-5.835-0.438-8.725
	c-0.055-0.308-0.17-0.583-0.355-0.833c-0.414-3.245-1.688-6.211-2.951-9.184C49.067,10.878,48.714,10.537,48.962,10.067z"
        />
        <path
          fill="#2F579E"
          d="M48.962,10.067c1.168,2.59,2.252,5.211,3.01,7.958c0.225,0.812,0.486,1.612,0.34,2.472
	c0.24,0.345,0.111,0.703,0.029,1.057c-0.879,3.812-3.443,5.461-7.424,4.744c-2.654-0.479-4.99-1.746-7.307-3.045
	c-1.438-0.805-2.783-1.758-4.204-2.593c-5.209-3.072-10.545-3.262-15.994-0.686c-2.531,1.197-4.768,2.825-6.805,4.732
	c-0.423,0.396-0.945,0.676-1.295,1.151c-2.183,2.21-4.138,4.608-5.885,7.178c-0.188,0.274-0.327,0.611-0.639,0.757
	c-0.367,0.172-0.417-0.037-0.313-0.344c3.196-10.607,8.275-20.008,17.344-26.8c3.651-2.734,7.71-4.42,12.368-4.627
	c5.422-0.241,9.879,1.878,13.915,5.229C47.136,8.107,48.087,9.048,48.962,10.067z"
        />
        <path
          fill="#7181BB"
          d="M2.476,33.447c0.125,0.516,0.263,0.225,0.404,0.008c0.895-1.376,1.88-2.689,2.898-3.976
	c1.036-1.309,2.157-2.541,3.335-3.723c1.104-0.777,2.375-1.121,3.679-1.276c2.796-0.332,4.954,0.976,5.997,3.62
	c0.72,1.826,1.03,3.734,1.191,5.698c0.219,2.66-0.198,5.29-0.168,7.926c0.06,5.278,2.096,9.644,6.5,12.754
	c1.474,1.04,3.027,1.939,4.703,2.617c0.373,0.151,0.706,0.358,0.934,0.704c1.029,0.376,1.655,1.303,2.569,1.851
	c2.377,1.424,4.98,1.805,7.684,1.813c0.209-0.057,0.457-0.239,0.537,0.152c-9.328,1.733-18.583,1.871-27.642-1.424
	c-4.487-1.632-8.425-4.097-11.26-8.064c-1.73-2.421-2.595-5.147-2.778-8.096c-0.186-3.001,0.077-5.96,0.963-8.847
	C2.196,34.612,2.091,33.966,2.476,33.447z"
        />
      </g>
    </SvgIcon>
  );
}

RovisysIcon.propTypes = {
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

RovisysIcon.defaultProps = {
  color: 'inherit',
};

export default RovisysIcon;