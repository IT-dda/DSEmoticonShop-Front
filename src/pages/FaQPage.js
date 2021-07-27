import React from 'react';
import Contents from '../components/common/Contents';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const FaQPageBlock = styled.div`
  width: 100%;
  background: #fafafa;

  /* viewport_height - Hader_height - MyBanner_height - Foter_height */
  min-height: calc(100vh - 110px - 190px - 50px);
`;

const FaQFooter = styled(Footer)`
  height: 50px;
`;

const FaQPage = () => {
  return (
    <>
      <Header />
      <FaQPageBlock>
        <Contents title="자주묻는 질문" />
      </FaQPageBlock>
      <FaQFooter />
    </>
  );
};

export default FaQPage;
