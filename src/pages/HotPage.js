import React from 'react';
import Banner from '../components/common/Banner';
import HotItemList from '../components/hot/HotItemList';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const HotPage = () => {
  return (
    <>
      <Banner></Banner>
      <Wrapper>
        <HotItemList></HotItemList>
      </Wrapper>
    </>
  );
};

export default HotPage;
