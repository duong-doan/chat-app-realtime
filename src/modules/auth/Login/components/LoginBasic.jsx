import React, { useRef } from 'react';
import CustomInput from '../../../../components/BaseInput';
import Button from '../../../../components/Button';

const LoginBasic = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const handleChangeInput = (name, value) => {
    if (name === 'email') {
      emailRef.current = value;
    }
    if (name === 'password') {
      passwordRef.current = value;
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(emailRef.current);
    console.log(passwordRef.current);
  };

  return (
    <form onSubmit={handleSubmit}>
      <CustomInput
        labelText='Email'
        id='email'
        formControlProps={{
          fullWidth: true,
        }}
        handleChange={(e) => handleChangeInput(e.target.id, e.target.value)}
        type='text'
        value={emailRef.current}
      />

      <CustomInput
        labelText='Password'
        id='password'
        formControlProps={{
          fullWidth: true,
        }}
        handleChange={(e) => handleChangeInput(e.target.id, e.target.value)}
        type='password'
        value={passwordRef.current}
      />
      <Button variant='contained' type='submit'>
        LOGIN
      </Button>
    </form>
  );
};

export default LoginBasic;
