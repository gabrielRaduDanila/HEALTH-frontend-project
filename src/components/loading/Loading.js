import { MagnifyingGlass } from 'react-loader-spinner';

const Loading = () => {
  return (
    <div className='loading-container'>
      <MagnifyingGlass
        visible={true}
        height='100'
        width='100'
        ariaLabel='MagnifyingGlass-loading'
        wrapperStyle={{}}
        wrapperClass='MagnifyingGlass-wrapper'
        glassColor='#c0efff'
        color='#e15b64'
      />
    </div>
  );
};
export default Loading;
