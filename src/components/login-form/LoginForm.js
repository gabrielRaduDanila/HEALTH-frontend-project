import './LoginForm.css';
// import '../register-form/RegisterForm.css';
import { login } from '../../features/auth/operations';
import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setIsUserPage } from '../../features/auth/authSlice';

const LoginForm = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const credentials = { email, password };
    dispatch(setIsUserPage());
    dispatch(login(credentials));
  };

  return (
    <div className='form-container'>
      <h2 className='form-title'> Log in</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label>
          <input
            type='email'
            name='email'
            placeholder='Email *'
            className='form-input'
            required
            ref={emailRef}
            autoComplete='off'
          />
        </label>
        <label>
          <input
            type='password'
            name='password'
            placeholder='Password *'
            className='form-input'
            required
            ref={passwordRef}
            autoComplete='off'
          />
        </label>
        <div className='form-btns-container'>
          <button type='submit' className='submit-btn'>
            Login
          </button>
          <Link to='/users/register' className='submit-btn form-btn'>
            Register
          </Link>
        </div>
      </form>
    </div>
  );
};
export default LoginForm;
