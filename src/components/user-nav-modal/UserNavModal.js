import './UserNavModal.css';
import { NavLink } from 'react-router-dom';
import { closeUserModal } from '../../features/user-data/userDataSlice';
import { useDispatch } from 'react-redux';

const UserNavModal = () => {
  const dispatch = useDispatch();
  return (
    <div className='user-modal'>
      <NavLink
        className='user-modal-btn'
        to='/users/diary'
        onClick={() => dispatch(closeUserModal())}
      >
        DIARY
      </NavLink>
      <NavLink
        className='user-modal-btn'
        to='/users/home-page'
        onClick={() => dispatch(closeUserModal())}
      >
        CALCULATOR
      </NavLink>
    </div>
  );
};
export default UserNavModal;
