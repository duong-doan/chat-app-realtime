import { Avatar, ListItem, makeStyles } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CloseIcon from '@material-ui/icons/Close';

export default function ChatRoomItem({
  name,
  isClickRoom,
  onClickRoom,
  onClickDeleteRoom,
}) {
  const useStyles = makeStyles({
    customRoomName: {
      display: '-webkit-box',
      boxOrient: 'vertical',
      lineClamp: 1,
      wordBreak: 'break-all',
      overflow: 'hidden',
      fontSize: '1.6rem',
    },
    customRoomWrap: {
      color: 'white',
      borderRadius: '20px 0 0 20px',
    },
    customListItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px !important',
    },
    customBoxContent: {
      display: 'flex',
      alignItems: 'center',
    },
  });
  const classes = useStyles();
  const handleClickRoom = () => {
    onClickRoom();
  };
  const handleClickDeleteRoom = () => {
    onClickDeleteRoom();
  };
  return (
    <div
      className={
        isClickRoom ? `${classes.customRoomWrap} char-room__item-wrap` : ''
      }
      onClick={handleClickRoom}
    >
      <ListItem className={classes.customListItem}>
        <Box className={classes.customBoxContent}>
          <Box mr={2}>
            <Avatar
              alt={name.charAt(0).toUpperCase()}
              src='/static/images/avatar/1.jpg'
            />
          </Box>
          <Box className={classes.customRoomName}>{name}</Box>
        </Box>
        <Box onClick={handleClickDeleteRoom}>
          <CloseIcon fontSize='small' />
        </Box>
      </ListItem>
    </div>
  );
}

ChatRoomItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  isClickRoom: PropTypes.bool,
  onClickRoom: PropTypes.func,
  onClickDeleteRoom: PropTypes.func,
};

ChatRoomItem.defaultProps = {};
