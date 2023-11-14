import { useRef } from 'react';
import './RegisterForm.css';
import { Link } from 'react-router-dom';
import { register } from '../../features/auth/operations';
import { useDispatch } from 'react-redux';
import { useAuth } from '../../hooks';
import Notiflix from 'notiflix';
import { setIsUserPage } from '../../features/auth/authSlice';

const RegisterForm = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const dispatch = useDispatch();
  const { errorMessage } = useAuth();
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const credentials = { name, email, password };
    dispatch(setIsUserPage());
    dispatch(register(credentials));
  };
  if (errorMessage === 'Email in use') {
    Notiflix.Notify.failure(errorMessage);
  }
  return (
    <div className='form-container'>
      <h2 className='form-title'> Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label>
          <input
            type='text'
            name='name'
            placeholder='Name *'
            className='form-input'
            required
            ref={nameRef}
          />
        </label>
        <label>
          <input
            type='email'
            name='email'
            placeholder='Email *'
            className='form-input'
            required
            ref={emailRef}
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
          />
        </label>
        <div className='form-btns-container'>
          <button type='submit' className='submit-btn'>
            Register
          </button>
          <Link to='/users/login' className='submit-btn form-btn'>
            Log in
          </Link>
        </div>
      </form>
    </div>
  );
};
export default RegisterForm;
