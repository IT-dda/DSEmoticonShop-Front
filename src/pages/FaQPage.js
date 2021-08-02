import React, { useState, useCallback } from 'react';
import qs from 'qs';
import Contents from '../components/common/Contents';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import FaQItem from '../components/common/FaQItem';

const FaQPageBlock = styled.div`
  width: 100%;
  background: #fafafa;

  /* viewport_height - Hader_height - MyBanner_height - Foter_height */
  min-height: calc(100vh - 110px - 190px - 50px);
`;

const FaQFooter = styled(Footer)`
  height: 50px;
`;

// 쿼리 값
const queryValue = ['INFO', 'REGISTER', 'SERVICE', 'PAYMENT', 'ETC'];

const FaQPage = ({ location }) => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => {
    setCategory(category);
  }, []);

  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });

  const showCategName = query.category_name === queryValue[0];

  return (
    <>
      <Header />
      <FaQPageBlock>
        <Contents
          title="자주묻는 질문"
          category={category}
          onSelect={onSelect}
        />

        <FaQItem faq_tit="자주묻는 질문1" category={category} />
        <FaQItem faq_tit="자주묻는 질문2" />
        <FaQItem faq_tit="자주묻는 질문3" />
        <FaQItem faq_tit="자주묻는 질문4" />
      </FaQPageBlock>
      {showCategName && <p>category_name 값을 {queryValue[0]}로 설정</p>}
      {window.location.href}

      <FaQFooter />
    </>
  );
};

export default FaQPage;
