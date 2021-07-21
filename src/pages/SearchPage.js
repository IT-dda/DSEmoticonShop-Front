import React from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
`;

const SearchLink = styled(Link)`
  width: 30px;
  height: 30px;
  margin-left: 25px;

  .searchImg {
    width: 30px;
    height: 30px;
  }
`;

const ExampleBlock = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchPage = () => {
  return (
    <>
      <Header hideSearch={true}></Header>
      <Fullscreen>
        <SearchModalBlock>
          <input type="text" placeholder="이모티콘을 검색해보세요!" />
          <SearchLink to="/search">
            <AiOutlineSearch className="searchImg"></AiOutlineSearch>
          </SearchLink>
        </SearchModalBlock>
      </Fullscreen>
      <ExampleBlock>검색 결과 창</ExampleBlock>
    </>
  );
};

export default SearchPage;
