import React from "react";
import styled from "styled-components";

const NavbarStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 16px;
  height: 100px;
  img {
    width: 80px;
    height: 80px;
  }
`;

export default function NavSidebar() {
  return (
    <NavbarStyled>
      <img
        src="https://image.flaticon.com/icons/png/512/147/147140.png"
        alt=""
      />
      <h4>Duong Doan</h4>
    </NavbarStyled>
  );
}
