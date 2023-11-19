import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../features/auth/selectors';
import { logOut } from '../../features/auth/operations';
import './UserMenu.css';
import {
  setIsNotUserPage,
  setIsNotLoggedIn,
} from '../../features/auth/authSlice';
import returnBtn from '../../assets/return-btn.svg';
import { selectUserMobileAddProduct } from '../../features/user-diary/selectors';
import { closeAddProduct } from '../../features/user-diary/diarySlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const userMobileAddProduct = useSelector(selectUserMobileAddProduct);

  let { name } = user;
  if (name) {
    name = name.split(/\s|-/)[0];
  }
  const handleClick = () => {
    dispatch(closeAddProduct());
  };

  return (
    <div className='user-menu'>
      {userMobileAddProduct && (
        <button className='back-btn' onClick={handleClick}>
          <img src={returnBtn} alt='Return Button' />
        </button>
      )}
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
