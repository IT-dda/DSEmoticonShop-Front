import React from 'react';

import HotBox from '../components/home/HotBox';
import NewBox from '../components/home/NewBox';
import Banner from '../components/common/Banner';
import styled from 'styled-components';
import Header from '../components/common/Header';
import StyleBox from '../components/home/StyleBox';
import Footer from '../components/common/Footer';
// import DrawerMenu from '../components/mypage/DrawerMenu';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* viewport_height - Hader_height - Banner_height */
  min-height: calc(100vh - 110px - 170px);
`;

const HomePage = () => {
  return (
    <>
      {/* TODO: 메뉴바 버튼 클릭 -> 햄버거 메뉴 활성화 -> 외부 영역 클릭 -> 헴버거 메뉴 비활성화 */}
      {/* <DrawerMenu /> */}
      <Header menu="home"></Header>
      <Wrapper>
        <Banner></Banner>
        <NewBox></NewBox>
        <HotBox></HotBox>
        <StyleBox></StyleBox>
      </Wrapper>
      <Footer />
    </>
  );
};

export default HomePage;
