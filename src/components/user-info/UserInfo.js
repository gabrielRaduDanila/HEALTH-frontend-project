import { useSelector } from 'react-redux';
import './UserInfo.css';
import { useUserData } from '../../hooks/useUserData';
import { useDiary } from '../../hooks/useUserDiary';
import {
  selectNonRecCategories,
  selectNeededCaloriesForDesiredWeight,
} from '../../features/auth/selectors';

const UserInfo = () => {
  const { date } = useDiary();
  const userDate = date ? new Date(date) : new Date();
  const { dailyInfo } = useUserData();
  const neededCaloriesForDesiredWeight = useSelector(
    selectNeededCaloriesForDesiredWeight
  );
  const nonRecCategories = useSelector(selectNonRecCategories);
  const { totalDayCaloris: consumedCalories } = dailyInfo;
  const displayDate = userDate.toLocaleDateString();
  const leftCaloriesDisplay = neededCaloriesForDesiredWeight - consumedCalories;
  const relativeCaloricRatio = consumedCalories
    ? (consumedCalories * 100) / neededCaloriesForDesiredWeight
    : 100;

  return (
    <div className='user-diet-info'>
      <div className='user-info-daily'>
        <h3 className='user-info-title'>
          Summary for {displayDate.replace(/\//g, '.')}
        </h3>
        <ul className='daily-info'>
          <li className='daily-info-item'>
            Left <span>{leftCaloriesDisplay.toFixed(2) || '0000'} kcal</span>
          </li>
          <li className='daily-info-item'>
            Consumed <span>{consumedCalories.toFixed(2) || '0000'} kcal</span>
          </li>
          <li className='daily-info-item'>
            Daily rate{' '}
            <span>
              {neededCaloriesForDesiredWeight.toFixed(2) || '0000'} kcal
            </span>
          </li>
          <li className='daily-info-item'>
            n% of normal{' '}
            <span>{relativeCaloricRatio.toFixed(2) || '0000'} kcal</span>
          </li>
        </ul>
      </div>
      <div className='user-categories'>
        <h3 className='user-info-title'>Food not recommended</h3>
        {nonRecCategories.length === 0 && (
          <p className='info'>Your diet will be displayed here</p>
        )}
        {nonRecCategories.length > 0 && (
          <ListCategories list={nonRecCategories} />
        )}
      </div>
      <Background />
    </div>
  );
};
export default UserInfo;

function ListCategories({ list }) {
  return (
    <ul className='daily-info'>
      {list.map((cat) => (
        <li className='daily-info-item categ-item' key={cat}>
          {cat}
        </li>
      ))}
    </ul>
  );
}

function Background() {
  return (
    <div className='background-images-user'>
      <div className='img-background'></div>
    </div>
  );
}
