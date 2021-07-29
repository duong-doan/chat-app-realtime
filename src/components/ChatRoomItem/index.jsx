import { Avatar, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

const ChatRoomItemStyled = styled.div``;

const useStyles = makeStyles({
  customBox: {
    display: "-webkit-box",
    boxOrient: "vertical",
    lineClamp: 1,
    wordBreak: "break-all",
    overflow: "hidden",
    fontSize: "1rem",
  },
});

export default function ChatRoomItem({ name }) {
  const classes = useStyles();
  return (
    <ChatRoomItemStyled>
      <ListItem button>
        <Box mr={2}>
          <Avatar alt="avatar" src="/static/images/avatar/1.jpg" />
        </Box>
        <Box className={classes.customBox}>{name}</Box>
      </ListItem>
    </ChatRoomItemStyled>
  );
}

ChatRoomItem.propTypes = {
  name: PropTypes.string,
};

ChatRoomItem.defaultProps = {};
