import React from 'react';
import styled from 'styled-components';

const Fullscreen = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.25);
  width: 100%;
  height: 100%;
`;

const SearchModalBlock = styled.div`
  width: 100%;
  height: 130px;
  background: rgba(255, 255, 255, 0.75);
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

const SearchModal = ({ visible }) => {
  if (!visible) return null;
  return (
    <Fullscreen>
      <SearchModalBlock>
        <input type="text" placeholder="이모티콘을 검색해보세요!" />
        <div className="searchImg">search</div>
      </SearchModalBlock>
    </Fullscreen>
  );
};

export default SearchModal;
