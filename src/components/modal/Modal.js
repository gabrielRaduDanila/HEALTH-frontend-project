import './Modal.css';
import '../home-page-form/HomePageForm.css';

import ModalMobileMenu from '../modal-mobile-menu/ModalMobileMenu';
import Header from '../header/Header';
import { useDailyCalories } from '../../hooks/useDailyCalories';
import { Link } from 'react-router-dom';

const Modal = () => {
  const { neededCaloriesForDesiredWeight, nonRecCategories } =
    useDailyCalories();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <Header />
        <ModalMobileMenu />
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
