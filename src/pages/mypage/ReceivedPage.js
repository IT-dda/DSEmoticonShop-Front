import React from 'react';
import styled from 'styled-components';
import MenuPresnet from '../../components/common/MenuPresent';

const ReceivedPageBlock = styled.div`
  margin: 0 20%;
`;

const ReceivedPage = () => {
  return (
    <ReceivedPageBlock>
      <MenuPresnet />
      <hr />
      받은 선물함 ~!~!~!~
    </ReceivedPageBlock>
  );
};

export default ReceivedPage;
