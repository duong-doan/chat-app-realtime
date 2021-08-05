import {
  Box,
  Button,
  List,
  ListSubheader,
  makeStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import ChatRoomItem from "../ChatRoomItem";
import Dialog from "../Dialog/index";
import useDetail from "../../modules/home/services/useDetail";
import useFirebase from "../../services/useFirebase";
import { addDocument } from "../../modules/auth/Login/services/useAuth";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMemo } from "react";
const ChatRoomStyled = styled.div`
  a {
    text-decoration: none;
    color: #333;
  }
`;

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
  const [activeId, setActiveId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const {
    userProfile: { uid },
  } = useDetail();
  const classes = useStyles();
  const conditionRooms = useMemo(
    () => ({
      fieldCompare: "members",
      operator: "array-contains",
      valueCompare: uid,
    }),
    [uid]
  );
  const rooms = useFirebase("roomLists", conditionRooms);
  const handleClickRoom = (id) => {
    setActiveId(id);
  };
  const handleClickAddRoom = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleGetRoomName = (roomName) => {
    setOpenDialog(false);
    const roomData = {
      name: roomName,
      members: [uid],
    };
    addDocument("roomLists", roomData);
  };
  return (
    <ChatRoomStyled>
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
      ></List>
      {rooms.map((room, index) => (
        <Link to={`/chat/${room.id}`} key={index}>
          <ChatRoomItem
            name={room.name}
            isClickRoom={activeId === room.id ? true : false}
            onClickRoom={() => handleClickRoom(room.id)}
          />
        </Link>
      ))}
      <Dialog
        openDialog={openDialog}
        closeDialog={handleCloseDialog}
        roomName={handleGetRoomName}
      />
    </ChatRoomStyled>
  );
}
