import React from "react";
import styled from "styled-components";
import ChatRoom from "../../../../components/ChatRoom";
import NavSidebar from "../../../../components/NavSidebar";
import useDetail from "../../services/useDetail";

const SidebarStyled = styled.div`
  box-shadow: 1px 0 4px rgba(0, 0, 0, 0.2);
`;

export default function Sidebar() {
  const { userProfile } = useDetail();
  return (
    <SidebarStyled className="col-3">
      <NavSidebar photoUrl={userProfile.photoUrl} name={userProfile.name} />
      <ChatRoom />
    </SidebarStyled>
  );
}
