import styled from "styled-components";
import React, { useEffect } from "react";
import Button from "../../../components/Button";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import * as authActions from "./store/actions";
import { useDispatch } from "react-redux";
import useAuth from "./services/useAuth";

const LoginStyled = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { isRequesting, isAuthen } = useAuth();

  useEffect(() => {
    if (isAuthen && !isRequesting) history.push("/chat");
  }, [isRequesting, isAuthen]);

  const handleClickFb = () => {
    dispatch(authActions.getUserProfileRequest());
  };

  const handleClickGg = () => {
    alert("Gg");
  };

  return (
    <LoginStyled>
      <Typography variant="h2" className="my-3">
        My Chat App
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        className="my-2"
        onclick={handleClickFb}
      >
        Login with Facebook
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        className="my-2"
        onclick={handleClickGg}
      >
        Login with Google
      </Button>
    </LoginStyled>
  );
};

export default Login;
