import React from 'react';
import { NavLink } from "react-router-dom";

interface iconButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const IconButton: React.FC<iconButtonProps> = ({ children, className, href }) => {
  
  if (!href) {
    return (
      <button className={`iconButton ${className}`} >
        {children}
      </button>
    );
  }

  return (
    <NavLink to={href} className={`iconButton ${className}`} >
      {children}
    </NavLink>
  );
};

export default IconButton;