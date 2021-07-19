import React from 'react';
import styled from 'styled-components';
import StyleItem from './StyleItem';

// StyleBox 안에 StyleItem 여러개 포함됨

const StyleItemWrapper = styled.div`
  width: 900px;
  height: 330px;
  border-bottom: 1px solid #ebebeb;
  margin-top: 40px;
  .styleTitle {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    margin-bottom: 20px;

    span {
      color: #7e7e7e;
    }
  }

  .styleItems {
    display: flex;
    justify-content: space-between;
  }
`;

const StyleBox = () => {
  return (
    <StyleItemWrapper>
      <div className="styleTitle">
        #인기 이모티콘 시리즈 <span>{'>'}</span>
      </div>
      <div className="styleItems">
        <StyleItem title={'#작은숫자시리즈'} />
        <StyleItem title={'#큰숫자시리즈'} />
        <StyleItem title={'#짝수시리즈'} />
        <StyleItem title={'#홀수시리즈'} />
      </div>
    </StyleItemWrapper>
  );
};

export default StyleBox;
