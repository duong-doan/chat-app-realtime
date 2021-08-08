import React from "react";
import { useMemo } from "react";
import { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import useDetail from "../../modules/home/services/useDetail";
import useFirebase from "../../services/useFirebase";
import Message from "../Message";

const ListMessagesStyled = styled.div`
  max-height: 700px;
  overflow-y: scroll;
  padding-left: 20px;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.2);
    border-radius: 5px;
  }
`;

export default function ListMessages() {
  const { roomId } = useDetail();
  const [room, setRoom] = useState([]);
  const conditionMessage = useMemo(
    () => ({
      fieldCompare: "roomId",
      operator: "==",
      valueCompare: roomId,
    }),
    [roomId]
  );
  const messages = useFirebase("messages", conditionMessage);
  const filterRoom = messages.filter((room) => room.roomId === roomId);
  useEffect(() => {
    setRoom(filterRoom);
  }, [roomId, messages]);
  return (
    <ListMessagesStyled>
      {room &&
        room.map((mess, index) => (
          <Message
            key={index}
            photoURL={mess.photoURL}
            name={mess.name}
            text={mess.text}
          />
        ))}
    </ListMessagesStyled>
  );
}
