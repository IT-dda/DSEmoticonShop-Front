import React, { useState } from 'react';
import styled from 'styled-components';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';

const FaQItemBlock = styled.div`
  background: #fff;
  border-radius: 6px;
  display: block;
  margin-bottom: 10px;
  align-self: flex-start;
  padding: 20px 25px;
  align-items: center;

  &:hover {
    .tit {
      font-weight: bold;
      text-decoration: underline;
    }
  }
  .ico_faq {
    float: right;
  }
`;

const FaQAnsBlock = styled.div`
  div {
    color: #7f7f7f;
    font-size: 12px;
  }
`;

const FaQItem = ({ faq_tit }) => {
  const [showAns, setShowAns] = useState(false);

  const onClockDown = () => {
    setShowAns(!showAns);
  };

  return (
    <FaQItemBlock onClick={onClockDown}>
      <span className="tit">{faq_tit}</span>
      {showAns ? (
        <BsChevronUp className="ico_faq" />
      ) : (
        <BsChevronDown className="ico_faq" />
      )}
      <FaQAnsBlock>{showAns && <div>자주묻는 질문 답변1</div>}</FaQAnsBlock>
    </FaQItemBlock>
  );
};

export default FaQItem;
