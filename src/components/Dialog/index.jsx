import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
// import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core";
import { useState } from "react";

export default function CustomDialog({ openDialog, closeDialog, roomName }) {
  const [value, setValue] = useState("");

  const useStyles = makeStyles({
    customDialogTitle: {
      fontWeight: "bold",
      backgroundColor: "purple",
      color: "white",
    },
    customBtnAdd: {
      color: "purple",
    },
  });
  const classes = useStyles();
  const handleCloseDialog = () => {
    closeDialog();
  };
  const handleOnChangeInput = (e) => {
    setValue(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    roomName(value);
    setValue("");
  };

  return (
    <div>
      <Dialog open={openDialog} aria-labelledby="form-dialog-title">
        <DialogTitle
          className={classes.customDialogTitle}
          id="form-dialog-title"
        >
          ADD ROOM
        </DialogTitle>
        <DialogContent>
          {/* <DialogContentText>Name of room</DialogContentText> */}
          <form action="" onSubmit={handleSubmit}>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Room name"
              placeholder=""
              type="text"
              value={value}
              onChange={handleOnChangeInput}
              fullWidth
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.customBtnAdd}
            onClick={handleCloseDialog}
            color="primary"
          >
            Add
          </Button>
          <Button onClick={handleCloseDialog} color="secondary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

CustomDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  roomName: PropTypes.string,
};

CustomDialog.defaultProps = {};
