import { useSelector } from 'react-redux';

import {
  selectNeededCaloriesForDesiredWeight,
  selectNonRecCategories,
  selectDailyInfo,
} from '../features/user-data/selectors';

export const useUserData = () => {
  const neededCaloriesForDesiredWeight = useSelector(
    selectNeededCaloriesForDesiredWeight
  );
  const nonRecCategories = useSelector(selectNonRecCategories);
  const dailyInfo = useSelector(selectDailyInfo);

  return {
    neededCaloriesForDesiredWeight,
    nonRecCategories,
    dailyInfo,
  };
};
