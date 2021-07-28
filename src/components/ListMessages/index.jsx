import React from "react";
import styled from "styled-components";
import Message from "../Message";

const ListMessagesStyled = styled.div`
  max-height: 700px;
  overflow-y: auto;
`;

export default function ListMessages() {
  return (
    <ListMessagesStyled>
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
      <Message />
    </ListMessagesStyled>
  );
}
