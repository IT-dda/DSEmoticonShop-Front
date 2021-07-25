import React from 'react';
import Contents from '../components/common/Contents';
import styled from 'styled-components';
import Header from '../components/common/Header';

const FaQPageBlock = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #fafafa;
`;

const FaQPage = () => {
  return (
    <FaQPageBlock>
      <Header />
      <Contents title="자주묻는 질문" />
    </FaQPageBlock>
  );
};

export default FaQPage;
