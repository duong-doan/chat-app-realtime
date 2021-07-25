import React from "react";
import styled from "styled-components";
import InputMessage from "../../../../components/InputMessage";
import ListMessages from "../../../../components/ListMessages";
import NavScreenChat from "../../../../components/NavScreenChat";

const ScreenChatStyled = styled.div`
  display: flex;
  flex-direction: column;
`;

export default function ScreenChat() {
  return (
    <ScreenChatStyled className="col-9">
      <NavScreenChat />
      <ListMessages />
      <InputMessage />
    </ScreenChatStyled>
  );
}
