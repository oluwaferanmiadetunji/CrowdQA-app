import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles';
import EventCard from 'components/event-card';

const ActiveEvents = () => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.header}>
        <Typography sx={styles.headerText}>Active and upcoming</Typography>
      </Box>

      <Box sx={styles.events}>
        <EventCard />
        <EventCard />
      </Box>
    </Box>
  );
};

export default ActiveEvents;
