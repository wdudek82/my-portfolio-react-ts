import styled from 'styled-components/macro';
import { NavLink } from 'react-router-dom';

export const BrandContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;

  @media (min-width: 900px) {
    margin-bottom: 0;
  }
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
  font-size: 3rem;
  width: 6rem;
  height: 6rem;
  transition: color 500ms ease-in-out;

  &::after {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid var(--mango);
  }
  &:hover::after,
  &:focus::after {
    animation: rotateAnimation 500ms ease-in-out;
  }

  &::before {
    position: absolute;
    content: '';
    width: 100%;
    height: 100%;
    border: 5px solid var(--mandarin);
  }
  &:hover::before,
  &:focus::before {
    animation: rotateAnimation 500ms ease-in-out reverse;
  }

  @media (min-width: 900px) {
    width: 4rem;
    height: 4rem;
    font-size: 2rem;
  }

  @keyframes rotateAnimation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(90deg);
    }
  }
`;
