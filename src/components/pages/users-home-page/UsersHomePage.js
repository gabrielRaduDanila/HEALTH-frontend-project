import './UserHomePage.css';
import HomePageForm from '../../home-page-form/HomePageForm';
import { useDispatch } from 'react-redux';
import { getDailyCalories } from '../../../features/user-data/operations';
import UserInfo from '../../user-info/UserInfo';

const UsersHomePage = () => {
  const dispatch = useDispatch();
  const handleDispatch = (credentials) => {
    dispatch(getDailyCalories(credentials));
  };
  return (
    <div className='user-home-page'>
      <HomePageForm handleDispatch={handleDispatch} />
      <UserInfo />
    </div>
  );
};
export default UsersHomePage;
