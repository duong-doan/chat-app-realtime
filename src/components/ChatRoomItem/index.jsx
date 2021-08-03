import { Avatar, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

export default function ChatRoomItem({ name, isClickRoom, onClickRoom }) {
  const useStyles = makeStyles({
    customBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 1,
      wordBreak: "break-all",
      overflow: "hidden",
      fontSize: "16px",
    },
    customWrap: {
      backgroundColor: "purple",
      color: "white",
    },
  });
  const classes = useStyles();
  const handleClickRoom = () => {
    onClickRoom();
  };
  return (
    <div
      className={isClickRoom ? classes.customWrap : ""}
      onClick={handleClickRoom}
    >
      <ListItem>
        <Box mr={2}>
          <Avatar
            alt={name.charAt(0).toUpperCase()}
            src="/static/images/avatar/1.jpg"
          />
        </Box>
        <Box className={classes.customBox}>{name}</Box>
      </ListItem>
    </div>
  );
}

ChatRoomItem.propTypes = {
  name: PropTypes.string,
  isClickRoom: PropTypes.bool,
  onClickRoom: PropTypes.func,
};

ChatRoomItem.defaultProps = {};
