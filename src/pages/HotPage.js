import React from 'react';
import Banner from '../components/common/Banner';
import HotItemList from '../components/hot/HotItemList';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HotPage = () => {
  return (
    <>
      <Header menu="hot"></Header>
      <Banner></Banner>
      <Wrapper>
        <HotItemList></HotItemList>
      </Wrapper>
    </>
  );
};

export default HotPage;
