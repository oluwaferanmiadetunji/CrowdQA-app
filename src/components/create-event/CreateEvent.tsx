import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import styles from './styles';
import { useLocation, useNavigate } from 'react-router-dom';
import queryString from 'query-string';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs, { Dayjs } from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const CreateEvent = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const history = useNavigate();

  const params = queryString.parse(location.search);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  React.useEffect(() => {
    if (open) {
      history({
        search: queryString.stringify({ ...params, event: 'new' }),
      });
    } else {
      delete params.event;
      history({
        search: queryString.stringify(params),
      });
    }
  }, [history, open, params]);

  const [startDate, setStartDate] = React.useState<Dayjs | null>(dayjs(new Date()));
  const [endDate, setEndDate] = React.useState<Dayjs | null>(dayjs(new Date().setDate(new Date().getDate() + 3)));

  return (
    <>
      <span onClick={handleClickOpen} role="presentation">
        {children}
      </span>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <DialogTitle>When is this event?</DialogTitle>

        <DialogContent sx={{ marginTop: '20px' }}>
          <Box sx={styles.dates}>
            <DemoItem label="Start Date">
              <DatePicker
                disablePast
                autoFocus
                format="MMM D, YYYY"
                value={startDate}
                onChange={(value) => setStartDate(value)}
              />
            </DemoItem>

            <DemoItem label="End Date">
              <DatePicker
                disablePast
                autoFocus
                format="MMM D, YYYY"
                value={endDate}
                onChange={(value) => setEndDate(value)}
              />
            </DemoItem>
          </Box>

          <DemoItem label="Event Name">
            <TextField margin="dense" id="name" size="small" name="name" type="text" fullWidth variant="outlined" />
          </DemoItem>
        </DialogContent>

        <DialogActions sx={styles.actions}>
          <Alert severity="info" sx={styles.info}>
            Anyone with the code or link can participate!
          </Alert>

          <Stack direction="row" spacing={2}>
            <Button onClick={handleClose} color="error">
              Cancel
            </Button>
            <Button onClick={handleClose} variant="contained">
              Create Event
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default CreateEvent;
