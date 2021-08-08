import React from 'react';
import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Button from '../../../components/Button';
import {
  sigInWithFacebook,
  sigInWithGoogle,
} from '../../../services/authService';
import LoginBasic from './components/LoginBasic';

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
        onclick={handleClickFb}
      >
        Login with Facebook
      </Button>
      <Button
        variant='outlined'
        color='secondary'
        className='my-2'
        onclick={handleClickGg}
      >
        Login with Google
      </Button>
      <LoginBasic />
    </LoginStyled>
  );
};

export default Login;
