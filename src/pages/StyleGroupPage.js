import React from 'react';
import StyleGroupItemList from '../components/style/StyleGroupItemList';
import StyleGroupMenu from '../components/style/StyleGroupMenu';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyleGroupPage = () => {
  return (
    <>
      <StyleGroupMenu></StyleGroupMenu>
      <Wrapper>
        <StyleGroupItemList></StyleGroupItemList>
      </Wrapper>
    </>
  );
};

export default StyleGroupPage;
