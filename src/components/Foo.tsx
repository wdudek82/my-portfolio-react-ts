import React from 'react';
import styled from 'styled-components';

const StyledP = styled.p`
  margin: 2rem 0;
`;

const Main = styled.main.attrs({
  className: 'container',
})``;

const Foo = (): React.ReactElement => {
  return (
    <Main>
      <h1>The Monster Slayer</h1>
      <StyledP>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
        dolor dolores ducimus earum, eos est fugit illum, ipsam laborum minima
        nisi officia placeat quis rem, similique sit sunt totam voluptate.
      </StyledP>
      <StyledP>
        Corporis debitis ducimus ipsum provident voluptatum! Aperiam fuga nam
        odit quaerat repellendus sed sunt. Enim quas saepe tempora! A aperiam at
        dicta ducimus eum fugit, hic maiores nesciunt pariatur placeat!
      </StyledP>
      <StyledP>
        Ex libero minus natus recusandae temporibus! Animi at, aut debitis
        deleniti doloribus eius error explicabo laboriosam optio pariatur qui
        voluptate? Distinctio facere ipsam itaque maiores obcaecati repellendus
        tempora ut, voluptas.
      </StyledP>
      <StyledP>
        A amet animi aut consectetur ex exercitationem laboriosam magni maiores
        natus nobis numquam, quasi quos repellat sapiente sed vel vero.
        Assumenda enim explicabo hic iure modi ratione soluta sunt voluptas.
      </StyledP>
      <StyledP>
        Ab aliquid aperiam aspernatur commodi consequuntur distinctio, dolor
        dolore ducimus eligendi eos est ex excepturi id ipsam iusto magni neque
        omnis quae quasi repudiandae similique tempore totam unde voluptas
        voluptate!
      </StyledP>
      <StyledP>
        Aperiam, consequuntur culpa dicta et exercitationem explicabo fuga hic
        id incidunt laboriosam modi nam nulla porro possimus praesentium rerum
        voluptatem! A corporis cumque, dolores exercitationem maxime rem sit
        tempore tenetur?
      </StyledP>
      <StyledP>
        Animi cumque magni modi optio quam voluptatem voluptatibus? Accusamus,
        alias animi aperiam architecto dolorem eius harum hic ipsam labore
        laboriosam minus, molestiae natus necessitatibus nobis quaerat quos rem
        saepe voluptates.
      </StyledP>
      <StyledP>
        Accusamus accusantium assumenda at culpa debitis doloribus dolorum eaque
        eligendi facere illum maxime, nobis obcaecati odit officiis praesentium
        quod recusandae repellat repellendus rerum tempore! Adipisci alias iusto
        laboriosam nostrum possimus?
      </StyledP>
      <StyledP>
        Dolorum nostrum quaerat quam repudiandae similique. Commodi cumque modi
        natus obcaecati officiis ratione vero voluptate. Delectus eaque ipsum
        minima necessitatibus pariatur quos rem rerum sint? Culpa fugit officia
        officiis vero!
      </StyledP>
      <StyledP>
        At cupiditate dolores, eveniet expedita magnam magni repellat? Ad
        adipisci autem commodi error laboriosam minus modi officia, omnis,
        perspiciatis provident quia quos ratione, reiciendis rem repellat rerum
        totam voluptas voluptatum.
      </StyledP>
    </Main>
  );
};

export default Foo;
