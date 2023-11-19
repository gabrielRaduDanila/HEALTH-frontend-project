import './Header.css';
import logo from '../../assets/logo-header.svg';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import { selectUserPage } from '../../features/auth/selectors';
import { useDispatch, useSelector } from 'react-redux';
import UserMenu from '../user-menu/UserMenu';
import { useNavigate } from 'react-router-dom';
import { selectUserModal } from '../../features/user-data/selectors';
import {
  openUserModal,
  closeUserModal,
} from '../../features/user-data/userDataSlice';

const Header = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  // const windowWidth = window.innerWidth;
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isUserPage = useSelector(selectUserPage);
  return (
    <>
      <header>
        <HeaderLogo />
        {!isUserPage && <Navigation />}
        {windowWidth >= 768 && windowWidth < 1024 && isUserPage && <UserMenu />}
        {isUserPage && <UserInfo />}
        {windowWidth >= 1024 && isUserPage && <UserMenu />}
      </header>
      {windowWidth < 768 && isUserPage && <UserMenu />}
    </>
  );
};

function HeaderLogo() {
  const navigate = useNavigate();
  const userModal = useSelector(selectUserModal);
  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <>
      <img
        src={logo}
        alt='logo'
        className='header-logo'
        onClick={handleLogoClick}
      />
      <p
        className={`aplication-name ${!userModal ? 'hide-class' : ''}`}
        onClick={handleLogoClick}
      >
        Slim<span className='aplication-name orange-colored'>Mom</span>
      </p>
    </>
  );
}

function Navigation() {
  return (
    <div className='user-btns'>
      <NavLink className='user-btn' to='users/login'>
        log in
      </NavLink>
      <NavLink className='user-btn' to='users/register'>
        Registration
      </NavLink>
    </div>
  );
}

function UserInfo() {
  const userModal = useSelector(selectUserModal);
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(openUserModal());
  };

  const handleClose = () => {
    dispatch(closeUserModal());
  };

  return (
    <>
      <div className='user-info'>
        {!userModal && (
          <GiHamburgerMenu className='header-menu' onClick={handleClick} />
        )}
        {userModal && (
          <IoClose
            style={{ width: 25, height: 25 }}
            className='header-menu'
            onClick={handleClose}
          />
        )}
      </div>
      <div className='user-info-desktop'>
        <NavLink className='user-btn' to='/users/diary'>
          DIARY
        </NavLink>
        <NavLink className='user-btn' to='/users/home-page'>
          CALCULATOR
        </NavLink>
      </div>
    </>
  );
}

export default Header;
