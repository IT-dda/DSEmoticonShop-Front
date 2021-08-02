import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const BannerMyBlock = styled.div`
  width: 100%;
  height: 190px;
  color: #ffffff;

  background: #6693eb;
  background-image: url('/image/bnr_bg_my.png');
  background-repeat: no-repeat;
  background-position: right;

  .my_header {
    margin: 0 20%;
  }

  .my_tit {
    font-size: 28px;
    /* line-height: 41px; */
    padding: 30px 0px;
    font-weight: bold;
  }
  .my_btns {
    ul {
      display: block;
      padding: 0;
      li {
        display: inline-block;
        margin-right: 8px;
      }
    }
  }
`;

const Item = styled.li`
  background: ${(props) => (props.current ? '#ffffff' : 'rgba(0, 0, 0, 0.1)')};
  color: ${(props) => (props.current ? '#4774c1' : '#ffffff')};
  font-weight: ${(props) => (props.current ? 'bold' : 'none')};

  border: none;
  display: inline-block;
  height: 36px;
  padding: 0 18px;
  border-radius: 19px;
  line-height: 36px;
  vertical-align: top;

  &:hover {
    background: #ffffff;
    color: #4774c1;
    font-weight: bold;
  }
`;

const BannerMy = ({ location: { pathname } }) => {
  return (
    <BannerMyBlock>
      <div className="my_header">
        <div className="my_tit">마이페이지</div>
        <div className="my_btns">
          <ul>
            <Item current={pathname === '/mypage/purchases'}>
              <Link to="/mypage/purchases">구매내역</Link>
            </Item>
            <Item
              current={
                pathname === '/mypage/presents/received' ||
                pathname === '/mypage/presents/sent'
              }
            >
              <Link to="/mypage/presents/received">선물함</Link>
            </Item>
            <Item
              current={
                pathname === '/mypage/coupons' ||
                pathname === '/mypage/coupons/used'
              }
            >
              <Link to="/mypage/coupons">쿠폰함</Link>
            </Item>
            <Item current={pathname === '/mypage/likes'}>
              <Link to="/mypage/likes">좋아요</Link>
            </Item>
          </ul>
        </div>
      </div>
    </BannerMyBlock>
  );
};

export default withRouter(BannerMy);
