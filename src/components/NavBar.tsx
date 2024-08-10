import React from "react";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <NavBarLink destination="/">Home</NavBarLink>
      <NavBarLink destination="/about">About</NavBarLink>
    </nav>
  );
}

type NavBarLinkProps = {
  destination: string;
  children: React.ReactNode;
};

function NavBarLink(props: NavBarLinkProps) {
  const { destination, children } = props;
  return <Link to={destination}>{children}</Link>;
}

export default NavBar;
