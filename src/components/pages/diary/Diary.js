import './Diary.css';
import { useDiary } from '../../../hooks/useUserDiary';
import {
  setDate,
  openAddProduct,
} from '../../../features/user-diary/diarySlice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { FaCalendar } from 'react-icons/fa';
import ListConsumedProducts from '../../list-consumed-products/ListConsumedProducts';
import UserNavModal from '../../user-nav-modal/UserNavModal';
import { selectUserModal } from '../../../features/user-data/selectors';
import AddProduct from '../../add-product/AddProduct';
import UserInfo from '../../user-info/UserInfo';
import { getDailyInfo } from '../../../features/user-data/operations';
import {
  selectUserMobileAddProduct,
  selectIsError,
  selectIsLoading,
} from '../../../features/user-diary/selectors';
import ErrorMessage from '../../error-message/ErrorMessage';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

const Diary = () => {
  const userModal = useSelector(selectUserModal);
  const dispatch = useDispatch();
  const addModal = useSelector(selectUserMobileAddProduct);
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  if (addModal) {
    return (
      <main className='mobile-add-product'>
        <AddProduct />
        {isError && <ErrorMessage />}
        {isLoading && <LoadingSpinner />}
      </main>
    );
  }
  return (
    <div className='diary-page'>
      <main className='diary-main'>
        <div className='products-section'></div>
        <DateInput />
        <div className='hide-on-mobile'>
          <AddProduct />
        </div>
        <ListConsumedProducts />
        <div className='hide-on-desktop'>
          <button
            className='open-menu-btn'
            onClick={() => dispatch(openAddProduct())}
          >
            +
          </button>
        </div>
        {userModal && <UserNavModal />}
        {isError && <ErrorMessage />}
        {isLoading && <LoadingSpinner />}
      </main>
      <div className='user-info-container'>
        <UserInfo />
      </div>
    </div>
  );
};
export default Diary;

function DateInput() {
  const dispatch = useDispatch();
  const { date } = useDiary();
  const userDate = date ? new Date(date) : new Date();
  const [showCalendar, setShowCalendar] = useState(false);
  const handleCalendarClick = () => {
    setShowCalendar(!showCalendar);
  };

  useEffect(() => {
    const fetchData = () => {
      try {
        dispatch(getDailyInfo({ date: userDate.toLocaleDateString() }));
      } catch (error) {
        console.error('Error fetching daily info:', error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleDateChange = (selectedDate) => {
    setShowCalendar(false);
    dispatch(setDate(selectedDate.getTime()));
    dispatch(getDailyInfo({ date: selectedDate.toLocaleDateString() }));
  };

  return (
    <>
      <div className='selected-date'>
        <p className='display-selected-date'>
          {userDate.toLocaleDateString().replace(/\//g, '.')}
        </p>

        <FaCalendar onClick={handleCalendarClick} className='calendar-icon' />
      </div>
      {showCalendar && (
        <Calendar onChange={handleDateChange} value={userDate} />
      )}
    </>
  );
}
