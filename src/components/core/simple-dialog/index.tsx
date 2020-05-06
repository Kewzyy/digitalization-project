import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import { DialogPropsType } from './types'
import { styles } from './styles'
import { css } from 'aphrodite'

export const AlertDialog: React.FC<DialogPropsType> = props => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (name:any) => {
    setOpen(false);
    //Add meal to order
    console.log("Adding meal to order with name: ", name);
  };

  return (
    <div>
      <Button className={css(styles.addToOrderButton)} onClick={handleClickOpen}>
        order {props.price} €
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Add {props.name} to your order?
          {<br />}
          Price: {props.price} €
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Add item to order?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={() => handleClose(props.name)} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}