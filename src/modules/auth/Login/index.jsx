import styled from "styled-components";
import React from "react";
import Button from "../../../components/Button";
import { Typography } from "@material-ui/core";

const LoginStyled = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

export default function Login() {
  return (
    <LoginStyled>
      <Typography variant="h2" className="my-3">
        My Chat App
      </Typography>
      <Button variant="outlined" color="primary" className="my-2">
        Login with Facebook
      </Button>
      <Button variant="outlined" color="secondary" className="my-2">
        Login with Google
      </Button>
    </LoginStyled>
  );
}
