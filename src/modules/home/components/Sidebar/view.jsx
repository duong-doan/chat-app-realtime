import React from 'react';
import styled from 'styled-components';
import ChatRoom from '../../../../components/ChatRoom';
import NavSidebar from '../../../../components/NavSidebar';
import useDetail from '../../services/useDetail';
const SidebarStyled = styled.div`
  box-shadow: 0 0;
  padding-right: 0 !important;
`;

export default function Sidebar() {
  const { userProfile } = useDetail();
  return (
    <SidebarStyled className='col-2 sidebar'>
      <div className='sidebar__wrap'>
        <NavSidebar photoUrl={userProfile.photoUrl} name={userProfile.name} />
        <ChatRoom />
      </div>
    </SidebarStyled>
  );
}
