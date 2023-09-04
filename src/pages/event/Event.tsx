import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CircularProgress from '@mui/material/CircularProgress';
import styles from './styles';
import MenuProfile from 'components/menu';
import { useDispatch } from 'react-redux';
import { setEvent } from 'lib/redux/event.slice';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Link } from 'react-router-dom';
import { AppRoutes } from 'lib/constants';
import { formatDate } from 'lib/helpers';
import SubHeader from './SubHeader';
import { Outlet } from 'react-router-dom';

const SingleEvent = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const id = params?.id;

  const fetchEvent = async () => {
    const response = await axios.get(`/events/${id}`);

    return response.data;
  };

  const { data, isLoading } = useQuery({
    queryKey: [`event-${id}`],
    queryFn: fetchEvent,
  });

  React.useEffect(() => {
    if (data) {
      dispatch(setEvent(data));
    }
  }, [data, dispatch, id]);

  return (
    <Box sx={styles.container}>
      <AppBar position="fixed">
        <Toolbar disableGutters sx={styles.toolbar}>
          <Stack spacing={2} direction="row">
            <IconButton component={Link} to={AppRoutes.HOME} sx={styles.backButton}>
              <KeyboardArrowLeftIcon />
            </IconButton>

            <Box sx={{ marginLeft: '20px' }}>
              <Typography sx={styles.name}>{data?.name}</Typography>
              <Typography sx={styles.date}>
                {formatDate(data?.start_date, 'MMM D')} - {formatDate(data?.end_date, 'MMM D, YYYY')}
              </Typography>
            </Box>
          </Stack>

          <Box>
            <Typography sx={styles.code}>#{data?.event_code}</Typography>
          </Box>

          <Stack spacing={2} direction="row">
            <MenuProfile />
          </Stack>
        </Toolbar>
      </AppBar>

      <SubHeader />

      <Stack direction="row" sx={styles.content}>
        <Box sx={styles.children}>
          {isLoading ? (
            <Box
              sx={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
            >
              <CircularProgress />
            </Box>
          ) : (
            <Outlet />
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default SingleEvent;
