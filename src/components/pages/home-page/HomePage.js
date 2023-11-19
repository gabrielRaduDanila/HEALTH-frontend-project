import { useDispatch } from 'react-redux';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';
import './HomePage.css';
import HomePageForm from '../../home-page-form/HomePageForm';
import { useDailyCalories } from '../../../hooks/useDailyCalories';
import Modal from '../../modal/Modal';
import { getDailyCalories } from '../../../features/dailyCalories/operations';
import { openModal } from '../../../features/dailyCalories/dailyCaloriesSlice';
import Backgroud from '../../backgroud/Backgroud';
import ErrorMessage from '../../error-message/ErrorMessage';

const HomePage = () => {
  const { isLoading, modalIsOpen, isError } = useDailyCalories();
  const dispatch = useDispatch();
  const handleSubmit = (credentials) => {
    dispatch(getDailyCalories(credentials));
    dispatch(openModal());
  };

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <HomePageForm handleDispatch={handleSubmit} />
      {modalIsOpen && <Modal />}
      <Backgroud />
      {isError && <ErrorMessage />}
    </>
  );
};

export default HomePage;
