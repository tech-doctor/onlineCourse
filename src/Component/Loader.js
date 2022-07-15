import ReactLoading from 'react-loading';
import { Spinner } from '@chakra-ui/react';

export const InitialLoader = ({ type, color }) => (
  <div style={initialLoaderStyle}>
    <ReactLoading 
      type={type} 
      color={color}
      height={'7%'} 
      width={'7%'}/>
  </div>    
);

export const Loader = ({speed,size}) => {
  return (
    <>
      <Spinner 
        thickness={'4px'} 
        speed={speed} 
        emptyColor={'#f5f5f5'} 
        color={'grey'}
        size={size}
        />
    </>
  );
}

const initialLoaderStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',   
    height: '100vh',
    width: '100vw',
}