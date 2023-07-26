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
import { toast } from 'react-toastify';
import JoiningAsParticipant from 'components/joining-as-participant';
import { useDispatch, useSelector } from 'react-redux';
import { useRegisterMutation } from 'lib/redux/auth.api.slice';
import { setCredentials } from 'lib/redux/auth.slice';

const inputLabelProps = {
  style: {
    color: 'white',
    opacity: '0.6',
  },
};

const inputStyle = {
  color: 'white',
};

export default function Signup() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [register, { isLoading }] = useRegisterMutation();

  const { userInfo } = useSelector((state: any) => state.auth);

  React.useEffect(() => {
    if (userInfo) {
      navigate(AppRoutes.HOME);
    }
  }, [navigate, userInfo]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const payload: any = {
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('name'),
    };

    try {
      const res = await register(payload).unwrap();

      dispatch(setCredentials({ ...res }));
      toast.success('Account created successfully!');

      navigate(AppRoutes.HOME);
    } catch (error) {
      const err: any = error;

      toast.error(err?.data?.error);
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
              color="secondary"
              InputLabelProps={inputLabelProps}
              InputProps={{
                style: inputStyle,
              }}
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
              color="secondary"
              InputLabelProps={inputLabelProps}
              InputProps={{
                style: inputStyle,
              }}
              type="email"
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
              color="secondary"
              InputLabelProps={inputLabelProps}
              InputProps={{
                style: inputStyle,
              }}
            />

            <Button type="submit" color="secondary" fullWidth variant="contained" sx={styles.submit}>
              {isLoading ? <CircularProgress size={24} sx={{ color: 'white' }} /> : 'Create Account'}
            </Button>

            <JoiningAsParticipant />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
