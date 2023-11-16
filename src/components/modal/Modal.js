import './Modal.css';
import '../home-page-form/HomePageForm.css';
import { closeModal } from '../../features/dailyCalories/dailyCaloriesSlice';
import { useDispatch } from 'react-redux';
import ModalMobileMenu from '../modal-mobile-menu/ModalMobileMenu';
import { useDailyCalories } from '../../hooks/useDailyCalories';
import { Link } from 'react-router-dom';
import { useRef, useEffect } from 'react';

const Modal = () => {
  const { neededCaloriesForDesiredWeight, nonRecCategories } =
    useDailyCalories();
  const dispatch = useDispatch();
  const modalRef = useRef();
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        dispatch(closeModal());
      }
    };
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        dispatch(closeModal());
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('mousedown', handleOutsideClick);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [dispatch]);

  return (
    <aside className='modal-container'>
      <div className='modal' ref={modalRef}>
        <div className='mobile-menu-container'>
          <ModalMobileMenu />
        </div>
        <div className='modal-content'>
          <h2 className='form-title'>
            Your recommended daily calorie intake is
          </h2>
          <h3 className='calories'>
            {neededCaloriesForDesiredWeight}{' '}
            <span className='sub-text'> kcal</span>
          </h3>
          <div className='food-container'>
            <h3 className='food-title'>Foods you should not eat</h3>
            <ul className='food-list'>
              {nonRecCategories.map((categ) => {
                return (
                  <li className='food-list-item' key={categ}>
                    {categ}
                  </li>
                );
              })}
            </ul>
          </div>
          <Link to='/users/register' className='submit-btn modal-btn'>
            Start losing weight
          </Link>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
