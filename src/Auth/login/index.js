import React, { useState } from 'react';
import { ChakraProvider, Flex, Box, Heading, FormControl, FormLabel, Input,  Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../../Styles/login.scss';

const LoginPage = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Email: ${email} & Password: ${password}`);
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
                <Box textAlign="center">
                  <Heading>Login</Heading>
                </Box>
                <Box my={4} textAlign="left">
                <form onSubmit={handleSubmit}>
                  <FormControl isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input
                     onChange={event => setEmail(event.currentTarget.value)}
                     borderColor={"#808080"} type="email" placeholder="Enter email..."/>
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input 
                     onChange={event => setPassword(event.currentTarget.value)}
                    borderColor={"#808080"} type="password" placeholder="*******"/>
                  </FormControl>
                  <Button  color={'teal'}  _hover={{ background: "teal.500", color: "white",}} variant="outline"  width="full" mt={4} type="submit">
                    Log In
                  </Button>
                </form>
              </Box>
              </Box> 
            </Flex>
          </ChakraProvider>
        </div>
        <div style={{textAlign: 'center'}}>
        <span style={{ marginTop: '10px', color: 'white'}}>New to FElearn? <Link style={{color: 'teal'}} to = './register'>Register</Link></span><br/>
        <span style={{ marginTop: '10px', color: 'white'}}> <Link style={{color: 'blueviolet'}} to = '#'>Forgot Your Password?</Link></span>
        </div>
        
    </div>  
    </div>
  );
};

export default LoginPage;