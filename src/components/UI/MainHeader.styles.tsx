import styled from 'styled-components/macro';
import mainImage from '../../assets/images/main.jpg';

export const HeaderContainer = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 165, 0, 0.8)),
    url(${mainImage}) no-repeat center center/cover;
  width: 100%;
  color: #fff;
  text-align: center;
  margin-bottom: 2rem;
  height: 100vh;

  @media (min-width: 600px) {
    height: 60vh;
  }
`;

export const Header = styled.header.attrs({
  id: 'main-header',
  className: 'container',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;

  h1 {
    font-size: 8rem;
    line-height: 1;
    margin-bottom: 3rem;
  }

  p {
    font-size: 3rem;
  }
`;
