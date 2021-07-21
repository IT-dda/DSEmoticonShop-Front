import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TitleMy from './TitleMy';

const MenuPresentBlock = styled.div`
  display: flex;

  .title_my {
    margin-right: 1rem;
  }
`;

const MenuPresnet = () => {
  return (
    <MenuPresentBlock>
      <Link className="title_my" to="/mypage/presents/received">
        <TitleMy title="받은 선물함" />
      </Link>
      <Link className="title_my" to="/mypage/presents/sent">
        <TitleMy title="보낸 선물함" />
      </Link>
    </MenuPresentBlock>
  );
};

export default MenuPresnet;
