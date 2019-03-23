import React from 'react';
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
  height: 50px;
`;

const Brand = styled.a.attrs({
  id: 'brand',
})`
  display: flex;
  align-items: center;
  color: var(--mango);
  font-family: var(--header-font);
  font-size: 3rem;
`;

const NavList = styled.ul`
  display: flex;
  height: 100%;
`;

const NavItem = styled.li.attrs({})`
  a {
    display: flex;
    align-items: center;
    color: #fff;
    height: 100%;
    padding: 0 2rem;
    font-size: 2rem;
    font-weight: 300;

    &:hover,
    &:focus {
      background: #444;
    }

    &:active {
      background: #555;
    }
  }
`;

const Navbar = (): React.ReactElement => {
  return (
    <MainHeader>
      <Nav>
        <Brand href="/">Hello!</Brand>
        <NavList>
          <NavItem>
            <a href="/">Home</a>
          </NavItem>
          <NavItem>
            <a itemID="foo" href="#">
              About
            </a>
          </NavItem>
          <NavItem>
            <a href="#">Contact</a>
          </NavItem>
          <NavItem>
            <a href="#">Projects</a>
          </NavItem>
          <NavItem>
            <a href="#">CV</a>
          </NavItem>
        </NavList>
      </Nav>
    </MainHeader>
  );
};

export default Navbar;
