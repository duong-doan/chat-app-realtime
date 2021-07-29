import React from "react";
import ChatRoom from "../../../../components/ChatRoom";
import NavSidebar from "../../../../components/NavSidebar";
import useDetail from "../../services/useDetail";

export default function Sidebar() {
  const { userProfile } = useDetail();
  console.log(userProfile);

  return (
    <div className="col-3">
      <NavSidebar name={userProfile.name} />
      <ChatRoom />
    </div>
  );
}
