import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Sidebar from './Sidebar';
import Typography from '@mui/material/Typography';
import styles from './styles';
import MenuProfile from 'components/menu';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box sx={styles.container}>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={styles.toolbar}>
            <Box>
              <Typography></Typography>
            </Box>

            <MenuProfile />
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
