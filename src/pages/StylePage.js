import React from 'react';
import StyleBox from '../components/style/StyleBox';
import styled from 'styled-components';
import Banner from '../components/common/Banner';
import Header from '../components/common/Header';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const StylePage = () => {
  return (
    <>
      <Header menu="style"></Header>
      <Wrapper>
        <Banner></Banner>
        <StyleBox />
        <StyleBox />
        <StyleBox />
        <StyleBox />
      </Wrapper>
    </>
  );
};

export default StylePage;
