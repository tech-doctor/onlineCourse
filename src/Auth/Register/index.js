import React,{useState} from 'react';
import { ChakraProvider, CircularProgress, Flex, Box, Heading, FormControl, FormLabel, Input,  Button, InputGroup, InputRightElement,Icon } from '@chakra-ui/react'
import { Link } from 'react-router-dom';
import '../../Styles/register.scss'

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({});

   const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
   };

   const  handleSubmit = (event) => {
      event.preventDefault();
      alert(JSON.stringify(inputs))

   }


 
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

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
                <form onSubmit={handleSubmit}>
                  <FormControl isRequired>
                    <FormLabel>First Name</FormLabel>
                    <Input
                     onChange={handleChange}
                     borderColor={"#808080"} type="text" placeholder="First Name..."
                     name='firstName'
                     value={inputs.firstName || ''}
                    />
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      onChange={handleChange}
                     borderColor={"#808080"} type="text" placeholder="Last Name..." isRequired
                     name='lastName'
                      value={inputs.lastName || ''}
                    />
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Email</FormLabel>
                    <Input 
                    onChange={handleChange}
                    borderColor={"#808080"} type="Email" placeholder="Enter email..." isRequired
                    name='email'
                    value={inputs.email  || ''}
                    />
                  </FormControl>
                  <FormControl mt={6} isRequired>
                    <FormLabel>Password</FormLabel>
                    <InputGroup>
                        <Input 
                        onChange={handleChange}
                        borderColor={"#808080"} type= {showPassword ? 'text': 'password'} placeholder="*******"
                        name='password'
                        value={inputs.password || ''}
                        />
                        <InputRightElement width="3rem">
                          <Button h="1.5rem" size="sm" onClick=  
                            {handlePasswordVisibility}>
                            {showPassword ? <Icon name="view-off" /> : <Icon name="view" />}
                          </Button>
                        </InputRightElement>
                      </InputGroup> 
                  </FormControl>
                  <Button color={'teal'}  _hover={{ background: "teal", color: "white",}} variant="outline"  width="full" mt={4} type="submit">
                  {isLoading ? 
                      <CircularProgress isIndeterminate size="24px" color="teal" />
                      : 'Register'}
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