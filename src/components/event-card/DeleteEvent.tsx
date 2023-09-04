import * as React from 'react';
import Typography from '@mui/material/Typography';
import styles from './styles';
import MenuItem from '@mui/material/MenuItem';
import { EventType } from 'types/events';
import axios from 'axios';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import LoadingButton from '@mui/lab/LoadingButton';

const DeleteEvent = ({ event }: { event: EventType }) => {
  const queryClient = useQueryClient();

  const [loading, setLoading] = React.useState(false);

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const deleteEvent = async () => {
    setLoading(true);
    await axios.delete(`/events/${event?.id}`);
    queryClient.invalidateQueries(['upcoming-events']);
    queryClient.invalidateQueries(['past-events']);
    setLoading(false);
    toast.success('Event deleted!');
    handleClose();
  };

  return (
    <React.Fragment>
      <MenuItem sx={styles.menuItem} onClick={handleClickOpen}>
        <Typography sx={styles.menuItemText}>Delete</Typography>
      </MenuItem>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete event</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Would you like to permanently delete this event? All the event data will be lost. You can’t undo this
            action.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>

          <LoadingButton loading={loading} onClick={deleteEvent} color="error" variant="contained">
            Delete
          </LoadingButton>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteEvent;
