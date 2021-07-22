import React from 'react';
import styled from 'styled-components';
import StyleItem from './StyleItem';
import { Link } from 'react-router-dom';

// StyleBox 안에 StyleItem 여러개 포함됨

const StyleItemWrapper = styled.div`
  width: 900px;
  height: 330px;
  border-bottom: 1px solid #ebebeb;
  margin-top: 40px;

  .styleItems {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }
`;

const TitleLink = styled(Link)`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;

  span {
    color: #7e7e7e;
  }
`;

const StyleBox = ({ name, id }) => {
  return (
    <StyleItemWrapper>
      <TitleLink to={`/style/categories/${id}`}>
        #{name} <span>{'>'}</span>
      </TitleLink>
      <div className="styleItems">
        <StyleItem title={'#작은숫자시리즈'} id={id} />
        <StyleItem title={'#큰숫자시리즈'} id={id} />
        <StyleItem title={'#짝수시리즈'} id={id} />
        <StyleItem title={'#홀수시리즈'} id={id} />
      </div>
    </StyleItemWrapper>
  );
};

export default StyleBox;
