import React from 'react';
import styled from 'styled-components';
import MenuCoupons from '../../components/common/MenuCoupons';

const CpHavePageBlock = styled.div`
  margin: 0 20%;
`;

const CpHavePage = () => {
  return (
    <CpHavePageBlock>
      <MenuCoupons />
      <hr />
      보유 쿠폰!!!!
    </CpHavePageBlock>
  );
};

export default CpHavePage;
