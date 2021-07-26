import React from "react";
import styled from "styled-components";

const MessageStyled = styled.div`
  display: flex;
  padding: 8px 16px;

  img {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  p {
    font-size: 16px;
  }

  h6 {
    margin-top: 5px;
    font-weight: bold;
  }

  span {
    margin-top: 5px;
    margin-left: 25px;
  }
`;

export default function Message() {
  return (
    <MessageStyled>
      <div className="d-flex">
        <img
          src="https://image.flaticon.com/icons/png/512/147/147140.png"
          alt=""
        />
        <div>
          <h5>Hai dot</h5>
          <p>abc</p>
        </div>
      </div>
      <span>14:25</span>
    </MessageStyled>
  );
}
