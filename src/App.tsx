import { Suspense } from 'react';
import Routes from 'components/routes';
import Loader from 'components/loader';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ThemeProvider from 'components/theme';

function App() {
  const queryClient = new QueryClient();

  return (
    <ThemeProvider>
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
          />
        </QueryClientProvider>
      </Suspense>
    </ThemeProvider>
  );
}

export default App;
