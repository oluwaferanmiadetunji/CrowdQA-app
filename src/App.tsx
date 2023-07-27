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

function App() {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <ThemeProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Suspense fallback={<Loader />}>
            <QueryClientProvider client={queryClient}>
              <Routes />

              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                theme="dark"
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
