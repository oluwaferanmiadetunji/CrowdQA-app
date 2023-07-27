import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Typography from '@mui/material/Typography';
import styles from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const history = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
    const params = queryString.parse(location.search);
    history({
      search: queryString.stringify({ ...params, join: 'participant' }),
    });
  };

  const handleClose = () => {
    setOpen(false);
    const params = queryString.parse(location.search);
    delete params.join;
    history({
      search: queryString.stringify(params),
    });
  };

  return (
    <>
      <Typography variant="caption" onClick={handleClickOpen} role="presentation" sx={styles.text}>
        Joining as a participant?
      </Typography>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="xs">
        <DialogTitle>Joining as a participant?</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="code"
            name="code"
            label="Event Code"
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleClose} variant="contained">
            Join
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
