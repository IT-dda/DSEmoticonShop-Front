import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <AuthForm></AuthForm>
    </Wrapper>
  );
};

export default LoginPage;
