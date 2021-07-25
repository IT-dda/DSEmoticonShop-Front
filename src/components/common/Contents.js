import React from 'react';
import styled from 'styled-components';
import FaQItem from './FaQItem';
import FaQMenu from './FaQMenu';
import NoticeItem from './NoticeItem';
import TitleAside from './TitleAside';

const CenterBlock = styled.div`
  margin: 0 25%;
`;

const TitleBlock = styled.div`
  display: block;
  position: relative;
  padding: 40px 0px;

  img {
    position: absolute;
    bottom: 0;
    right: 50px;
    width: 100px;
  }
`;

const ContentsBlock = styled.div`
  flex-direction: column-reverse;
`;

const Contents = ({ title }) => {
  return (
    <>
      <CenterBlock>
        <TitleBlock>
          <TitleAside>{title}</TitleAside>
          {title === '자주묻는 질문' ? <FaQMenu /> : null}
          {title === '새소식' ? (
            <img src="/image/img_notice.png" alt="새소식 기본이미지" />
          ) : (
            <img src="/image/img_faq.png" alt="자주묻는질문 기본이미지" />
          )}
        </TitleBlock>
        <ContentsBlock>
          {title === '새소식' ? (
            <NoticeItem notice_tit="[EVENT] 이모티콘샵은 언제나 전상품 20% 할인 중!" />
          ) : (
            <>
              <FaQItem faq_tit="자주묻는 질문 타이틀" />
              <FaQItem faq_tit="자주묻는 질문 타이틀" />
              <FaQItem faq_tit="자주묻는 질문 타이틀" />
              <FaQItem faq_tit="자주묻는 질문 타이틀" />
            </>
          )}
        </ContentsBlock>
      </CenterBlock>
    </>
  );
};

export default Contents;
