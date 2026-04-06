import React from 'react';
import { NavLink } from "react-router-dom";

interface FooterAboutListLinkProps {
  children?: React.ReactNode;
  className?: string;
  href: string;
}

const FooterAboutListLink: React.FC<FooterAboutListLinkProps> = ({ children, className, href }) => {
  return (
    <NavLink to={href} className={`${className} FooterAboutListLink`}>
      {children}
    </NavLink>
  );
};

export default FooterAboutListLink