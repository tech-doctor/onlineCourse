import React, { useState, useEffect  } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Text, CircularProgress, Flex, Box, Heading, FormControl,Input,  Button, InputGroup, InputRightElement } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import {ErrorMessage} from '../messages';
import Logo from '../../Component/Layout/Logo';
import { login,reset } from '../../Store/authSlice';
import '../../Styles/login.scss';
import ProtectAuth from '../../utils/ProtectAuth';


const LoginPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const isLoading = useSelector(state => state.rootReducer.authSlice.isLoading);
  const user = useSelector(state => state.rootReducer.authSlice.userLoggedin);
  const message = useSelector(state => state.rootReducer.authSlice.message);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  

  const handlePasswordVisibility = () => setShowPassword(!showPassword);


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      email,
      password
    };
    dispatch(login(data));
  };


  return (
    <ProtectAuth>
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
                <Box 
                mt={1}
                mb={9}
                textAlign="center">
                <Heading
                  my={1}
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
                    {message !== '' && <ErrorMessage message={message} />}
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
                      mt={7} 
                      type="submit">
                      {isLoading ? 
                      <CircularProgress isIndeterminate 
                      mt={1}
                      size="20px" 
                      color="teal" />
                      : 'Log In'}
                    </Button>
                  </form>
                </Box>
              </Box> 
            </Flex>
        </div>
        <div style={{textAlign: 'center'}}>
          <span style={{marginTop: '3px', color: 'black', fontSize:'13px',fontFamily:'Arial'}}>New to FElearn? <Link style={{color: 'teal'}} to = './register'>Register</Link></span><br/>
        </div>
    </div>  
    </div>
    </ProtectAuth>
  );
};

export default LoginPage;