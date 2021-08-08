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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  getRoomsFirebaseSuccess,
  getActiveRoomId,
} from "../../modules/home/store/actions";
import { db } from "../../firebase/configFirebase";

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
    position: "relative",
    overflowX: "hidden",
  },
  customBox: {
    fontSize: "1.6rem",
    color: "purple",
    width: "80%",
  },
  customBtn: {
    fontSize: "1.2rem",
    color: "purple",
    borderColor: "purple",
    width: "20%",
  },
});

export default function ChatRoom() {
  const [activeRoomId, setActiveRoomId] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const {
    userProfile: { uid },
  } = useDetail();
  const classes = useStyles();
  const dispatch = useDispatch();
  const conditionRooms = useMemo(
    () => ({
      fieldCompare: "members",
      operator: "array-contains",
      valueCompare: uid,
    }),
    [uid]
  );
  const rooms = useFirebase("roomLists", conditionRooms);
  useEffect(() => {
    dispatch(getRoomsFirebaseSuccess(rooms));
    dispatch(getActiveRoomId(activeRoomId));
  }, [rooms, activeRoomId]);
  const handleClickRoom = (id) => {
    setActiveRoomId(id);
  };
  const handleClickAddRoom = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleGetRoomName = (value) => {
    const { name, description } = value;
    setOpenDialog(false);
    const roomData = {
      name,
      description,
      members: [uid],
    };
    addDocument("roomLists", roomData);
  };
  const handleClickDeleteRoom = (id) => {
    db.collection("roomLists").doc(id).delete();
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
            isClickRoom={activeRoomId === room.id ? true : false}
            onClickRoom={() => handleClickRoom(room.id)}
            onClickDeleteRoom={() => handleClickDeleteRoom(room.id)}
          />
        </Link>
      ))}
      <Dialog
        isAddRoom
        title="ADD ROOM"
        openDialog={openDialog}
        closeDialog={handleCloseDialog}
        data={handleGetRoomName}
      />
    </ChatRoomStyled>
  );
}
