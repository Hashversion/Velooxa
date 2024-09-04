"use client";

import { LinkProps as AProps, Link } from "react-aria-components";

interface LinkProps extends AProps {
  className?: string;
  children: React.ReactNode;
  href?: string;
}

const NavLink = ({ children, href }: LinkProps) => {
  return (
    <li>
      <Link href={href} className="cursor-pointer font-medium hover:underline">
        {children}
      </Link>
    </li>
  );
};

export default NavLink;
