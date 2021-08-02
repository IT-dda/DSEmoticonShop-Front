import React from 'react';
import Banner from '../components/common/Banner';
import HotItemList from '../components/hot/HotItemList';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  /* viewport_height - Hader_height - Banner_height */
  min-height: calc(100vh - 110px - 170px);
`;

const HotPage = () => {
  return (
    <>
      <Header menu="hot"></Header>
      <Banner></Banner>
      <Wrapper>
        <HotItemList></HotItemList>
      </Wrapper>
      <Footer />
    </>
  );
};

export default HotPage;
