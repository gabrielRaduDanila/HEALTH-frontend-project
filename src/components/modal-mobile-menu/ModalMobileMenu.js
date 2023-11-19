import returnBtn from '../../assets/return-btn.svg';
import './ModalMobileMenu.css';
import { closeModal } from '../../features/dailyCalories/dailyCaloriesSlice';
import { useDispatch } from 'react-redux';

const ModalMobileMenu = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(closeModal());
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
