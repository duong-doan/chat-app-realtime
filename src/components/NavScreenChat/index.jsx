import { Box, makeStyles } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import styled from 'styled-components';
import { makeGetUserLists } from '../../modules/home/store/selector';
import Dialog from '../Dialog/index';

const NavScreenChatStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  height: 10%;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.1);
`;

const useStyles = makeStyles({
  customListUsers: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  customWrapListUsers: {
    display: 'flex',
    alignItems: 'center',
  },
  customImg: {
    width: '40px',
    height: '40px',
    marginRight: '-10px',
    border: '1px solid white',
    borderRadius: '50%',
    backgroundColor: 'white',
  },
  customImgMain: {
    width: '80px',
    height: '80px',
    marginRight: '20px',
  },
  customImgLast: {
    width: '40px',
    height: '40px',
    marginRight: '-10px',
    border: '1px solid white',
    borderRadius: '50%',
    backgroundColor: 'white',
    color: '#888',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '1rem',
  },
  customIcon: {
    fontSize: '3rem',
    marginRight: '20px',
    cursor: 'pointer',
    '&:hover': {
      color: 'purple',
      transition: '0.2s all',
    },
  },
  customRoomName: {
    fontSize: '1.8rem',
    fontWeight: 'bold',
  },
  customDes: {
    marginTop: '1.4rem',
    fontSize: '1.4rem',
    color: '#555',
  },
});

export default function NavScreenChat({ roomSelect }) {
  const [openDialog, setOpenDialog] = useState(false);
  const classes = useStyles();
  const userLists = makeGetUserLists();
  const optionsSelect =
    userLists &&
    userLists.map((user) => {
      return {
        title: user.name,
        uid: user.uid,
        photoURL: user.photoURL,
      };
    });
  const handleGetUser = () => {};
  const handleClickAddUser = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
  const usersInRoom = userLists.filter((user) => {
    const uidUserInRoom = roomSelect.members.filter(
      (member) => member === user.uid
    );
    if (uidUserInRoom) {
      return user;
    }
  });

  return (
    <NavScreenChatStyled>
      <div className='d-flex align-items-center'>
        <img
          className={classes.customImgMain}
          src='https://image.flaticon.com/icons/png/512/147/147140.png'
          alt=''
        />
        <div>
          <h5 className={classes.customRoomName}>{roomSelect?.name}</h5>
          <p className={classes.customDes}>{roomSelect?.description}</p>
        </div>
      </div>

      <div className={classes.customWrapListUsers}>
        <Box onClick={handleClickAddUser}>
          <PersonAddIcon className={classes.customIcon} />
        </Box>
        <Box className={classes.customListUsers}>
          {usersInRoom.map((user) => (
            <img
              key={user.uid}
              className={classes.customImg}
              src={user.photoUrl}
              alt={user.name}
            />
          ))}
          {usersInRoom.length > 2 ? (
            <div className={classes.customImgLast}>{`+${
              usersInRoom.length - 2
            }`}</div>
          ) : (
            ''
          )}
        </Box>
      </div>
      <Dialog
        optionsSelect={optionsSelect}
        title='ADD USER'
        closeDialog={handleCloseDialog}
        data={handleGetUser}
        openDialog={openDialog}
      />
    </NavScreenChatStyled>
  );
}

NavScreenChat.propTypes = {
  roomSelect: PropTypes.object,
};

NavScreenChat.defaultProps = {};
