import React from "react";
import { ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import { useState } from "react";

export default function NavSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <ListItem button>
      <ListItemIcon>
        <InboxIcon />
      </ListItemIcon>
      <ListItemText primary="Inbox" onClick={() => setOpen((prev) => !prev)} />
      {open ? <ExpandLess /> : <ExpandMore />}
    </ListItem>
  );
}
