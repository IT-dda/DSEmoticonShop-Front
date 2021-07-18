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
    button {
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
    }

    button + button {
      margin-left: 10px;
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
        color: ${palette.categoryHover[props.hoverId]};
      `;
    }};
  }
`;

const StyledLink = styled(Link)`
  ${linkStyle}
  text-decoration:none;
`;

const StyleGroupMenu = ({ id }) => {
  return (
    <StyleMenuWrapper id={id}>
      <StyleMenuBlock id={id}>
        <div className="categoryBox">
          <StyledLink to="/style/categories/1" id={id} hoverId={1}>
            <span className={id === '1' ? 'select' : ''}>
              인기 이모티콘 시리즈
            </span>
          </StyledLink>
          <StyledLink to="/style/categories/2" id={id} hoverId={2}>
            <span className={id === '2' ? 'select' : ''}>재밌는</span>
          </StyledLink>
          <StyledLink to="/style/categories/3" id={id} hoverId={3}>
            <span className={id === '3' ? 'select' : ''}>귀여운</span>
          </StyledLink>
          <StyledLink to="/style/categories/4" id={id} hoverId={4}>
            <span className={id === '4' ? 'select' : ''}>동물</span>
          </StyledLink>
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
