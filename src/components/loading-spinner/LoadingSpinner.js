import { ProgressBar } from 'react-loader-spinner';

const LoadingSpinner = () => {
  return (
    <div className="loading-container">
      <ProgressBar
        height="120"
        width="120"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </div>
  );
};
export default LoadingSpinner;
