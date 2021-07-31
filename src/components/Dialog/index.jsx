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

export default function CustomDialog({ openDialog, closeDialog }) {
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
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Room name"
            placeholder=""
            type="text"
            fullWidth
          />
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
};

CustomDialog.defaultProps = {};
