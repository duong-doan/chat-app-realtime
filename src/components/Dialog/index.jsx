import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import { useState } from 'react';
import { Fragment } from 'react';
import CustomizedHook from '../Autocomplete';

const useStyles = makeStyles({
  customDialogTitle: {
    fontWeight: 'bold',
    backgroundColor: 'purple',
    color: 'white',
  },
  customBtnAdd: {
    color: 'purple',
  },
});

export default function CustomDialog({
  openDialog,
  closeDialog,
  data,
  title,
  isAddRoom,
  optionsSelect,
}) {
  const [value, setValue] = useState({
    username: '',
    name: '',
    description: '',
  });

  const classes = useStyles();
  const handleCloseDialog = () => {
    closeDialog();
  };

  const handleSubmit = (e) => {
    console.log(value);
    e.preventDefault();
    data(value);
    setValue({
      username: '',
      name: '',
      description: '',
    });
    closeDialog();
  };

  return (
    <Dialog open={openDialog} aria-labelledby='form-dialog-title'>
      <form onSubmit={handleSubmit}>
        <DialogTitle
          className={classes.customDialogTitle}
          id='form-dialog-title'
        >
          {title}
        </DialogTitle>
        <DialogContent>
          {!isAddRoom && <CustomizedHook optionsSelect={optionsSelect} />}
          {isAddRoom && (
            <Fragment>
              <TextField
                autoFocus
                margin='dense'
                id='name'
                label='Room name'
                type='text'
                value={value.name}
                onChange={(e) => {
                  setValue({ ...value, name: e.target.value });
                }}
                fullWidth
              />
              <TextField
                margin='dense'
                id='description'
                label='Description'
                type='text'
                value={value.description}
                onChange={(e) =>
                  setValue({ ...value, description: e.target.value })
                }
                fullWidth
              />
            </Fragment>
          )}
        </DialogContent>
        <DialogActions>
          <Button
            className={classes.customBtnAdd}
            type='submit'
            color='primary'
          >
            Add
          </Button>
          <Button onClick={handleCloseDialog} color='secondary'>
            Cancel
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

CustomDialog.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  closeDialog: PropTypes.func.isRequired,
  data: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  isAddRoom: PropTypes.bool.isRequired,
  pressEnter: PropTypes.func,
  optionsSelect: PropTypes.array,
};

CustomDialog.defaultProps = {};
