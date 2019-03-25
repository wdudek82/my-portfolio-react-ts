import styled from 'styled-components/macro';

interface HamburgerProps {
  isMenuOpened: boolean;
}

export default styled.button.attrs({
  type: 'button',
})`
  position: fixed;
  display: ${(props: HamburgerProps) => (props.isMenuOpened ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;
  bottom: 2rem;
  background: #000;
  color: #fff;
  border: none;
  border-radius: 50%;
  height: 5rem;
  width: 5rem;
  font-size: 2rem;
  right: calc(50% - 3rem);
  cursor: pointer;
  opacity: 0.8;
  
  @media (min-width: 600px) {
    height: 6rem;
    width: 6rem;
    font-size: 3rem;
  }

  @media (min-width: 900px) {
    display: none;
  }
`;
