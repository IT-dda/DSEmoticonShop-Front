import React from 'react';
import styled from 'styled-components';
import TitleMy from '../../components/common/TitleMy';
import PurchasesItem from './mypageList/PurchasesItem';

const PurchasesPageBlock = styled.div`
  margin: 0 20%;
`;

const PurchasesPage = () => {
  return (
    <PurchasesPageBlock>
      <TitleMy title="구매내역" />
      <hr />
      <PurchasesItem />
    </PurchasesPageBlock>
  );
};

export default PurchasesPage;
