import { useSelector } from 'react-redux';

import {
  selectIsError,
  selectIsLoading,
} from '../features/user-data/selectors';

export const useUserLoadingAndError = () => {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return { isError, isLoading };
};
