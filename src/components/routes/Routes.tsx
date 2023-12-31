import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { AppRoutes } from 'lib/constants';
import Page404 from 'pages/Page404';
import PrivateRoute from 'components/routes/PrivateRoute';

const Home = lazy(() => import('pages/home'));
const Signup = lazy(() => import('pages/signup'));
const Login = lazy(() => import('pages/login'));
const SingleEvent = lazy(() => import('pages/event'));
const SingleEventAnalytics = lazy(() => import('pages/event-analytics'));
const SingleEventPolls = lazy(() => import('pages/event-polls'));
const SingleEventQA = lazy(() => import('pages/event-qa'));

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
  },
  {
    path: AppRoutes.SINGLE_EVENT,
    element: (
      <PrivateRoute>
        <SingleEvent />
      </PrivateRoute>
    ),
    children: [
      {
        path: 'analytics',
        element: <SingleEventAnalytics />,
      },
      {
        path: '',
        element: <SingleEventPolls />,
      },
      {
        path: 'questions',
        element: <SingleEventQA />,
      },
    ],
  },
  {
    path: AppRoutes.SIGNUP,
    element: <Signup />,
  },
  {
    path: AppRoutes.LOGIN,
    element: <Login />,
  },
  {
    path: AppRoutes.ALL,
    element: <Page404 />,
  },
]);

const Routes = () => {
  return <RouterProvider router={router} />;
};

export default Routes;
