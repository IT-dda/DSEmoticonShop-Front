import React from 'react';
import StyleGroupItemList from '../components/style/StyleGroupItemList';
import StyleGroupMenu from '../components/style/StyleGroupMenu';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyleGroupPage = ({ match }) => {
  const { id } = match.params;
  return (
    <>
      <Header menu="style"></Header>
      <StyleGroupMenu id={id}></StyleGroupMenu>
      <Wrapper>
        <StyleGroupItemList></StyleGroupItemList>
      </Wrapper>
    </>
  );
};

export default StyleGroupPage;
