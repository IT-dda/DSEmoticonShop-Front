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

  .tit_num {
    display: inline-block;
    margin-left: 4px;
    font-size: 18px;
    line-height: 27px;
    font-weight: bold;
    color: #fa4637;
  }
`;

const TitleMy = ({ title, count }) => {
  return (
    <TitleMyBlock>
      <h4 className="tit_mypage">
        <span className="txt_tit">{title}</span>
        <span className="tit_num">{count}</span>
      </h4>
    </TitleMyBlock>
  );
};

export default TitleMy;
