import React from 'react';
import { ChakraProvider, Flex, Box, Heading, FormControl, FormLabel, Input,  Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../../Styles/register.scss'

const RegisterPage = () => {
  return (
    <div className='register'>
      <div className='heading-body'>
        <div className='heading'>
          <Link to = "./">LOGO</Link>
        </div>
        <div className='body'>
          <ChakraProvider>
            <Flex mt ={10} width="100%" align="center" justifyContent="center">
              <Box background={"white"} p={8} width={"100%"} maxWidth="500px" borderWidth={1} borderRadius={3} boxShadow="lg">
                <Box textAlign="center">
                  <Heading>Register</Heading>
                </Box>
                <Box my={4} textAlign="left">
                <form>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input borderColor={"#808080"} type="text" placeholder="First Name..." />
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input borderColor={"#808080"} type="text" placeholder="Last Name..." isRequired/>
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input borderColor={"#808080"} type="Email" placeholder="Enter email..." isRequired/>
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Password</FormLabel>
                    <Input borderColor={"#808080"} type="password" placeholder="*******" isRequired/>
                  </FormControl>
                  <Button color={'teal'}  _hover={{ background: "teal", color: "white",}} variant="outline"  width="full" mt={4} type="submit">
                    Register
                  </Button>
                </form>
              </Box>
              </Box> 
            </Flex>
          </ChakraProvider>
        </div>
        <p style={{textAlign: 'center', marginTop: '10px', color: 'white'}}>Already have an account? <Link style={{color: 'teal'}} to = './login'>Login</Link></p>
    </div>  
    </div>
  );
};

export default RegisterPage;