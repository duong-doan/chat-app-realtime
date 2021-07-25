import React from "react";
import styled from "styled-components";

const ChatRoomItemStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
  margin-bottom: 20px;

  img {
    width: 50px;
    height: 50px;
    margin-right: 10px;
  }

  span {
    margin-bottom: 25px;
  }
`;

export default function ChatRoomItem() {
  return (
    <ChatRoomItemStyled>
      <div className="d-flex">
        <img
          src="https://image.flaticon.com/icons/png/512/147/147140.png"
          alt=""
        />
        <div>
          <h5 className="m-0">Hai dot</h5>
          <p className="m-0">abc</p>
        </div>
      </div>
      <span>14:25</span>
    </ChatRoomItemStyled>
  );
}
