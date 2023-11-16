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

const UsersHomePage = () => {
  const dispatch = useDispatch();
  const userModal = useSelector(selectUserModal);
  const handleDispatch = (credentials) => {
    const date = new Date().toLocaleDateString();
    console.log(date);
    dispatch(getDailyCalories(credentials));
    dispatch(getDailyInfo(date));
  };
  return (
    <div className='user-home-page'>
      <HomePageForm handleDispatch={handleDispatch} />
      <UserInfo />
      {userModal && <UserNavModal />}
    </div>
  );
};
export default UsersHomePage;
