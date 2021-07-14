import React from 'react';
import styled from 'styled-components';
import ItemTop from '../components/item/ItemTop';
import ItemBody from '../components/item/ItemBody';
import ItemBottom from '../components/item/ItemBottom';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemPage = () => {
  return (
    <Wrapper>
      <ItemTop />
      <ItemBody />
      <ItemBottom />
    </Wrapper>
  );
};

export default ItemPage;
