import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
// import { refreshUser } from 'features/auth/operations';
// import { useDispatch } from 'react-redux';
// import { useEffect } from 'react';
// import { useAuth } from 'hooks';
import SharedLayout from './shared-layout/SharedLayout';
// import Loading from './loading/Loading';

const HomePage = lazy(() => import('./pages/home-page/HomePage'));
// const Register = lazy(() => import('./pages/register/Register'));
// const Login = lazy(() => import('./pages/login/Login'));
// const Contacts = lazy(() => import('./pages/contacts/Contacts'));
const ErrorPage = lazy(() => import('./pages/error-page/ErrorPage'));

export const App = () => {
  // const { isRefreshing } = useAuth();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);
  // return isRefreshing ? (
  //   <div className='loading-container'>
  //     <Loading />
  //   </div>
  // ) : (
  //   <Routes>
  //     <Route path='/' element={<SharedLayout />}>
  //       <Route index element={<HomePage />} />
  //       <Route
  //         path='/register'
  //         element={
  //           <RestrictedRoute redirectTo='/contacts' component={<Register />} />
  //         }
  //       />
  //       <Route
  //         path='/login'
  //         element={
  //           <RestrictedRoute redirectTo='/contacts' component={<Login />} />
  //         }
  //       />
  //       <Route
  //         path='/contacts'
  //         element={
  //           <PrivateRoute redirectTo='/register' component={<Contacts />} />
  //         }
  //       />
  //       <Route path='*' element={<ErrorPage />} />
  //     </Route>
  //   </Routes>
  // );
  return (
    <Routes>
      <Route path='/' element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        {/* <Route
          path='/register'
          element={
            <RestrictedRoute redirectTo='/contacts' component={<Register />} />
          }
        />
        <Route
          path='/login'
          element={
            <RestrictedRoute redirectTo='/contacts' component={<Login />} />
          }
        />
        <Route
          path='/contacts'
          element={
            <PrivateRoute redirectTo='/register' component={<Contacts />} />
          }
        /> */}
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
};
