import returnBtn from '../../assets/return-btn.svg';
import './ModalMobileMenu.css';
import { closeModal } from '../../features/dailyCalories/dailyCaloriesSlice';
import { useDispatch } from 'react-redux';
// import { setIsUserPage } from '../../features/auth/authSlice';
// import { selectIsLoggedIn } from '../../features/auth/selectors';
// import { useSelector } from 'react-redux';

const ModalMobileMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal());
    // dispatch(setIsUserPage());
  };
  return (
    <div className='modal-mobile-menu'>
      <button className='return-btn' onClick={handleClick}>
        <img src={returnBtn} alt='Return Button' />
      </button>
    </div>
  );
};

export default ModalMobileMenu;
