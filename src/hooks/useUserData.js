import { useSelector } from 'react-redux';

import { selectDailyInfo } from '../features/user-data/selectors';

export const useUserData = () => {
  const dailyInfo = useSelector(selectDailyInfo);

  return {
    dailyInfo,
  };
};
