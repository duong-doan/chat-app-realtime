import { Typography } from "@material-ui/core";
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import CustomInput from "../../../../components/BaseInput";
import Button from "../../../../components/Button";
import { signUpUserFirebaseRequest } from "../store/actions";

const RegisterBasic = () => {
  const DivOuter = styled.div`
    width: 300px;

    display: flex;
    align-items: center;
    flex-direction: column;
  `;
  const Form = styled.form`
    width: inherit;
    display: flex;
    flex-direction: column;
  `;

  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const handleChangeInput = (name, value) => {
    if (name === "email") {
      emailRef.current = value;
    }
    if (name === "password") {
      passwordRef.current = value;
    }
    if (name === "confirm-password") {
      confirmPasswordRef.current = value;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(emailRef.current);
    console.log(passwordRef.current);
    if (passwordRef.current !== confirmPasswordRef.current) {
      alert("not equal");
      return;
    }
    dispatch(
      signUpUserFirebaseRequest({
        email: emailRef.current,
        password: passwordRef.current,
      })
    );
  };

  return (
    <DivOuter>
      <Typography variant="h2" className="my-3">
        Sign Up
      </Typography>
      <Form onSubmit={handleSubmit}>
        <CustomInput
          labelText="Email"
          id="email"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e) => handleChangeInput(e.target.id, e.target.value)}
          type="text"
          value={emailRef.current}
        />
        <CustomInput
          labelText="Password"
          id="password"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e) => handleChangeInput(e.target.id, e.target.value)}
          type="password"
          value={passwordRef.current}
        />
        <CustomInput
          labelText="Confirm password"
          id="confirm-password"
          formControlProps={{
            fullWidth: true,
          }}
          handleChange={(e) => handleChangeInput(e.target.id, e.target.value)}
          type="password"
          value={passwordRef.current}
        />
        <Button variant="contained" type="submit">
          SIGN UP
        </Button>
      </Form>
    </DivOuter>
  );
};

export default RegisterBasic;
