import React, { useState } from 'react';
import { Text, CircularProgress, Flex, Box, Heading, FormControl,Input,  Button, InputGroup, InputRightElement } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import '../../Styles/login.scss';
import { userLogin } from '../../utils/mockApi';
import {ErrorMessage} from '../messages';
import { updateLoginState } from '../../Store/authSlice';
import { useSelector, useDispatch } from 'react-redux';
import Logo from '../../Component/Logo';
//import store from '../../Store/index'



const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);


  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.rootReducer.authSlice.userLoggedin)

  const handlePasswordVisibility = () => setShowPassword(!showPassword);



  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
     try {
       await userLogin({email, password});
       dispatch(updateLoginState(true));
      setIsLoading(false);
      setShowPassword(false);
    } catch (error) {
      setError('Invalid email or password');
      setIsLoading(false);
      setEmail('');
      setPassword('');
      setShowPassword(false);
    }
  };



  return (
    <div className='login'>
      <div className='heading-body'>
        <div className='heading'>
        <Logo
          src={'/Assets/Logo.png'}
          color={'#173A56'}
        /> 
        </div>
        <div className='body'>
            <Flex my ={0.5} width="100%" align="center" justifyContent="center">
              <Box background={"white"} px={['3', '6',]} width={"100%"} >
                <Box textAlign="center">
                <Heading
                  my={3}
                  fontFamily="Arial"
                    fontSize={['lg', 'xl', '2xl', '3xl']}
                  >Welcome Back</Heading>
                  <Text 
                  fontSize={['sm', 'md']}>
                    Kindly fill in your login details
                  </Text>
                </Box>
                <Box my={4} textAlign="left">
                  <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
                    <FormControl my={8} isRequired>
                     
                      <Input
                      _focus={{outline:'none'}}
                      onChange={event => setEmail(event.currentTarget.value)}
                      borderColor={"#b8b8b8"} type="email" placeholder="Enter Address"/>
                    </FormControl>
                    <FormControl  isRequired>
                     
                      <InputGroup>
                        <Input 
                        _focus={{outline:'none'}}
                        onChange={event => setPassword(event.currentTarget.value)}
                        borderColor={"#b8b8b8"} type= {showPassword ? 'text': 'password'} placeholder="Password"/>
                        <InputRightElement 
                         width="3.5rem">
                          <Button h="1.5rem"
                           variant="outline"
                           cursor={'pointer'}
                            size="sm" onClick=  
                            {handlePasswordVisibility}>
                            {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button _focus={{outline:'none'}}
                      cursor={'pointer'}
                      background={"#02897A"} 
                      color={'white'}  
                      _hover={{ background: "#02897A", color: "gray.200",}} 
                      variant="outline"  
                      width="full" 
                      mt={4} 
                      type="submit">
                      {isLoading ? 
                      <CircularProgress isIndeterminate size="24px" color="teal" />
                      : 'Log In'}
                    </Button>
                  </form>
                </Box>
              </Box> 
            </Flex>
        </div>
        {isLoggedIn? '' : 
        <div style={{textAlign: 'center'}}>
          <span style={{marginTop: '3px', color: 'black', fontSize:'13px',fontFamily:'Arial'}}>New to FElearn? <Link style={{color: 'teal'}} to = './register'>Register</Link></span><br/>
        </div>
        }
    </div>  
    </div>
  );
};

export default LoginPage;