import React from 'react';
import NewItemList from '../components/new/NewItemList';
import Banner from '../components/common/Banner';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* viewport_height - Hader_height - Banner_height */
  min-height: calc(100vh - 110px - 170px);
`;

const NewPage = () => {
  return (
    <>
      <Header menu="new"></Header>
      <Wrapper>
        <Banner></Banner>
        <NewItemList></NewItemList>
      </Wrapper>
      <Footer />
    </>
  );
};

export default NewPage;
