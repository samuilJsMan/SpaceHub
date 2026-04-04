import React from 'react';
import { NavLink } from "react-router-dom";

interface navButtonProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

const NavButton: React.FC<navButtonProps> = ({ children, className, href }) => {
  let classList=`navButton ${className}`;
  return (
    <NavLink to={href} className={({ isActive }: { isActive: boolean }) =>isActive ? "navButtonOpened "+classList : classList}>
      {children}
    </NavLink>
  );
};

export default NavButton;