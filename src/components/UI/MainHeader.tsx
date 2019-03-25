import React from 'react';
import { Header, HeaderContainer } from './MainHeader.styles';

const MainHeader = (): React.ReactElement => {
  return (
    <HeaderContainer>
      <Header>
        <h1>Wojciech's Dudek Portfolio</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Expedita,
          sed.
        </p>
      </Header>
    </HeaderContainer>
  );
};

export default MainHeader;
