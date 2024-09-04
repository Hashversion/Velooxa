"use client";

const NavLink = ({ children }: { children: React.ReactNode }) => {
  return (
    <li>
      <button className="cursor-pointer font-medium hover:underline">{children}</button>
    </li>
  );
};

export default NavLink;
