import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

import HeaderMenu from './Menu';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <AppBar position="fixed">
        <Container maxWidth="xl">
          <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />

            <HeaderMenu />
          </Toolbar>
        </Container>
      </AppBar>

      <Box>{children}</Box>
    </Box>
  );
}
export default Layout;
