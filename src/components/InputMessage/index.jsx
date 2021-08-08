import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import styled from 'styled-components';
// import { addDocument } from '../../modules/auth/Login/services/useAuth';
// import useDetail from '../../modules/home/services/useDetail';

const InputMessageStyled = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  align-items: center;
  box-shadow: 0 -2px 10px 0 rgba(0, 0, 0, 0.1);

  .wrap-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 16px;

    button {
      width: 20%;
      margin-left: 10px;
      padding: 17px 0;
    }

    input {
      background-color: white;
      border-radius: 5px;
      padding: 20px 14px;
    }

    fieldset {
      top: 0;
    }

    button {
      background-color: purple;
    }
  }
`;

export default function InputMessage() {
  // const { userProfile, roomId } = useDetail();
  const [value, setValue] = useState('');
  // const { name, uid, photoUrl } = userProfile;
  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // addDocument('messages', {
    //   text: value,
    //   name,
    //   uid,
    //   photoURL: photoUrl,
    //   roomId: roomId,
    // });
    setValue('');
  };

  return (
    <InputMessageStyled>
      <form className='wrap-input' onSubmit={handleSubmit}>
        <TextField
          fullWidth
          value={value}
          onChange={handleChange}
          variant='outlined'
          placeholder='Enter message...'
        />
        <Button variant='contained' color='primary'>
          Send
        </Button>
      </form>
    </InputMessageStyled>
  );
}
