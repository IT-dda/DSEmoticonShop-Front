import React from 'react';
import styled from 'styled-components';
import MenuPresnet from '../../components/common/MenuPresent';

const SentPageBlock = styled.div`
  margin: 0 20%;
`;

const SentPage = () => {
  return (
    <SentPageBlock>
      <MenuPresnet />
      <hr />
      보낸 선물함 ~!~!~!~
    </SentPageBlock>
  );
};

export default SentPage;
