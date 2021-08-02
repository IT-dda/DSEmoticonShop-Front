import React from 'react';
import styled from 'styled-components';
import SearchItem from './SearchItem';

const Search = styled.div`
  display: flex;
  flex-direction: column;
  width: 900px;
`;

const SearchItemListBlock = styled.ul`
  display: flex;
  flex-direction: row;
  width: 900px;
  align-items: center;
  padding-left: 0;
  margin-top: 0;
  flex-wrap: wrap;
`;

const SearchResult = styled.div`
  width: 400px;
  margin-top: 30px;
  margin-left: 45px;
  font-size: 14px;

  .resultCount {
    color: red;
  }
`;

const SearchItemList = () => {
  return (
    <Search>
      <SearchResult>
        <div>
          검색결과 <span className="resultCount">10</span>
        </div>
      </SearchResult>
      <SearchItemListBlock>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
        <SearchItem></SearchItem>
      </SearchItemListBlock>
    </Search>
  );
};

export default SearchItemList;
