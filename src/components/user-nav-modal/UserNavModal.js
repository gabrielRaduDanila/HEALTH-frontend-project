import './UserNavModal.css';
import { NavLink } from 'react-router-dom';

const UserNavModal = () => {
  return (
    <div className='user-modal'>
      <NavLink className='user-modal-btn' to='/users/diary'>
        DIARY
      </NavLink>
      <NavLink className='user-modal-btn' to='/users/home-page'>
        CALCULATOR
      </NavLink>
    </div>
  );
};
export default UserNavModal;
