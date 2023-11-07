import './Modal.css';
import { useDispatch } from 'react-redux';
import { closeModal } from 'features/modal/modalSlice';
import { useModal } from 'hooks/useModal';
import { deleteContact } from 'features/auth/operations';

const Modal = () => {
  const dispatch = useDispatch();
  const { contactName, id } = useModal();

  return (
    <aside className='modal-container'>
      <div className='modal'>
        <h4>Remove the {contactName} contact?</h4>
        <div className='btn-container'>
          <button
            type='button'
            className='btn confirm-btn'
            onClick={() => {
              dispatch(deleteContact(id));
              dispatch(closeModal());
            }}
          >
            confirm
          </button>
          <button
            type='button'
            className='btn clear-btn'
            onClick={() => {
              dispatch(closeModal());
            }}
          >
            cancel
          </button>
        </div>
      </div>
    </aside>
  );
};
export default Modal;
