import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import styles from './styles';
import { AppRoutes } from 'lib/constants';
import { Link, useNavigate } from 'react-router-dom';

import { createUser } from 'lib/api/users';
import { toast } from 'react-toastify';

export default function SignInSide() {
  const [isLoading, setLoading] = React.useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const payload: any = { email: data.get('email'), password: data.get('password'), name: data.get('name') };
    setLoading(true);
    try {
      await createUser(payload);
      toast.success('Account created successfully!');
      setLoading(false);
      navigate(AppRoutes.LOGIN);
    } catch (err) {
      setLoading(false);
    }
  };

  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={5}
        sx={{
          backgroundImage: 'url(/assets/bg1.jpeg)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <Grid item xs={12} sm={8} md={7} component={Paper} elevation={6} square sx={styles.grid}>
        <Box sx={styles.container}>
          <Typography component="h1" variant="h5" sx={styles.header}>
            Sign up <br />
            as an event host
          </Typography>

          <Typography component="h1" variant="h5" sx={styles.subHeader}>
            or
            <Link to={AppRoutes.LOGIN}>
              <span>Log in to your account</span>
            </Link>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="name"
              label="Name"
              name="name"
              autoComplete="name"
              autoFocus
              variant="standard"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              variant="standard"
              size="small"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="standard"
              size="small"
            />

            <Button type="submit" fullWidth variant="contained" sx={styles.submit}>
              {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Create Account'}
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
