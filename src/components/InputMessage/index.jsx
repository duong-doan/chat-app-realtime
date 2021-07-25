import React, { useState } from "react";
import styled from "styled-components";
import { Button, TextField } from "@material-ui/core";

const InputMessageStyled = styled.div`
  height: 100px;
  display: flex;
  align-items: center;

  .wrap-input {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 0 16px;

    input {
      width: 100%;
      height: 100%;
    }

    button {
      width: 20%;
      margin-left: 10px;
      margin-bottom: 6px;
      padding: 17px 0;
    }
  }
`;

export default function InputMessage(props) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <InputMessageStyled>
      <div className="wrap-input">
        <TextField
          id="outlined-multiline-flexible"
          fullWidth
          value={value}
          onChange={handleChange}
          variant="outlined"
          placeholder="Enter message..."
        />
        <Button variant="contained" color="primary">
          Send
        </Button>
      </div>
    </InputMessageStyled>
  );
}
