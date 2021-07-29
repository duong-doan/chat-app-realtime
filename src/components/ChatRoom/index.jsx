import { List, ListSubheader } from "@material-ui/core";
import React from "react";
import ChatRoomItem from "../ChatRoomItem";

export default function ChatRoom() {
  return (
    <div>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" style={{ color: "red" }}>
            Room chat
          </ListSubheader>
        }
      >
        <ChatRoomItem name="hoi ban daoasdkjhasdkjhaksjdhakjshdkjashdjkahskdjhaksjdh" />
        <ChatRoomItem name="hoi phu nu viet nam" />
        <ChatRoomItem name="hoi nhau" />
      </List>
    </div>
  );
}
