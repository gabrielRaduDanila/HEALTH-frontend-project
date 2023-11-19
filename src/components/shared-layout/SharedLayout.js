import './SharedLayout.css';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import Header from '../header/Header';
import Loading from '../loading/Loading';

const SharedLayout = () => {
  return (
    <div className='container'>
      <Header />

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
