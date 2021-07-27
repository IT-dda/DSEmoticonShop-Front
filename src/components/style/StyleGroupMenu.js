import React from 'react';
import styled, { css } from 'styled-components';
import palette from '../../lib/styles/palette';
import { Link } from 'react-router-dom';

const StyleMenuWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => {
    return css`
      background-color: ${palette.category[props.id]};
    `;
  }};
`;

const StyleMenuBlock = styled.div`
  width: 900px;
  height: 120px;
  .categoryBox {
    margin-bottom: 20px;
  }

  .groupBox {
    .select {
      color: white;
      ${(props) => {
        return css`
          background-color: ${palette.categoryHover[props.id]};
        `;
      }};
    }
  }
`;

const linkStyle = css`
  font-size: 25px;
  color: #7e7e7e;
  margin-bottom: 20px;

  .select {
    font-weight: bold;
    ${(props) => {
      return css`
        color: ${palette.categoryHover[props.id]};
      `;
    }};
  }

  & + & {
    padding-left: 12px;
  }

  &:hover {
    font-weight: bold;
    ${(props) => {
      return css`
        color: ${palette.categoryHover[props.hoverid]};
      `;
    }};
  }
`;

const StyledLink = styled(Link)`
  ${linkStyle}
  text-decoration:none;
`;

const StyledButton = styled(Link)`
  border: 0.5px solid #ebebeb;
  background: white;
  color: black;
  padding: 7px 17px;
  border-radius: 15px;
  font-size: 13px;
  cursor: pointer;

  &:hover {
    color: white;
    ${(props) => {
      return css`
        background-color: ${palette.categoryHover[props.id]};
      `;
    }};
  }

  & + & {
    margin-left: 10px;
  }
`;

const StyleGroupMenu = ({ id, group }) => {
  return (
    <StyleMenuWrapper id={id}>
      <StyleMenuBlock id={id}>
        <div className="categoryBox">
          <StyledLink to="/style/categories?id=1&group=0" id={id} hoverid={1}>
            <span className={id === 1 ? 'select' : ''}>
              인기 이모티콘 시리즈
            </span>
          </StyledLink>
          <StyledLink to="/style/categories?id=2&group=0" id={id} hoverid={2}>
            <span className={id === 2 ? 'select' : ''}>재밌는</span>
          </StyledLink>
          <StyledLink to="/style/categories?id=3&group=0" id={id} hoverid={3}>
            <span className={id === 3 ? 'select' : ''}>귀여운</span>
          </StyledLink>
          <StyledLink to="/style/categories?id=4&group=0" id={id} hoverid={4}>
            <span className={id === 4 ? 'select' : ''}>동물</span>
          </StyledLink>
        </div>
        <div className="groupBox">
          <StyledButton
            className={group === 0 ? 'select' : ''}
            id={id}
            to={`/style/categories?id=${id}&group=0`}
          >
            전체
          </StyledButton>
          <StyledButton
            className={group === 1 ? 'select' : ''}
            id={id}
            to={`/style/categories?id=${id}&group=1`}
          >
            #첫번째_그룹
          </StyledButton>
          <StyledButton
            className={group === 2 ? 'select' : ''}
            id={id}
            to={`/style/categories?id=${id}&group=2`}
          >
            #두번째_그룹
          </StyledButton>
          <StyledButton
            className={group === 3 ? 'select' : ''}
            id={id}
            to={`/style/categories?id=${id}&group=3`}
          >
            #세번째_그룹
          </StyledButton>
          <StyledButton
            className={group === 4 ? 'select' : ''}
            id={id}
            to={`/style/categories?id=${id}&group=4`}
          >
            #네번째_그룹
          </StyledButton>
        </div>
      </StyleMenuBlock>
    </StyleMenuWrapper>
  );
};

export default StyleGroupMenu;
