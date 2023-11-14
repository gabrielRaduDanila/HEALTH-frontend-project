import './register.css';
import RegisterForm from '../../register-form/RegisterForm';
import Backgroud from '../../backgroud/Backgroud';
import { useLoadingAndError } from '../../../hooks/useLoadingAndError';
import ErrorMessage from '../../error-message/ErrorMessage';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';

const Register = () => {
  const { isError, isLoading } = useLoadingAndError();

  return (
    <>
      <RegisterForm />
      <Backgroud />
      {isError && <ErrorMessage />}
      {isLoading && <LoadingSpinner />}
    </>
  );
};
export default Register;
