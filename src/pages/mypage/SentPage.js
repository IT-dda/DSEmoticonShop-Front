import React from 'react';
import styled from 'styled-components';
import MenuPresnet from '../../components/common/MenuPresent';
import SentItem from './mypageList/SentItem';

const SentPageBlock = styled.div`
  margin: 0 20%;

  ul li {
    display: inline-block;
  }
`;

const SentPage = () => {
  return (
    <SentPageBlock>
      <MenuPresnet />
      <hr />
      <ul>
        <li>
          <SentItem />
        </li>
        <li>
          <SentItem />
        </li>
        <li>
          <SentItem />
        </li>
        <li>
          <SentItem />
        </li>
      </ul>{' '}
    </SentPageBlock>
  );
};

export default SentPage;
