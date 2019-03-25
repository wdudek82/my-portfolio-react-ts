import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

interface NavContainerProps {
  isOpened: boolean;
}

export const NavContainer = styled.section`
  position: fixed;
  display: flex;
  align-items: center;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.9);
  color: #fff;
  border-radius: 50%;
  opacity: ${(p: NavContainerProps) => (p.isOpened ? 1 : 0)};
  z-index: ${(p: NavContainerProps) => (p.isOpened ? 0 : -1)};
  transform: scale(0, 0);
  transition: all 300ms ease-in-out;

  ${(p) =>
  p.isOpened &&
  css`
      border-radius: 0;
      transform: scale(1, 1);
    `};

  @media (min-width: 900px) {
    position: relative;
    justify-content: space-between;
    background: rgba(51, 51, 51, 1);
    height: 60px;
    border-radius: 0;
    opacity: 1;
    z-index: 0;
    transform: scale(1, 1);
  }
`;

export const Nav = styled.nav.attrs({
  id: 'main-nav',
  className: 'container',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 900px) {
    flex-direction: row;
    justify-content: space-between;
    height: 100%;
  }
`;

export const NavList = styled.ul`
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    flex-direction: row;
  }
`;

export const StyleNavLink = styled(NavLink)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  height: 60px;
  padding: 0 2rem;
  font-size: 3rem;
  font-weight: 300;
  margin-left: -15px;
  margin-right: -15px;

  &.active {
    color: var(--mango);
    font-weight: 700;
  }

  @media (min-width: 900px) {
    color: #fff;
    font-size: 2rem;
    font-weight: 400;
    height: 100%;
    margin-left: 0;
    margin-right: 0;

    &:hover,
    &:focus,
    &.active {
      background: var(--dust);
    }

    &::before {
      position: absolute;
      content: '';
      background: var(--mango);
      width: 100%;
      height: 5px;
      left: 0;
      bottom: 0;
      z-index: 1;
      transform: scaleX(0);
      transition: all 300ms ease-in-out;
    }
    &:hover::before,
    &.active::before {
      transform: scaleX(1);
    }

    &.active {
      background: var(--dust-light);
      color: #fff;
      font-weight: 300;
      border: none;
    }
  }
`;
