import Layout from 'components/layout';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import styles from './styles';
import { useSelector } from 'react-redux';
import Typography from '@mui/material/Typography';
import { getFirstName } from 'lib/helpers';
import CreateEvent from 'components/create-event';
import AddIcon from '@mui/icons-material/Add';
import ActiveEvents from './components/active-events';
import PastEvents from './components/past-events';

const Home = () => {
  const { userInfo } = useSelector((state: any) => state.auth);

  return (
    <Layout>
      <Box sx={styles.container}>
        <Card sx={styles.welcome}>
          <Box>
            <Typography sx={styles.header}>Welcome, {getFirstName(userInfo?.name)}</Typography>
            <Typography sx={styles.subHeader}>
              To run live polls, quizzes or Q&A sessions,
              <br />
              create your first event. Unlimited and for free!
            </Typography>

            <CreateEvent>
              <Button startIcon={<AddIcon fontSize="small" />} sx={styles.createEventButton}>
                Create Event
              </Button>
            </CreateEvent>
          </Box>

          <Box sx={styles.welcomeImage}>
            <img src="/assets/welcome.svg" alt="welcome" />
          </Box>
        </Card>

        <ActiveEvents />

        <PastEvents />
      </Box>
    </Layout>
  );
};

export default Home;
