import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

const ReceiveInviteDialog = ({ open, onClose, onConfirm, invitation }) => (
  <Dialog open={open} onClose={onClose}>
    <DialogTitle id="alert-dialog-title">You have an invitation</DialogTitle>
    <DialogContent>
      <DialogContentText id="alert-dialog-description">
        {invitation.user && invitation.user.name} invited you to{" "}
        {invitation.room && invitation.room.name}. Do you want to accept it?
      </DialogContentText>
    </DialogContent>
    <DialogActions>
      <Button onClick={onClose} color="primary">
        No
      </Button>
      <Button
        onClick={() => {
          onClose();
          onConfirm();
        }}
        color="primary"
        autoFocus
      >
        Yes, take me there
      </Button>
    </DialogActions>
  </Dialog>
);

ReceiveInviteDialog.propTypes = {
  invitation: PropTypes.object,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  onConfirm: PropTypes.func
};

ReceiveInviteDialog.defaultProps = {
  invitation: {},
  open: false,
  onClose: undefined,
  onConfirm: undefined
};

export default ReceiveInviteDialog;