import { useSelector } from 'react-redux';
import {
  selectIsOpen,
  selectContactName,
  selectId,
  selectModalFor,
} from 'features/modal/selectors';

export const useModal = () => {
  const isOpen = useSelector(selectIsOpen);
  const contactName = useSelector(selectContactName);
  const id = useSelector(selectId);
  const modalFor = useSelector(selectModalFor);

  return { isOpen, contactName, id, modalFor };
};
