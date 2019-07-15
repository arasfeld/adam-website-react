import React from 'react';
import SvgIcon from '../SvgIcon';

const EqualizerIcon: React.FC<{}> = () => {
  return (
    <SvgIcon viewBox="0 0 100 100">
      <g transform="rotate(180 50 50)">
        <rect x="12" y="15" width="16" height="12.189">
          <animate
            attributeName="height"
            calcMode="spline"
            values="50;75;10;50"
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
            dur="1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1"
            repeatCount="indefinite"
            begin="0s"
          />
        </rect>
      </g>
    </SvgIcon>
  );
};

export default EqualizerIcon;
