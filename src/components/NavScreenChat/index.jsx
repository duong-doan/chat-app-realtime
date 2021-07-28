import React from "react";
import EditIcon from "@material-ui/icons/Edit";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import styled from "styled-components";

const NavScreenChatStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 100px;

  img {
    width: 80px;
    height: 80px;
    margin-right: 20px;
  }
`;

export default function NavScreenChat() {
  return (
    <NavScreenChatStyled>
      <div className="d-flex align-items-center">
        <img
          src="https://image.flaticon.com/icons/png/512/147/147140.png"
          alt=""
        />
        <div>
          <h5>hai dot</h5>
          <p>abc</p>
        </div>
        <span>o</span>
      </div>

      <div>
        <EditIcon />
        <PersonAddIcon />
      </div>
    </NavScreenChatStyled>
  );
}
