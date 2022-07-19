import React,{useState} from 'react';
import { CircularProgress, Flex, Box, Heading, FormControl, Text,  Input,  Button, InputGroup, InputRightElement} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import '../../Styles/register.scss'
import Logo from '../../Component/Logo';

const RegisterPage = () => {
  const [isLoading, setIsLoading ] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({});
  //const history = useHistory();

  //const toast = useToast();

   const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });
   };

   const  handleSubmit = (event) => {
      event.preventDefault();
      setIsLoading(true);
      console.log(inputs);
    }

    // const handleToast = (message) => {
    //   toast({
    //     position: 'top',
    //     title: message,
    //     status: 'success',
    //     description: `welcome back`,
    //     duration: 3000,
    //     isClosable: true,
    //     onCloseComplete: () => {
    //       history.push('/');
    //     }
    //   });
    // }

 
  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <div className='register' style={{fontFamily:'Arial'}}>
      <div className='heading-body'>
        <div className='heading'>
          <Logo
             src={'/Assets/Logo.png'}
             color={'#173A56'}
            /> 
        </div>
        <div className='body'>
            <Flex my ={0.5} width="100%" align="center" justifyContent="center">
              <Box background={"white"} px={['3', '5',]} width={"100%"}
                
              >
                <Box textAlign="center">
                  <Heading
                  mt={3}
                  mb={1}
                  fontFamily="Arial"
                    fontSize={['lg', 'xl', '2xl', '3xl']}
                  >Let's Get You Started</Heading>
                  <Text 
                  fontSize={['sm', 'md', 'lg']}>
                    <em
                    style={{color:'#707070'}}
                    >Kindly fill the form below to register</em>
                  </Text>
                </Box>
                <Box mt={8}  textAlign="left">
                <form onSubmit={handleSubmit}>
                  <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <FormControl isRequired>
                    <Input
                    _focus={{outline:'none'}}
                     width={'95%'}
                     onChange={handleChange}
                     borderColor={"#b8b8b8"} type="text" placeholder="First Name"
                     name='firstName'
                     value={inputs.firstName || ''}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input
                    _focus={{outline:'none'}}
                    width={'100%'}
                    onChange={handleChange}
                     borderColor={"#b8b8b8"} type="text" placeholder="Last Name" isRequired
                     name='lastName'
                      value={inputs.lastName || ''}
                    />
                  </FormControl>
                  </div>
                  <FormControl  my={7} isRequired>
                    <Input
                    _focus={{outline:'none'}}
                     onChange={handleChange}
                     borderColor={"#b8b8b8"} type="text" placeholder="User Name"
                     name='userName'
                     value={inputs.userName || ''}
                    />
                  </FormControl>
                  <FormControl isRequired>
                    <Input 
                    _focus={{outline:'none'}}
                    onChange={handleChange}
                    borderColor={"#b8b8b8"} type="Email" placeholder="Email Address" isRequired
                    name='email'
                    value={inputs.email  || ''}
                    />
                  </FormControl>
                  <FormControl my={7} isRequired>
                    <InputGroup>
                        <Input 
                        _focus={{outline:'none'}}
                        onChange={handleChange}
                        borderColor={"#b8b8b8"} type= {showPassword ? 'text': 'password'} placeholder="Password"
                        name='password'
                        value={inputs.password || ''}
                        />
                        <InputRightElement
                          outline={false}
                         width="3rem">
                          <Button 
                          variant="outline"
                          cursor={'pointer'}
                          h="1.5rem" size="sm" onClick=  
                            {handlePasswordVisibility}>
                            {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                          </Button>
                        </InputRightElement>
                      </InputGroup> 
                  </FormControl>
                  <Button 
                  _focus={{outline:'none'}}
                  cursor={'pointer'}
                  background={"#02897A"} color={'white'}  _hover={{ background: "#02897A", color: "gray.200",}} variant="outline"  width="full" type="submit">
                  {isLoading ? 
                      <CircularProgress isIndeterminate size="24px" color="#02897A" />
                      : 'Register'}
                  </Button>
                </form>
              </Box>
              </Box> 
            </Flex>
        </div>
        <p style={{textAlign: 'center', marginTop: '3px', color: 'black', fontSize:'13px',fontFamily:'Arial'}}>Already have an account? <Link style={{color: '#02897A'}} to = './login'>Login</Link></p>
    </div>  
    </div>
  );
};

export default RegisterPage;