import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BrandContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const BrandLogo = styled(NavLink).attrs({
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

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid var(--mango);
    transform: rotate(0deg);
    transition: all 500ms ease-in-out;
  }
  &:hover::after,
  &:focus::after {
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
  &:hover::before,
  &:focus::before {
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
