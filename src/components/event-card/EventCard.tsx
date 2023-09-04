import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import styles from './styles';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { formatDate, checkIfActive } from 'lib/helpers';
import { AppRoutes } from 'lib/constants';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { EventType } from 'types/events';
import { Link } from 'react-router-dom';
import DeleteEvent from './DeleteEvent';

const getColor = (status?: boolean) => (status ? 'green' : 'grey');

const EventCard = ({ event }: { event: EventType }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={styles.container}>
      <Link to={`${AppRoutes.EVENT}/${event?.id}`}>
        <Box sx={styles.first}>
          <IconButton sx={styles.icon}>
            <CalendarTodayIcon fontSize="small" sx={{ color: getColor(checkIfActive(event?.end_date)) }} />
          </IconButton>

          <Box>
            <Box sx={styles.flex}>
              <Typography sx={styles.eventName}>{event?.name}</Typography>
              <Typography sx={styles.eventCode}>#{event?.event_code}</Typography>
            </Box>

            <Box sx={styles.flex}>
              <Typography sx={styles.eventStartDate}>{formatDate(event.start_date, 'MMM D')} - </Typography>
              <Typography sx={styles.eventEndDate}>{formatDate(event.end_date, 'MMM D, YYYY')}</Typography>
            </Box>
          </Box>
        </Box>
      </Link>

      <IconButton onClick={handleClick} sx={styles.menuIcon}>
        <MoreVertIcon color="inherit" fontSize="small" />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Link to={`${AppRoutes.EVENT}/${event?.id}`}>
          <MenuItem onClick={handleClose} sx={styles.menuItem}>
            <Typography sx={styles.menuItemText}>Open</Typography>
          </MenuItem>
        </Link>

        <MenuItem onClick={handleClose} sx={styles.menuItem}>
          <Typography sx={styles.menuItemText}>Share access</Typography>
        </MenuItem>

        <MenuItem onClick={handleClose} sx={styles.menuItem}>
          <Typography sx={styles.menuItemText}>Duplicate</Typography>
        </MenuItem>

        <DeleteEvent event={event} />
      </Menu>
    </Box>
  );
};

export default EventCard;
