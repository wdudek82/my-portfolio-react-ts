import React, { BaseSyntheticEvent } from 'react';
import HbgWrapper from './Hamburger.styles';

interface Props {
  clicked: (e: BaseSyntheticEvent) => void;
  isMenuOpened: boolean;
}

const Hamburger = (props: Props): React.ReactElement => {
  return (
    <HbgWrapper onClick={props.clicked} isMenuOpened={props.isMenuOpened}>
      <i className="fas fa-hamburger" aria-label="hidden" />
    </HbgWrapper>
  );
};

export default Hamburger;
