import React from 'react';
import HotBox from '../components/home/HotBox';
import NewBox from '../components/home/NewBox';
import Banner from '../components/common/Banner';
import styled from 'styled-components';
import Header from '../components/common/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return (
    <>
      <Wrapper>
        <Header menu='home'></Header>
        <Banner></Banner>
        <NewBox></NewBox>
        <HotBox></HotBox>
      </Wrapper>
    </>
  );
};

export default HomePage;
