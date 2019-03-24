import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainHeader = styled.header.attrs({
  id: 'main-header',
})`
  background: #333;
  width: 100%;
  margin-bottom: 2rem;
`;

export const Nav = styled.nav.attrs({
  id: 'main-nav',
  className: 'container',
})`
  display: flex;
  justify-content: space-between;
  background: #333;
  color: #fff;
  height: 60px;
`;


export const NavList = styled.ul`
  display: flex;
  height: 100%;
`;

export const StyleNavLink = styled(NavLink)`
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
