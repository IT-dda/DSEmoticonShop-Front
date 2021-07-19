import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderBlock = styled.div`
  position: fixed;
  width: 100%;
  height: 110px;
  background: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Spacer = styled.div`
  height: 110px;
`;

const HeaderTop = styled.div`
  width: 100%;
  height: 77px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .title {
    cursor: pointer;
    display: flex;
    align-items: center;
    font-size: 20px;
  }

  .drawer {
    width: 20px;
    height: 20px;
    background: #dddddd;
    margin-left: 10px;
  }

  .itemBox {
    display: flex;
    .search {
      width: 20px;
      height: 20px;
      background: #dddddd;
    }
    .profile {
      width: 20px;
      height: 20px;
      background: #dddddd;
      margin-right: 10px;
    }
    div + div {
      margin-left: 10px;
    }
  }
`;

const menuStyle = css`
  width: 150px;
  display: flex;
  justify-content: center;
  color: #7e7e7e;
  font-size: 15px;
  cursor: pointer;
  text-decoration: none;
`;

const HeaderMenu = styled.div`
  width: 600px;
  height: 33px;
  display: flex;

  .check {
    color: black;
    font-weight: bold;
    border-bottom: 3px solid black;
  }
`;

const StyledLink = styled(Link)`
  ${menuStyle}

  &:hover {
    color: black;
    font-weight: bold;
    border-bottom: 3px solid black;
  }
`;

const Fullscreen = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
`;

const SearchModalBlock = styled.div`
  width: 100%;
  height: 130px;
  background: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;

  input {
    width: 500px;
    height: 45px;
    border-radius: 5px;
    border: 2px solid black;
    padding: 5px 10px;
    font-size: 15px;
  }

  .searchImg {
    width: 50px;
    height: 50px;
    margin-left: 15px;
    background-color: gray;
  }
`;

const SearchSpaceBlock = styled.div`
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`;

const Header = ({ menu }) => {
  const searchInput = useRef();
  const [open, setOpen] = useState(false);

  const onSearch = () => {
    setOpen(true);
  };

  const onClickOutside = () => {
    setOpen(false);
  };

  return (
    <>
      <HeaderBlock>
        <HeaderTop>
          <div className="drawer"></div>
          <div className="title">
            DS<b>emoticon</b> shop
          </div>
          <div className="itemBox">
            <div className="search" onClick={onSearch}></div>
            <div className="profile"></div>
          </div>
        </HeaderTop>
        <HeaderMenu>
          <StyledLink to="/" className={menu === 'home' ? 'check' : ''}>
            홈
          </StyledLink>
          <StyledLink to="/item/new" className={menu === 'new' ? 'check' : ''}>
            신규
          </StyledLink>
          <StyledLink to="/item/hot" className={menu === 'hot' ? 'check' : ''}>
            인기
          </StyledLink>
          <StyledLink
            to="/item/style"
            className={menu === 'style' ? 'check' : ''}
          >
            스타일
          </StyledLink>
        </HeaderMenu>
      </HeaderBlock>
      <Spacer />
      {open && (
        <Fullscreen>
          <SearchModalBlock ref={searchInput}>
            <input type="text" placeholder="이모티콘을 검색해보세요!" />
            <div className="searchImg">search</div>
          </SearchModalBlock>
          <SearchSpaceBlock onClick={onClickOutside}></SearchSpaceBlock>
        </Fullscreen>
      )}
    </>
  );
};

export default Header;
