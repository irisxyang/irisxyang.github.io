import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="nav-container">
      <a className="nav-title" href="#home">
        Iris Yang
      </a>
      <div>
        <NavBarLink destination="#home">Home</NavBarLink>
        <NavBarLink destination="#about">About</NavBarLink>
        <NavBarLink destination="#project">Projects</NavBarLink>
        <NavBarLink destination="#contact">Contact</NavBarLink>
      </div>
    </nav>
  );
}

type NavBarLinkProps = {
  destination: string;
  children: React.ReactNode;
};

function NavBarLink(props: NavBarLinkProps) {
  const { destination, children } = props;
  return (
    <a className="nav-link" href={destination}>
      {children}
    </a>
  );
}

export default NavBar;
