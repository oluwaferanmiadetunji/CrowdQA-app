import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Sidebar from './Sidebar';
import Paper from '@mui/material/Paper';
import EventIcon from '@mui/icons-material/Event';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { stringAvatar } from 'lib/helpers';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import { logout } from 'lib/redux/auth.slice';
import { AppRoutes } from 'lib/constants';
import LogoutIcon from '@mui/icons-material/Logout';
import Typography from '@mui/material/Typography';
import Profile from 'components/profile';
import CreateEvent from 'components/create-event';
import AddIcon from '@mui/icons-material/Add';
import styles from './styles';

function Layout({ children }: { children: React.ReactNode }) {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userInfo } = useSelector((state: any) => state.auth);

  const logoutUser = async () => {
    dispatch(logout(null));
    navigate(AppRoutes.HOME);
  };

  const handleClickOpen = () => {
    handleCloseUserMenu();
  };

  return (
    <Box sx={styles.container}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={styles.toolbar}>
            <Box>
              <Typography></Typography>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar {...stringAvatar(userInfo?.name)} variant="rounded" />
              </IconButton>

              <Menu
                sx={{ mt: '45px' }}
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <Paper sx={styles.menuList}>
                  <Profile handleCloseUserMenu={handleCloseUserMenu} />

                  <MenuItem>
                    <ListItemIcon>
                      <EventIcon sx={styles.eventIcon} />
                    </ListItemIcon>

                    <ListItemText>
                      <Typography sx={styles.menuText}>Events</Typography>
                    </ListItemText>
                  </MenuItem>

                  <CreateEvent>
                    <MenuItem onClick={handleClickOpen}>
                      <ListItemIcon>
                        <AddIcon sx={styles.scheduleIcon} />
                      </ListItemIcon>

                      <ListItemText>
                        <Typography sx={styles.menuText}>Create Event</Typography>
                      </ListItemText>
                    </MenuItem>
                  </CreateEvent>

                  <MenuItem onClick={logoutUser}>
                    <ListItemIcon>
                      <LogoutIcon sx={styles.logoutIcon} />
                    </ListItemIcon>

                    <ListItemText>
                      <Typography sx={styles.menuText}>Logout</Typography>
                    </ListItemText>
                  </MenuItem>
                </Paper>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Stack direction="row" sx={styles.content}>
        <Sidebar />

        <Box sx={styles.children}>{children}</Box>
      </Stack>
    </Box>
  );
}
export default Layout;
