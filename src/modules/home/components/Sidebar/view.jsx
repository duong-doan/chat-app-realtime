import React from "react";
import ChatRoom from "../../../../components/ChatRoom";
import NavSidebar from "../../../../components/NavSidebar";

export default function Sidebar() {
  return (
    <div className="col-3">
      <NavSidebar />
      <ChatRoom />
    </div>
  );
}
