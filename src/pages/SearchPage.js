import React, { useState } from 'react';
import Header from '../components/common/Header';
import styled from 'styled-components';
import { AiOutlineSearch } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import SearchItemList from '../components/search/SearchItemList';
import qs from 'qs';

const SearchModalBlock = styled.div`
  position: fixed;
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

const Spacer = styled.div`
  height: 130px;
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

const SearchItemBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SearchPage = ({ location }) => {
  const query = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  const [search, setSearch] = useState(query.q); // search 창에 입력한 단어

  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <>
      <Header hideSearch={true}></Header>
      <SearchModalBlock>
        <input
          type="text"
          placeholder="이모티콘을 검색해보세요!"
          onChange={onChange}
          value={search}
        />
        <SearchLink to={`/search?q=${search}`}>
          <AiOutlineSearch className="searchImg"></AiOutlineSearch>
        </SearchLink>
      </SearchModalBlock>
      <Spacer></Spacer>
      <SearchItemBlock>
        <SearchItemList></SearchItemList>
      </SearchItemBlock>
    </>
  );
};

export default SearchPage;
