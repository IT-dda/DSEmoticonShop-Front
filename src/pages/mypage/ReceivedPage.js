import React from 'react';
import styled from 'styled-components';
import MenuPresnet from '../../components/common/MenuPresent';
import ReceivedItem from './mypageList/ReceivedItem';

const ReceivedPageBlock = styled.div`
  margin: 0 20%;

  ul li {
    display: inline-block;
  }
`;

const ReceivedPage = () => {
  return (
    <ReceivedPageBlock>
      <MenuPresnet />
      <hr />
      <ul>
        <li>
          <ReceivedItem />
        </li>
        <li>
          <ReceivedItem />
        </li>
        <li>
          <ReceivedItem />
        </li>
        <li>
          <ReceivedItem />
        </li>
      </ul>
    </ReceivedPageBlock>
  );
};

export default ReceivedPage;
