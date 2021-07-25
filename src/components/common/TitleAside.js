import React from 'react';
import styled from 'styled-components';

const TitleAsideBlock = styled.div`
  font-size: 28px;
  line-height: 41px;
  font-weight: bold;
`;

const TitleAside = (props) => {
  return <TitleAsideBlock>{props.children}</TitleAsideBlock>;
};

export default TitleAside;
