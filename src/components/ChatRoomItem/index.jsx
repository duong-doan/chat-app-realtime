import { Avatar, ListItem, makeStyles } from "@material-ui/core";
import React from "react";
import PropTypes from "prop-types";
import Box from "@material-ui/core/Box";

export default function ChatRoomItem({ name }) {
  const useStyles = makeStyles({
    customBox: {
      display: "-webkit-box",
      boxOrient: "vertical",
      lineClamp: 1,
      wordBreak: "break-all",
      overflow: "hidden",
      fontSize: "16px",
    },
  });
  const classes = useStyles();
  return (
    <div>
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
};

ChatRoomItem.defaultProps = {};
