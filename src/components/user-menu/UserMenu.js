import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from 'features/auth/selectors';
import { logOut } from 'features/auth/operations';
import './UserMenu.css';
import { FiLogOut } from 'react-icons/fi';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div className="user-menu">
      <p className="user-message">
        Welcome, <span className="user-name">{user.name}</span>
      </p>
      <button
        type="button"
        className="logOut-btn"
        onClick={() => dispatch(logOut())}
      >
        Logout
        <FiLogOut className="logOut-icon" />
      </button>
    </div>
  );
};
export default UserMenu;
