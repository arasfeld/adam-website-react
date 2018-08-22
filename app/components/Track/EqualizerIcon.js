import React from 'react';
import PropTypes from 'prop-types';

function EqualizerIcon({ className, color }) {
  return (
    <svg className={className} color={color} viewBox="0 0 100 100">
      <g transform="rotate(180 50 50)">
        <rect x="12" y="15" width="16" height="12.189">
          <animate
            attributeName="height"
            calcMode="spline"
            values="50;75;10;50"
            times="0;0.33;0.66;1"
            dur="1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            repeatCount="indefinite"
            begin="-0.25s"
          />
        </rect>
        <rect x="32" y="15" width="16" height="37.6673">
          <animate
            attributeName="height"
            calcMode="spline"
            values="50;75;10;50"
            times="0;0.33;0.66;1"
            dur="1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            repeatCount="indefinite"
            begin="-0.5s"
          />
        </rect>
        <rect x="52" y="15" width="16" height="55.6621">
          <animate
            attributeName="height"
            calcMode="spline"
            values="50;75;10;50"
            times="0;0.33;0.66;1"
            dur="1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            repeatCount="indefinite"
            begin="-0.75s"
          />
        </rect>
        <rect x="72" y="15" width="16" height="74.0704">
          <animate
            attributeName="height"
            calcMode="spline"
            values="50;75;10;50"
            times="0;0.33;0.66;1"
            dur="1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            repeatCount="indefinite"
            begin="0s"
          />
        </rect>
      </g>
    </svg>
  );
}

EqualizerIcon.propTypes = {
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

EqualizerIcon.defaultProps = {
  color: 'inherit',
};

export default EqualizerIcon;
