// import { useAuth } from 'hooks';
// import { useLoadingAndError } from 'hooks/useLoadingAndError';
// import ErrorMessage from 'components/error-message/ErrorMessage';

import { useSelector, useDispatch } from 'react-redux';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';
import './HomePage.css';
import HomePageForm from '../../home-page-form/HomePageForm';
import { useDailyCalories } from '../../../hooks/useDailyCalories';

const HomePage = () => {
  const { isLoading, modalIsOpen, isError } = useDailyCalories();

  return (
    <>
      {isLoading && <LoadingSpinner />}
      <HomePageForm />
    </>
  );
};

export default HomePage;
