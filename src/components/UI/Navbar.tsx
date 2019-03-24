import React from 'react';
import { MainHeader, Nav, NavList, StyleNavLink } from './Navbar.styles';
import Brand from './Brand';

const Navbar = (): React.ReactElement => {
  return (
    <MainHeader>
      <Nav>
        <Brand />
        <NavList>
          <li>
            <StyleNavLink to="/" exact>
              Home
            </StyleNavLink>
          </li>
          <li>
            <StyleNavLink to="/about">About</StyleNavLink>
          </li>
          <li>
            <StyleNavLink to="/contact">Contact</StyleNavLink>
          </li>
          <li>
            <StyleNavLink to="/projects">Projects</StyleNavLink>
          </li>
          <li>
            <StyleNavLink to="/cv">CV</StyleNavLink>
          </li>
        </NavList>
      </Nav>
    </MainHeader>
  );
};

export default Navbar;
