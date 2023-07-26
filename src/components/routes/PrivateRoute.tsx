import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppRoutes } from 'lib/constants';
import { ReactNode } from 'react';

const PrivateRoute = ({ children }: { children: ReactNode }): any => {
  const { userInfo } = useSelector((state: any) => state.auth);

  return userInfo ? children : <Navigate to={AppRoutes.LOGIN} replace />;
};
export default PrivateRoute;
