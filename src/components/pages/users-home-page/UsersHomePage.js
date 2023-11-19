import './UserHomePage.css';
import HomePageForm from '../../home-page-form/HomePageForm';
import { useDispatch, useSelector } from 'react-redux';
import {
  getDailyCalories,
  getDailyInfo,
} from '../../../features/user-data/operations';
import UserInfo from '../../user-info/UserInfo';
import UserNavModal from '../../user-nav-modal/UserNavModal';
import { selectUserModal } from '../../../features/user-data/selectors';
import { useUserLoadingAndError } from '../../../hooks/useUserLoadingAndError';
import ErrorMessage from '../../error-message/ErrorMessage';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

const UsersHomePage = () => {
  const { isError, isLoading } = useUserLoadingAndError();
  const dispatch = useDispatch();
  const userModal = useSelector(selectUserModal);
  const handleDispatch = (credentials) => {
    const date = new Date().toLocaleDateString();

    dispatch(getDailyCalories(credentials));
    dispatch(getDailyInfo({ date }));
  };
  return (
    <div className='user-home-page'>
      <HomePageForm handleDispatch={handleDispatch} />
      <UserInfo />
      {userModal && <UserNavModal />}
      {isError && <ErrorMessage />}
      {isLoading && <LoadingSpinner />}
    </div>
  );
};
export default UsersHomePage;
