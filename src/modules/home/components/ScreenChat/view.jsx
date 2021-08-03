import React from "react";
import styled from "styled-components";
import InputMessage from "../../../../components/InputMessage";
import ListMessages from "../../../../components/ListMessages";
import NavScreenChat from "../../../../components/NavScreenChat";
import PropTypes from "prop-types";

const ScreenChatStyled = styled.div`
  display: flex;
  flex-direction: column;

  .wrap-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`;

export default function ScreenChat() {
  return (
    <ScreenChatStyled className="col-9">
      <NavScreenChat />
      <div className="wrap-content">
        <ListMessages />
        <InputMessage />
      </div>
    </ScreenChatStyled>
  );
}

ScreenChat.propTypes = {
  props: PropTypes.object,
};

ScreenChat.defaultProps = {};
