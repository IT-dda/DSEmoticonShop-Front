// 햄버거 메뉴
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DrawerMenuBlock = styled.div`
  /* TODO : 배경색 추후 변경 */
  background: #fff;
  /* TODO: border 지우기 */
  /* border: solid 1px blue; */
  height: 100%;
  width: 290px;
  z-index: 100;
  position: absolute;
  top: 0;
`;

const WrapProfile = styled(Link)`
  div {
    padding: 20px;

    .wrap_thumb {
      vertical-align: middle;

      .thumb_user {
        border-radius: 20px;
      }
    }
    .txt_name {
      font-size: 18px;
      font-weight: bold;
      white-space: nowrap;
      overflow: hidden;
      /* 문자열 넘칠 경우, 말줄임 표시 */
      text-overflow: ellipsis;

      padding-left: 12px;
      vertical-align: middle;
    }
  }
`;

const ListMymenu = styled.ul`
  padding-left: 0px;
  text-align: center;
  font-size: 15px;

  li {
    display: inline-block;
    margin-right: 1rem;
    .ico_mymenu {
      display: block;
    }
  }
`;

const ListNav = styled.ul`
  padding-left: 0px;
  padding: 2rem 1rem;
  line-height: 3rem;
  font-size: 18px;
  border-top: solid 0.05rem #efefefea;
  border-bottom: solid 0.05rem #efefefea;

  li {
    &:hover {
      background: #efefefea;
    }
  }
`;

const ListAside = styled.ul`
  padding-left: 0px;
  padding: 0 1rem;
  color: #7f7f7f;
  line-height: 2rem;
  font-size: 15px;

  li {
    &:hover {
      background: #efefefea;
    }
  }
`;

const WrapCopyright = styled.div`
  position: absolute;
  bottom: 0;
  border-top: solid 0.05rem #efefefea;
  padding: 12px;

  .link_shop {
    padding: 7px 10px 5px;
  }
  .link_crop {
    font-size: 14px;
    padding: 6px 10px 5px;
    color: #999;
  }
`;

const DrawerMenu = () => {
  // if (!visible) return null;

  return (
    <DrawerMenuBlock>
      <WrapProfile to="/login">
        <div>
          <span className="wrap_thumb">
            <img
              className="thumb_user"
              alt="프로필 기본이미지"
              src="/image/profile_default.png"
              width="56px"
              height="56px"
            />
          </span>
          <span className="txt_name">로그인</span>
        </div>
      </WrapProfile>
      <ListMymenu>
        <li>
          <Link to="/mypage/purchases">
            <span className="ico_mymenu">
              <img
                alt="아이콘 구매내역"
                src="/image/smile.png"
                width="28px"
                heigh="28px"
              />
            </span>
            <span className="txt_mymenu">구매내역</span>
          </Link>
        </li>
        <li>
          <Link to="/mypage/presents/received">
            <span className="ico_mymenu">
              <img
                alt="아이콘 선물함"
                src="/image/gift.png"
                width="28px"
                heigh="28px"
              />
            </span>
            <span className="txt_mymenu">선물함</span>
          </Link>
        </li>
        <li>
          <Link to="/mypage/coupons">
            <span className="ico_mymenu">
              <img
                alt="아이콘 쿠폰함"
                src="/image/ticket.png"
                width="28px"
                heigh="28px"
              />
            </span>
            <span className="txt_mymenu">쿠폰함</span>
          </Link>
        </li>
        <li>
          <Link to="/mypage/likes">
            {' '}
            <span className="ico_mymenu">
              <img
                alt="아이콘 좋아요"
                src="/image/like.png"
                width="28px"
                heigh="28px"
              />
            </span>
            <span className="txt_mymenu">좋아요</span>
          </Link>
        </li>
      </ListMymenu>
      <ListNav>
        <Link to="/">
          <li>홈</li>
        </Link>
        <Link to="/item/new">
          <li>신규</li>
        </Link>
        <Link to="/item/hot">
          <li>인기</li>
        </Link>
        <Link to="/item/style">
          <li>스타일</li>
        </Link>
      </ListNav>
      <ListAside>
        <Link to="/notices">
          <li>새소식</li>
        </Link>
        <Link to="/faq">
          <li>자주묻는 질문</li>
        </Link>
        <Link to="/number" target="_blank">
          <li>이모티콘 일련번호 입력하기</li>
        </Link>
        {/* TODO: 로그아웃 기능 구현 */}
        <Link to="/">
          <li>로그아웃</li>
        </Link>
      </ListAside>
      <WrapCopyright>
        <Link className="link_shop" to="/">
          kakao<b>emoticon</b> shop
        </Link>
        <Link className="link_crop" to="https://www.kakaocorp.com/page/">
          © kakao Crop
        </Link>
      </WrapCopyright>
    </DrawerMenuBlock>
  );
};

export default DrawerMenu;
