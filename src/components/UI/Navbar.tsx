import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header.attrs({
  id: 'main-header',
})`
  background: #333;
  width: 100%;
  margin-bottom: 2rem;
`;

const Nav = styled.nav.attrs({
  id: 'main-nav',
  className: 'container',
})`
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #fff;
  height: 60px;
`;

const Brand = styled(NavLink).attrs({
  id: 'brand',
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  color: var(--mango);
  font-family: var(--header-font);
  font-size: 2rem;
  width: 4rem;
  height: 4rem;
  transition: color 500ms ease-in-out;

  &:hover {
    //color: var(--mandarin);
  }

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid var(--mango);
    transform: rotate(0deg);
    transition: all 500ms ease-in-out;
  }
  &:hover::after {
    //animation: rotate 500ms ease-in-out forwards;
    transform: rotate(90deg);
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid var(--mandarin);
    transform: rotate(0deg);
    transition: all 500ms ease-in-out;
  }
  &:hover::before {
    //animation: rotate 500ms ease-in-out reverse forwards;
    transform: rotate(-90deg);
  }

  @keyframes rotate {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;
`;

const StyleNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  align-items: center;
  color: #fff;
  height: 100%;
  padding: 0 2rem;
  font-size: 2rem;
  font-weight: 300;

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 5px;
    left: 0;
    bottom: 0;
    background: var(--mango);
    z-index: 1;
    transform: scaleX(0);
    transition: all 300ms ease-in-out;
  }
  &:hover::before,
  &.active::before {
    transform: scaleX(1);
  }

  &:hover,
  &:focus {
    background: #444;
  }

  &.active {
    background: #555;
  }
`;

const Navbar = (): React.ReactElement => {
  return (
    <MainHeader>
      <Nav>
        <Brand to="/" exact>
          WD
        </Brand>
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
