import { useSelector } from 'react-redux';
import './UserInfo.css';
import { useUserData } from '../../hooks/useUserData';
import { useEffect } from 'react';

const UserInfo = () => {
  // const state = useSelector((state) => state.userData);
  // console.log(state);
  const { neededCaloriesForDesiredWeight, nonRecCategories, dailyInfo } =
    useUserData();
  const { totalDayCaloris: consumedCalories } = dailyInfo;
  const date = new Date().toLocaleDateString();
  const leftCaloriesDisplay = neededCaloriesForDesiredWeight - consumedCalories;
  const relativeCaloricRatio = consumedCalories
    ? (consumedCalories * 100) / neededCaloriesForDesiredWeight
    : 100;

  return (
    <div className='user-diet-info'>
      <div className='user-info-daily'>
        <h3 className='user-info-title'>
          Summary for {date.replace(/\//g, '.')}
        </h3>
        <ul className='daily-info'>
          <li className='daily-info-item'>
            Left <span>{leftCaloriesDisplay || '0000'} kcal</span>
          </li>
          <li className='daily-info-item'>
            Consumed <span>{consumedCalories || '0000'} kcal</span>
          </li>
          <li className='daily-info-item'>
            Daily rate{' '}
            <span>{neededCaloriesForDesiredWeight || '0000'} kcal</span>
          </li>
          <li className='daily-info-item'>
            n% of normal <span>{relativeCaloricRatio || '0000'} kcal</span>
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
