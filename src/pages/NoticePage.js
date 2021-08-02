// 새소식
import React from 'react';
import Contents from '../components/common/Contents';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import NoticeItem from '../components/common/NoticeItem';

const NoticePageBlock = styled.div`
  width: 100%;
  background: #fafafa;

  /* viewport_height - Hader_height - MyBanner_height - Foter_height */
  min-height: calc(100vh - 110px - 190px - 50px);
`;

const NoticeFooter = styled(Footer)`
  height: 50px;
`;

const NoticePage = () => {
  return (
    <>
      <Header />
      <NoticePageBlock>
        <Contents title="새소식" />
        <NoticeItem notice_tit="[EVENT] 이모티콘샵은 언제나 전상품 20% 할인 중!" />
      </NoticePageBlock>
      <NoticeFooter />
    </>
  );
};

export default NoticePage;
