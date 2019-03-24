import React from 'react';
import { BrandContainer, BrandLogo } from './Brand.styles';

const Brand = (): React.ReactElement => {
  return (
    <BrandContainer>
      <BrandLogo to="/" exact>
        WD
      </BrandLogo>
    </BrandContainer>
  );
};

export default Brand;
