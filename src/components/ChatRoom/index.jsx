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
import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ChatRoomStyled = styled.div`
  a {
    text-decoration: none;
    color: #333;
  }
`;

export default function ChatRoom() {
  const [rooms, setRooms] = useState([]);
  const { addDocument, roomListFirebase } = useFirebase();
  const {
    userProfile: { uid },
  } = useDetail();
  const [openDialog, setOpenDialog] = useState(false);
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
  const classes = useStyles();
  useEffect(() => {
    roomListFirebase("roomLists").onSnapshot((snapshot) => {
      const documents = snapshot.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });
      setRooms(documents);
    });
  }, []);

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
      >
        {rooms.map((room, index) => (
          <Link to={`/chat/${room.id}`} key={index}>
            <ChatRoomItem name={room.name} />
          </Link>
        ))}
      </List>
      <Dialog
        openDialog={openDialog}
        closeDialog={handleCloseDialog}
        roomName={handleGetRoomName}
      />
    </ChatRoomStyled>
  );
}
