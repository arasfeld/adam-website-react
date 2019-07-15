import React from 'react';
import './SvgIcon.css';

interface SvgIconProps {
  readonly children: JSX.Element[] | JSX.Element;
  readonly titleAccess?: boolean;
  readonly viewBox: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({ children, titleAccess = false, viewBox, ...other }) => {
  return (
    <svg
      className="App-svgIcon"
      focusable="false"
      viewBox={viewBox}
      aria-hidden={titleAccess ? 'false' : 'true'}
      {...other}
    >
      {children}
      {titleAccess ? <title>{titleAccess}</title> : null}
    </svg>
  );
};

export default SvgIcon;
