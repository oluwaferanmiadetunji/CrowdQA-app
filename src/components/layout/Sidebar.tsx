import Box from '@mui/material/Box';
import styles from './styles';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { AppRoutes } from 'lib/constants';
import { Link } from 'react-router-dom';

const NavItems = [
  {
    text: 'Events',
    route: AppRoutes.HOME,
  },
];

const Sidebar = () => {
  return (
    <Paper elevation={3} sx={styles.sidebar}>
      {NavItems.map(({ route, text }) => {
        return (
          <Link key={text} to={route}>
            <Box sx={styles.linkItem}>
              <Typography sx={styles.linkText}> {text}</Typography>
            </Box>
          </Link>
        );
      })}
    </Paper>
  );
};

export default Sidebar;
