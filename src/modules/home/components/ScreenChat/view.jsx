import React from "react";
import styled from "styled-components";
import InputMessage from "../../../../components/InputMessage";
import ListMessages from "../../../../components/ListMessages";
import NavScreenChat from "../../../../components/NavScreenChat";
import useDetail from "../../services/useDetail";
import PropTypes from "prop-types";

const ScreenChatStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px 28px 18px 0;
`;
export default function ScreenChat(props) {
  const { roomsProfile } = useDetail();
  const {
    match: { params: id },
  } = props;
  const roomSelect = roomsProfile.find((room) => room.id === id.id);

  return (
    <ScreenChatStyled className="col-8">
      {roomSelect && (
        <div className="screen-chat__wrap">
          <NavScreenChat roomSelect={roomSelect} />
          <div className="wrap-content">
            <ListMessages />
            <InputMessage />
          </div>
        </div>
      )}
    </ScreenChatStyled>
  );
}

ScreenChat.propTypes = {
  roomProfile: PropTypes.object,
  props: PropTypes.object,
  match: PropTypes.object,
};

ScreenChat.defaultProps = {};
