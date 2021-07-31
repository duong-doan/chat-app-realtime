import {
  Box,
  Button,
  List,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import React, { Fragment } from "react";
import { useState } from "react";
import ChatRoomItem from "../ChatRoomItem";
import Dialog from "../Dialog/index";

const useStyles = makeStyles({
  customSubHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  customBox: {
    fontSize: "1rem",
    color: "purple",
  },
  customBtn: {
    fontSize: "1.2rem",
    color: "purple",
    borderColor: "purple",
  },
});

export default function ChatRoom() {
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const handleClickAddRoom = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  return (
    <Fragment>
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" className={classes.customSubHeader}>
            <Box className={classes.customBox}>Room chat</Box>
            <Button
              variant="outlined"
              className={classes.customBtn}
              onClick={handleClickAddRoom}
            >
              +
            </Button>
          </ListSubheader>
        }
      >
        <ChatRoomItem name="hoi ban daoasdkjhasdkjhaksjdhakjshdkjashdjkahskdjhaksjdh" />
        <ChatRoomItem name="hoi phu nu viet nam" />
        <ChatRoomItem name="hoi nhau" />
      </List>
      <Dialog openDialog={openDialog} closeDialog={handleCloseDialog} />
    </Fragment>
  );
}
