import React from 'react';
import {
  Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button
} from '@mui/material';

const LoginPromptDialog = ({ open, onClose, onLoginRedirect }) => (
  <Dialog
    open={open}
    onClose={onClose}
    aria-labelledby="alert-dialog-title"
    aria-describedby="alert-dialog-description"
  >
    <DialogTitle id="alert-dialog-title">{"Please Login First"}</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        To view the mobile number, please login first.
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        Cancel
      </Button>
      <Button onClick={onLoginRedirect} color="primary" autoFocus>
        Login
      </Button>
    </DialogActions>
  </Dialog>
);

export default LoginPromptDialog;
