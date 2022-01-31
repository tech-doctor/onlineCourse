import React, { useState } from 'react';
import { ChakraProvider, Text, CircularProgress, Flex, Box, Heading, FormControl, FormLabel, Input,  Button, InputGroup, InputRightElement, Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../../Styles/login.scss';
import { userLogin } from '../../utils/mockApi';
import ErrorMessage from '../ErrorMessage';
import { updateLoginState } from '../../Store/authSlice';
import { useSelector, useDispatch } from 'react-redux';
//import store from '../../Store/index'


//console.log(store.getState())

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
          <Link to = "./">LOGO</Link>
        </div>
        <div className='body'>
          <ChakraProvider>
            <Flex mt ={10} width="100%" align="center" justifyContent="center">
              <Box background={"white"} p={8} width={"100%"} maxWidth="500px" borderWidth={1} borderRadius={3} boxShadow="lg">
              {isLoggedIn ? (
              <Box textAlign="center">
                <Text>{email} logged in!</Text>
                <Button
                  color={'black'}  _hover={{ background: "grey", color: "white",}}
                  variantcolor="orange"
                  variant="outline"
                  width="full"
                  mt={4}
                  onClick={() => dispatch(updateLoginState(true))}>
                 Sign out
                </Button>
              </Box>) :  
              (<>
                <Box textAlign="center">
                  <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                  <form onSubmit={handleSubmit}>
                    {error && <ErrorMessage message={error} />}
                    <FormControl isRequired>
                      <FormLabel>Email</FormLabel>
                      <Input
                      onChange={event => setEmail(event.currentTarget.value)}
                      borderColor={"#808080"} type="email" placeholder="Enter email..."/>
                    </FormControl>
                    <FormControl mt={6} isRequired>
                      <FormLabel>Password</FormLabel>
                      <InputGroup>
                        <Input 
                        onChange={event => setPassword(event.currentTarget.value)}
                        borderColor={"#808080"} type= {showPassword ? 'text': 'password'} placeholder="*******"/>
                        <InputRightElement width="3rem">
                          <Button h="1.5rem" size="sm" onClick=  
                            {handlePasswordVisibility}>
                            {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button  color={'teal'}  _hover={{ background: "teal.500", color: "white",}} variant="outline"  width="full" mt={4} type="submit">
                      {isLoading ? 
                      <CircularProgress isIndeterminate size="24px" color="teal" />
                      : 'Log In'}
                    </Button>
                  </form>
                </Box>
              </>
              )}
              </Box> 
            </Flex>
          </ChakraProvider>
        </div>
        {isLoggedIn? '' : 
        <div style={{textAlign: 'center'}}>
          <span style={{ marginTop: '10px', color: 'white'}}>New to FElearn? <Link style={{color: 'teal'}} to = './register'>Register</Link></span><br/>
        </div>
        }
    </div>  
    </div>
  );
};

export default LoginPage;