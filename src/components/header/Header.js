import './Header.css';
import logo from '../../assets/logo-header.svg';
import { NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  return (
    <header>
      <img src={logo} alt='logo' className='header-logo' />
      {/* <Navigation /> */}
      <UserInfo />
    </header>
  );
};

function Navigation() {
  return (
    <div className='user-btns'>
      <NavLink className='user-btn' to='/log-in'>
        log in
      </NavLink>
      <NavLink className='user-btn' to='/register'>
        Registration
      </NavLink>
    </div>
  );
}

function UserInfo() {
  return (
    <div className='user-info'>
      <p className='aplication-name'>
        Slim<span className='aplication-name orange-colored'>Mom</span>
      </p>
      <GiHamburgerMenu className='header-menu' />
    </div>
  );
}

export default Header;
