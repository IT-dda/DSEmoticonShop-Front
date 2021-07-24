import React from 'react';
import styled from 'styled-components';
import NoticeItem from './NoticeItem';
import TitleAside from './TitleAside';

const CenterBlock = styled.div`
  margin: 0 25%;
`;

const TitleBlock = styled.div`
  display: flex;
  position: relative;
  padding: 40px 0px;

  img {
    position: absolute;
    bottom: 0;
    right: 50px;
    width: 100px;
  }
`;

const NoticesBlock = styled.div`
  flex-direction: column-reverse;
`;

const Contents = () => {
  return (
    <>
      <CenterBlock>
        <TitleBlock>
          <TitleAside>새소식</TitleAside>
          <img src="/image/img_notice.png" alt="새소식 기본이미지" />
        </TitleBlock>
        <NoticesBlock>
          <NoticeItem notice_tit="[EVENT] 이모티콘샵은 언제나 전상품 20% 할인 중!" />
        </NoticesBlock>
      </CenterBlock>
    </>
  );
};

export default Contents;
