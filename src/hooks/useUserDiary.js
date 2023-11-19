import { useSelector } from 'react-redux';

import {
  selectSearchValue,
  selectDate,
  selectFindedProducts,
} from '../features/user-diary/selectors';

export const useDiary = () => {
  const searchValue = useSelector(selectSearchValue);
  const date = useSelector(selectDate);
  const findedProducts = useSelector(selectFindedProducts);

  return {
    searchValue,
    date,
    findedProducts,
  };
};
