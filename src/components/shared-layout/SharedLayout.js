import './SharedLayout.css';
import { NavLink, Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { AiOutlineHome } from 'react-icons/ai';
import Header from '../header/Header';
// import { useAuth } from 'hooks';
import Loading from '../loading/Loading';
// import AuthNav from 'components/auth-nav/AuthNav';
// import UserMenu from 'components/user-menu/UserMenu';

const SharedLayout = () => {
  // const { isLoggedIn } = useAuth();

  return (
    <div className='container'>
      <Header />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}

      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </div>
  );
};
export default SharedLayout;
{
  /* <header className='phonebookHeader'>
        <NavLink to='/'>
          <AiOutlineHome className='homeIcon' />
        </NavLink> */
}
