import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import styles from './styles';

const NoEvent = () => {
  return (
    <Box sx={styles.eventContainer}>
      <img src="/assets/no_data.svg" alt="no event" style={styles.image} />
      <Typography sx={styles.text}>No Event</Typography>
    </Box>
  );
};

export default NoEvent;
