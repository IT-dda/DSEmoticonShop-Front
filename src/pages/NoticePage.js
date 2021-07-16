// 새소식
import React from 'react';
import Contents from '../components/common/Contents';
import styled from 'styled-components';

const NoticePageBlock = styled.div`
  width: 100%;
  height: 100%;
  background: #fafafa;
`;

const NoticePage = () => {
  return (
    <NoticePageBlock>
      <Contents title={'새소식'} />
    </NoticePageBlock>
  );
};

export default NoticePage;
