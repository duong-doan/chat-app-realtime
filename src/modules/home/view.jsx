import React from 'react';
import styled from 'styled-components';
import ScreenChat from './components/ScreenChat/view';
import Sidebar from './components/Sidebar/view';
import { Route } from 'react-router-dom';
import SidebarMenu from './components/SidebarMenu/view';

const HomepageStyled = styled.div`
  height: 100vh;
`;

export default function Homepage() {
  return (
    <HomepageStyled className='row homepage'>
      <SidebarMenu />
      <Sidebar />
      <Route path='/chat/:id' component={ScreenChat} />
    </HomepageStyled>
  );
}
