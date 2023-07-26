import { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Box, Link } from '@mui/material';

const Logo = forwardRef(({ sx }: any) => {
  const logo = <Box component="img" src="/assets/logo.svg" sx={{ width: 100, height: 50, cursor: 'pointer', ...sx }} />;

  return (
    <Link to="/" component={RouterLink} sx={{ display: 'contents' }}>
      {logo}
    </Link>
  );
});

export default Logo;
