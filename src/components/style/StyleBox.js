import React from 'react';
import styled from 'styled-components';
import StyleItem from './StyleItem';
import { Link } from 'react-router-dom';
import { AiOutlineRight } from 'react-icons/ai';

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
  display: flex;
  align-items: center;

  .rightIcon {
    color: #7e7e7e;
    width: 18px;
    height: 18px;
    margin-left: 5px;
  }
`;

const StyleBox = ({ name, id }) => {
  return (
    <StyleItemWrapper>
      <TitleLink to={`/style/categories?id=${id}&group=0`}>
        #{name} <AiOutlineRight className="rightIcon"></AiOutlineRight>
      </TitleLink>
      <div className="styleItems">
        <StyleItem title={'#첫번째_그룹'} id={id} group={1} />
        <StyleItem title={'#두번째_그룹'} id={id} group={2} />
        <StyleItem title={'#세번째_그룹'} id={id} group={3} />
        <StyleItem title={'#네번째_그룹'} id={id} group={4} />
      </div>
    </StyleItemWrapper>
  );
};

export default StyleBox;
