import React from 'react';
import styled from 'styled-components';

const TitleMyBlock = styled.div`
  /* margin: 0 20%; */

  .tit_mypage .txt_tit {
    display: inline-block;
    padding: 20px 0;
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
  }
`;

const TitleMy = ({ title }) => {
  return (
    <TitleMyBlock>
      <h4 className="tit_mypage">
        <span className="txt_tit">{title}</span>
      </h4>
    </TitleMyBlock>
  );
};

export default TitleMy;
