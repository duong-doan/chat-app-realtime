import React from "react";
import styled from "styled-components";
import ScreenChat from "./components/ScreenChat/view";
import Sidebar from "./components/Sidebar/view";

export default function Homepage() {
  const HomepageStyled = styled.div`
    height: 100vh;
  `;

  return (
    <HomepageStyled className="row">
      <Sidebar />
      <ScreenChat />
    </HomepageStyled>
  );
}
