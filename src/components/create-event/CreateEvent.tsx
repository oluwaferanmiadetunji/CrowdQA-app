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
import dayjs from 'dayjs';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { useDispatch } from 'react-redux';
import { useCreateEventMutation } from 'lib/redux/event.api.slice';
import { addEvent } from 'lib/redux/events.slice';
import { toast } from 'react-toastify';
import CircularProgress from '@mui/material/CircularProgress';
import { isStartDateGreaterThanEndDate } from 'lib/helpers';
// import { AppRoutes } from 'lib/constants';

const CreateEvent = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const history = useNavigate();
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    const params = queryString.parse(location.search);
    setOpen(true);
    history({
      search: queryString.stringify({ ...params, event: 'new' }),
    });
  };

  const handleClose = () => {
    setOpen(false);
    const params = queryString.parse(location.search);
    delete params.event;
    history({
      search: queryString.stringify(params),
    });
  };

  const [startDate, setStartDate] = React.useState<any>(dayjs(new Date()));
  const [endDate, setEndDate] = React.useState<any>(dayjs(new Date().setDate(new Date().getDate() + 3)));
  const [name, setName] = React.useState('');

  const [createEvent, { isLoading }] = useCreateEventMutation();

  const payload = {
    name: name,
    start_date: new Date(startDate).toISOString(),
    end_date: new Date(endDate).toISOString(),
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isStartDateGreaterThanEndDate(payload.start_date, payload.end_date)) {
      return;
    }

    try {
      const res = await createEvent(payload).unwrap();

      dispatch(addEvent({ ...res }));
      toast.success('Event created!');
      handleClose();
    } catch (error) {
      const err: any = error;

      toast.error(err?.data?.error);
    }
  };

  return (
    <>
      <span onClick={handleClickOpen} role="presentation">
        {children}
      </span>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <DialogTitle>When is this event?</DialogTitle>

          <DialogContent sx={{ marginTop: '20px' }}>
            <DemoItem label="Event Name">
              <TextField
                margin="dense"
                id="name"
                required
                size="small"
                name="name"
                type="text"
                fullWidth
                variant="outlined"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </DemoItem>

            <Box sx={styles.dates}>
              <DemoItem label="Start Date">
                <DatePicker
                  disablePast
                  autoFocus
                  format="MMM D, YYYY"
                  value={startDate}
                  onChange={(value: any) => setStartDate(value)}
                />
              </DemoItem>

              <DemoItem label="End Date">
                <DatePicker
                  disablePast
                  autoFocus
                  format="MMM D, YYYY"
                  value={endDate}
                  onChange={(value: any) => setEndDate(value)}
                  minDate={dayjs(new Date(startDate))}
                />
              </DemoItem>
            </Box>
          </DialogContent>

          <DialogActions sx={styles.actions}>
            <Alert severity="info" sx={styles.info}>
              Anyone with the code or link can participate!
            </Alert>

            <Stack direction="row" spacing={2}>
              <Button onClick={handleClose} color="error">
                Cancel
              </Button>
              <Button type="submit" variant="contained">
                {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Create Event'}
              </Button>
            </Stack>
          </DialogActions>
        </Box>
      </Dialog>
    </>
  );
};

export default CreateEvent;
