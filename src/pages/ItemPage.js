import React from 'react';
import styled from 'styled-components';
import ItemTop from '../components/item/ItemTop';
import ItemBody from '../components/item/ItemBody';
import ItemBottom from '../components/item/ItemBottom';
import Header from '../components/common/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ItemPage = ({ match }) => {
  const { emoticon_name } = match.params;

  return (
    <>
      <Header />
      <Wrapper>
        <ItemTop name={emoticon_name} />
        <ItemBody />
        <ItemBottom />
      </Wrapper>
    </>
  );
};

export default ItemPage;
