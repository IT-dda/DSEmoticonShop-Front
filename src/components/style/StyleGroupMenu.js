import React from 'react';
import styled from 'styled-components';

const StyleMenuWrapper = styled.div`
  width: 100%;
  height: 200px;
  background-color: #e9ffd9;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyleMenuBlock = styled.div`
  width: 900px;
  height: 120px;
  .categoryBox {
    font-size: 25px;
    color: #7e7e7e;
    margin-bottom: 20px;

    span {
      cursor: pointer;
    }
    span + span {
      padding-left: 12px;
    }

    span:hover {
      font-weight: bold;
      color: #99c065;
    }
  }

  .groupBox {
    button {
      border: 0.5px solid #ebebeb;
      background: white;
      color: black;
      padding: 7px 17px;
      border-radius: 15px;
      font-size: 13px;
      cursor: pointer;

      &:hover {
        background: #99c065;
        color: white;
      }
    }

    button + button {
      margin-left: 10px;
    }
  }
`;

const StyleGroupMenu = () => {
  return (
    <StyleMenuWrapper>
      <StyleMenuBlock>
        <div className="categoryBox">
          <span>인기 이모티콘 시리즈</span>
          <span>재밌는</span>
          <span>귀여운</span>
          <span>동물</span>
        </div>
        <div className="groupBox">
          <button>전체</button>
          <button>#다른_그룹</button>
          <button>#또_다른_그룹</button>
        </div>
      </StyleMenuBlock>
    </StyleMenuWrapper>
  );
};

export default StyleGroupMenu;
