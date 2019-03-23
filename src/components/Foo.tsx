import React from 'react';
import styled from 'styled-components';

const Main = styled.main.attrs({
  className: 'container',
})``;

const Foo = (): React.ReactElement => {
  return (
    <Main>
      <h1>The Monster Slayer</h1>
      <p>Foo!</p>
    </Main>
  );
};

export default Foo;
