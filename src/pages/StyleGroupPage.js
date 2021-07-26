import React from 'react';
import StyleGroupItemList from '../components/style/StyleGroupItemList';
import StyleGroupMenu from '../components/style/StyleGroupMenu';
import styled from 'styled-components';
import Header from '../components/common/Header';
import qs from 'qs';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyleGroupPage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const id = parseInt(query.id);
  const group = parseInt(query.group);

  return (
    <>
      <Header menu="style"></Header>
      <StyleGroupMenu id={id} group={group}></StyleGroupMenu>
      <Wrapper>
        <StyleGroupItemList></StyleGroupItemList>
      </Wrapper>
    </>
  );
};

export default StyleGroupPage;
