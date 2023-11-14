import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/selectors';
import { logOut } from '../../features/auth/operations';
import './UserMenu.css';
import {
  setIsNotUserPage,
  setIsNotLoggedIn,
} from '../../features/auth/authSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  let { name } = user;
  if (name) {
    name = name.split(/\s|-/)[0];
  }

  return (
    <div className='user-menu'>
      <p className='user-message'>{name}</p>
      <button
        type='button'
        className='logOut-btn'
        onClick={() => {
          dispatch(setIsNotUserPage());
          dispatch(setIsNotLoggedIn());
          dispatch(logOut());
        }}
      >
        Exit
      </button>
    </div>
  );
};
export default UserMenu;
