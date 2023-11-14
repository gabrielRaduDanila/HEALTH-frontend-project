import { useLoadingAndError } from '../../../hooks/useLoadingAndError';
import ErrorMessage from '../../error-message/ErrorMessage';
import LoadingSpinner from '../../loading-spinner/LoadingSpinner';
import LoginForm from '../../login-form/LoginForm';
import Backgroud from '../../backgroud/Backgroud';

const Login = () => {
  const { isError, isLoading } = useLoadingAndError();

  return (
    <>
      <LoginForm />
      <Backgroud />
      {isError && <ErrorMessage />}
      {isLoading && <LoadingSpinner />}
    </>
  );
};
export default Login;
