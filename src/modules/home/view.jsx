import React from "react";
import ScreenChat from "./components/ScreenChat/view";
import Sidebar from "./components/Sidebar/view";

export default function Homepage() {
  return (
    <div className="row">
      <Sidebar />
      <ScreenChat />
    </div>
  );
}
