import React, { BaseSyntheticEvent } from 'react';
import { Nav, NavContainer, NavList, StyleNavLink } from './MainNavbar.styles';
import Brand from './Brand';

interface Props {
  clicked: (e: BaseSyntheticEvent) => void;
  isMenuOpened: boolean;
}

const MainNavbar = (props: Props): React.ReactElement => {
  return (
    <NavContainer isOpened={props.isMenuOpened} onClick={props.clicked}>
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
            <StyleNavLink to="/resume">Resume</StyleNavLink>
          </li>
        </NavList>
      </Nav>
    </NavContainer>
  );
};

export default MainNavbar;
