import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';
import Sidebar from './Sidebar';
import HeaderMenu from './Menu';
import styles from './styles';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={styles.container}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={styles.toolbar}>
            <AdbIcon sx={{ mr: 1 }} />

            <HeaderMenu />
          </Toolbar>
        </Container>
      </AppBar>

      <Box sx={styles.content}>
        <Sidebar />

        <Box sx={styles.children}>{children}</Box>
      </Box>
    </Box>
  );
}
export default Layout;
