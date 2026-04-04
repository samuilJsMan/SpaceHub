import React from 'react';
import { NavLink } from "react-router-dom";

interface primaryButtonProps {
  children?: React.ReactNode;
  className?: string;
  href?: string;
}

const PrimaryButton: React.FC<primaryButtonProps> = ({ children, className, href }) => {
  let classList=`primaryButton ${className}`;
  
  if (!href) {
    return (
      <button className={`primaryButton ${className}`} >
        {children}
      </button>
    );
  }

  return (
    <NavLink to={href} className={({ isActive }: { isActive: boolean }) =>isActive ? "primaryButtonOpen "+classList : classList} >
      {children}
    </NavLink>
  );
};

export default PrimaryButton;