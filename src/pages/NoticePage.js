// 새소식
import React from 'react';
import Contents from '../components/common/Contents';
import styled from 'styled-components';
import Header from '../components/common/Header';

const NoticePageBlock = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
`;

const NoticePage = () => {
  return (
    <NoticePageBlock>
      <Header />
      <Contents title={'새소식'} />
    </NoticePageBlock>
  );
};

export default NoticePage;
