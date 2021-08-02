import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import TitleMy from './TitleMy';

const MenuCouponsBlock = styled.div`
  display: flex;

  .title_my {
    margin-right: 1rem;
  }
`;

const MenuCoupons = () => {
  return (
    <MenuCouponsBlock>
      <Link className="title_my" to="/mypage/coupons">
        <TitleMy title="보유쿠폰" />
      </Link>
      <Link className="title_my" to="/mypage/coupons/used">
        <TitleMy title="사용한 쿠폰" />
      </Link>
    </MenuCouponsBlock>
  );
};

export default MenuCoupons;
