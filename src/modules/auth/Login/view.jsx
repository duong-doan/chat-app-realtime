import React from 'react';
import { Typography, Button } from '@material-ui/core';
import styled from 'styled-components';
import {
  sigInWithFacebook,
  sigInWithGoogle,
} from '../../../services/authService';
import LoginBasic from './components/LoginBasic';
import RegisterBasic from './components/RegisterBasic';

const LoginStyled = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

const Login = () => {
  const handleClickFb = () => {
    sigInWithFacebook();
  };

  const handleClickGg = () => {
    sigInWithGoogle((user) => {
      console.log(user);
    });
  };

  return (
    <LoginStyled>
      <Typography variant='h2' className='my-3'>
        My Chat App
      </Typography>
      <Button
        variant='outlined'
        color='primary'
        className='my-2'
        onClick={handleClickFb}
        size='large'
      >
        Login with Facebook
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        className='my-2'
        onClick={handleClickGg}
        size='large'
      >
        Login with Google
      </Button>
      <LoginBasic />
      <RegisterBasic />
    </LoginStyled>
  );
};

export default Login;
