import { useSelector } from 'react-redux';

import {
  selectIsError,
  selectIsLoading,
  selectNeededCaloriesForDesiredWeight,
  selectNonRecCategories,
} from '../features/user-data/selectors';

export const useUserData = () => {
  const neededCaloriesForDesiredWeight = useSelector(
    selectNeededCaloriesForDesiredWeight
  );
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const nonRecCategories = useSelector(selectNonRecCategories);

  return {
    neededCaloriesForDesiredWeight,
    isLoading,
    isError,
    nonRecCategories,
  };
};
