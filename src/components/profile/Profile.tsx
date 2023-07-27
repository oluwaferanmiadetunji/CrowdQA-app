import PersonIcon from '@mui/icons-material/Person';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import styles from './styles';

const Profile = ({ handleCloseUserMenu }: { handleCloseUserMenu: () => void }) => {
  const { userInfo } = useSelector((state: any) => state.auth);

  const open = () => {
    handleCloseUserMenu();
  };

  return (
    <Box>
      <Box sx={styles.profile} role="presentation" onClick={open}>
        <PersonIcon sx={styles.icon} />

        <Box sx={styles.infoContainer}>
          <Typography sx={styles.name}>{userInfo?.name}</Typography>
          <Typography sx={styles.email}>{userInfo?.email}</Typography>
        </Box>
      </Box>

      <Divider />
    </Box>
  );
};

export default Profile;
