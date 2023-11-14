import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from '../features/auth/operations';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
// import { useAuth } from '../hooks';
import SharedLayout from './shared-layout/SharedLayout';
// import Loading from './loading/Loading';
import { useSelector } from 'react-redux';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
const Register = lazy(() => import('./pages/register/Register'));
const Login = lazy(() => import('./pages/login/Login'));
const UsersHomePage = lazy(() =>
  import('./pages/users-home-page/UsersHomePage')
);
// const Contacts = lazy(() => import('./pages/contacts/Contacts'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));

export const App = () => {
  // const state = useSelector((state) => state.auth);
  // console.log(state);
  // const { isRefreshing } = useAuth();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route
          index
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<HomePage />}
            />
          }
        />

        <Route
          path='/users/register'
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<Register />}
            />
          }
        />

        <Route
          path='/users/login'
          element={
            <RestrictedRoute
              redirectTo='/users/home-page'
              component={<Login />}
            />
          }
        />
        <Route
          path='/users/home-page'
          element={
            <PrivateRoute
              redirectTo='/users/register'
              component={<UsersHomePage />}
            />
          }
        />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
