import { Suspense } from 'react';
import Routes from 'components/routes';
import Loader from 'components/loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from 'components/theme';
import store from 'lib/redux';
import { Provider } from 'react-redux';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { getTokenFromLocalStorage } from 'lib/helpers';
import { AppRoutes, API_URL } from 'lib/constants';
import { logout } from 'lib/redux/auth.slice';

axios.defaults.baseURL = API_URL;

const token = getTokenFromLocalStorage();

if (!!token) {
  const decodedToken: any = jwtDecode(token);
  if (decodedToken.exp * 1000 < Date.now()) {
    store.dispatch(logout(null));
    window.location.href = AppRoutes.LOGIN;
  } else {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  }
}

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Suspense fallback={<Loader />}>
            <QueryClientProvider client={queryClient} contextSharing>
              <Routes />

              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                pauseOnFocusLoss={false}
                pauseOnHover={false}
              />
            </QueryClientProvider>
          </Suspense>
        </LocalizationProvider>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
