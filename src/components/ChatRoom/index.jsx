import {
  Box,
  Button,
  List,
  ListSubheader,
  makeStyles,
} from '@material-ui/core';
import React, { useEffect } from 'react';
import { useState } from 'react';
import ChatRoomItem from '../ChatRoomItem';
import Dialog from '../Dialog/index';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getRoomsFirebaseRequest,
  selectActiveRoom,
} from '../../modules/home/store/actions';
import { makeGetRooms } from '../../modules/home/store/selector';

const ChatRoomStyled = styled.div`
  a {
    text-decoration: none;
    color: #333;
  }
`;

const useStyles = makeStyles({
  customSubHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px',
    position: 'relative',
    overflowX: 'hidden',
  },
  customBox: {
    fontSize: '1.6rem',
    color: 'purple',
    width: '80%',
  },
  customBtn: {
    fontSize: '1.2rem',
    color: 'purple',
    borderColor: 'purple',
    width: '20%',
  },
});

export default function ChatRoom() {
  const dispatch = useDispatch();
  const rooms = makeGetRooms();
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();

  useEffect(() => {
    dispatch(getRoomsFirebaseRequest());
  }, []);

  const handleClickAddRoom = () => {
    console.log('click');
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const handleGetRoomName = () => {
    // const { name, description } = value;
    // setOpenDialog(false);
    // const roomData = {
    //   name,
    //   description,
    //   members: [uid],
    // };
  };

  const handleClickRoom = (id) => {
    dispatch(selectActiveRoom(id));
  };

  return (
    <ChatRoomStyled>
      <List
        component='nav'
        aria-labelledby='nested-list-subheader'
        subheader={
          <ListSubheader component='div' className={classes.customSubHeader}>
            <Box className={classes.customBox}>Room chat</Box>
            <Button
              variant='outlined'
              className={classes.customBtn}
              onClick={handleClickAddRoom}
            >
              +
            </Button>
          </ListSubheader>
        }
      ></List>
      {rooms &&
        rooms.map((room, index) => (
          <Link to={`/chat/${room.id}`} key={index}>
            <ChatRoomItem
              name={room.name}
              // isClickRoom={activeRoomId === room.id ? true : false}
              onClickRoom={() => handleClickRoom(room.id)}
              // onClickDeleteRoom={() => handleClickDeleteRoom(room.id)}
            />
          </Link>
        ))}
      <Dialog
        isAddRoom
        title='ADD ROOM'
        openDialog={openDialog}
        closeDialog={handleCloseDialog}
        data={handleGetRoomName}
      />
    </ChatRoomStyled>
  );
}
