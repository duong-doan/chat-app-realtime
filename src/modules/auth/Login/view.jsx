import styled from "styled-components";
import React from "react";
import Button from "../../../components/Button";
import { Typography } from "@material-ui/core";
import {auth, fbProvider} from "../../../firebase/configFirebase";
import { useHistory } from "react-router-dom";
import * as authActions from './store/actions'
import { useDispatch } from "react-redux";

const LoginStyled = styled.div`
  display: flex;
  justify-contents: center;
  align-items: center;
  flex-direction: column;
`;

export default function Login() {
  const dispatch = useDispatch()
  const history = useHistory()

  const handleClickFb = () => {
    auth.signInWithPopup(fbProvider).then((user) => {
      if(user) {
        const {additionalUserInfo : {profile: {email, name, id, picture}}} = user
        const getUserFb = {
          email,
          name,
          id,
          photoUrl: picture?.data?.url
        }
        dispatch(authActions.getUserProfileSuccess(getUserFb))
        history.push('/chat')
      }
    })
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
}
