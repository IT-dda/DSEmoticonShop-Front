import React from 'react';
import StyleBox from '../components/style/StyleBox';
import styled from 'styled-components';
import Banner from '../components/common/Banner';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  /* viewport_height - Hader_height - Banner_height */
  min-height: calc(100vh - 110px - 170px);
`;

const StylePage = () => {
  return (
    <>
      <Header menu="style"></Header>
      <Wrapper>
        <Banner></Banner>
        <StyleBox name={'인기 이모티콘 시리즈'} id={1} />
        <StyleBox name={'재밌는'} id={2} />
        <StyleBox name={'귀여운'} id={3} />
        <StyleBox name={'동물'} id={4} />
      </Wrapper>
      <Footer />
    </>
  );
};

export default StylePage;
