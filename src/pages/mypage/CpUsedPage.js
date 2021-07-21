import React from 'react';
import styled from 'styled-components';
import MenuCoupons from '../../components/common/MenuCoupons';

const CpUsedPageBlock = styled.div`
  margin: 0 20%;
`;

const CpUsedPage = () => {
  return (
    <CpUsedPageBlock>
      <MenuCoupons />
      <hr />
      사용한 쿠폰!!!!
    </CpUsedPageBlock>
  );
};

export default CpUsedPage;
