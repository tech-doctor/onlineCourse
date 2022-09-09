import React,{useState, useEffect, useRef} from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
// import { updateLoginState } from '../../Store/authSlice';
import { CircularProgress, Flex, Box, Heading, FormControl, Text,  Input,  Button, InputGroup, InputRightElement} from '@chakra-ui/react'
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { USERNAME_REGEX, PASSWORD_REGEX, EMAIL_REGEX, NAME_REGEX } from '../Const';
import {ErrorMessage, ValidationMessage} from '../messages'
import Logo from '../../Component/Layout/Logo';
import '../../Styles/register.scss'

import { signup,reset } from '../../Store/authSlice';
import ProtectAuth from '../../utils/ProtectAuth';


const RegisterPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userRef = useRef();
 
  const user = useSelector(state => state.rootReducer.authSlice.userLoggedin);
  const isLoading = useSelector(state => state.rootReducer.authSlice.isLoading);
  const message = useSelector(state => state.rootReducer.authSlice.message);


  const [showPassword, setShowPassword] = useState(false);
  const [inputs, setInputs] = useState({})
  const [validInput, setValidInput] = useState({
    firstName: false,
    lastName: false,
    userName: false,
    email: false,
    password: false,
  });


  useEffect(() => {
    // dispatch(reset());
    // if (user) {
    //   history.goBack();
    // }
    userRef.current.focus();
  },[])


  const handleChange = (event) => {
    setInputs({
      ...inputs,
      [event.target.name]: event.target.value
    });

    //using object literals in place of switch statement:
    const  validate = {
      firstName: () => setValidInput({
        ...validInput,
        firstName: NAME_REGEX.test(event.target.value)
      }),
      lastName: () => setValidInput({
        ...validInput,
        lastName: NAME_REGEX.test(event.target.value)
      }),
      userName: () => setValidInput({
        ...validInput,
        userName: USERNAME_REGEX.test(event.target.value)
      }),
      email: () => setValidInput({
        ...validInput,
        email: EMAIL_REGEX.test(event.target.value)
      }),
      password: () => setValidInput({
        ...validInput,
        password: PASSWORD_REGEX.test(event.target.value)
      })
    }
    validate[event.target.name]();
  };

  
  const handleSubmit = (event) => {
    event.preventDefault();
     const data = {
      firstname: inputs.firstName,
      lastname: inputs.lastName,
      username: inputs.userName,
      email: inputs.email,
      password: inputs.password
     };
    dispatch(signup(data));
  }
  


  const handlePasswordVisibility = () => setShowPassword(!showPassword);

  return (
    <ProtectAuth>
    <section className='register' style= {{fontFamily:'Arial'}}>
      <div className='heading-body'>
        <div className='heading'>
          <Logo
             src={'/Assets/Logo.png'}
             color={'#173A56'}
            /> 
        </div>
        <div className='body'>
            <Flex my ={0.5} width="100%" align="center" justifyContent="center">
              <Box background={"white"} px={['3', '5',]} width={"100%"}>
                <Box textAlign="center">
                  <Heading
                  mt={3}
                  mb={1}
                  fontFamily="Arial"
                    fontSize={['lg', 'xl', '2xl', '3xl']}
                  >Let's Get You Started</Heading>
                  <Text 
                  fontSize={['sm', 'md', 'lg']}
                   color='#707070'>
                  Kindly fill the form below to register
                  </Text>
                </Box>
                {message && <ErrorMessage message={message} />}
                <Box mt={8}  textAlign="left">
                <form onSubmit={handleSubmit}>
                  <div style={{display: 'flex', alignItems:'center', justifyContent:'space-between'}}>
                  <FormControl isRequired>
                    <Input
                     ref={userRef}
                     _focus={{outline:'none'}}
                     autoComplete="off"
                     width={'95%'}
                     onChange={handleChange}
                     fontSize={'sm'}
                     borderColor={"#b8b8b8"} type="text" placeholder="First Name"
                     name='firstName'
                     value={inputs.firstName || ''}
                    />
                    {!validInput.firstName && inputs.firstName &&<ValidationMessage
                      message={`First name must be between 2 and 15 characters`}
                      width={'95%'}
                    />}

                  </FormControl>
                  <FormControl isRequired>
                    <Input
                    _focus={{outline:'none'}}
                    autoComplete="off"
                    width={'100%'}
                    onChange={handleChange}
                    fontSize={'sm'}
                     borderColor={"#b8b8b8"} type="text" placeholder="Last Name" isRequired
                     name='lastName'
                      value={inputs.lastName || ''}
                    />
                    {!validInput.lastName && 
                    inputs.lastName &&
                    <ValidationMessage
                    message={`Last name must be between 2 and 15 characters`}
                    width={'100%'}
                  />
                    }  
                  </FormControl>
                  </div>
                  
                  <FormControl  my={7} isRequired>
                    <Input
                    _focus={{outline:'none'}}
                    autoComplete="off"
                     onChange={handleChange}
                     fontSize={'sm'}
                     borderColor={"#b8b8b8"} type="text" placeholder="User Name"
                     name='userName'
                     value={inputs.userName || ''}
                    />
                    {!validInput.userName &&
                     inputs.userName &&
                      <ValidationMessage
                      message={`Username must contain 3 and 15 characters starting with a lowercase letter or a number`}
                      width={'100%'}
                    />
                     }
                  </FormControl>
                  <FormControl isRequired>
                    <Input 
                    _focus={{outline:'none'}}
                    autoComplete="off"
                    onChange={handleChange}
                    fontSize={'sm'}
                    borderColor={"#b8b8b8"} type="Email" placeholder="Email Address" isRequired
                    name='email'
                    value={inputs.email  || ''}
                    />
                    {!validInput.email && 
                     inputs.email &&
                       <ValidationMessage
                       message={`Invalid  Email Address`}
                       width={'100%'}
                     />
                    }  
                  </FormControl>
                  <FormControl my={7} isRequired>
                    <InputGroup>
                        <Input 
                        _focus={{outline:'none'}}
                        autoComplete="off"
                        onChange={handleChange}
                        borderColor={"#b8b8b8"} type= {showPassword ? 'text': 'password'} placeholder="Password"
                        name='password'
                        value={inputs.password || ''}
                        />
                        <InputRightElement
                          outline={false}
                         width="3.5rem">
                          <Button 
                          variant="outline"
                          cursor={'pointer'}
                          h="1.5rem" size="sm" onClick=  
                            {handlePasswordVisibility}>
                            {showPassword ? <ViewOffIcon/> : <ViewIcon/>}
                          </Button>
                        </InputRightElement>
                      </InputGroup> 
                      {!validInput.password && 
                      inputs.password &&
                        <ValidationMessage
                        message={`Password must contain
                        Capital letter,  small letters, a
                        number and a sign`}
                        width={'100%'}
                      />
                    }  
                  </FormControl>
                  <Button 
                  _focus={{outline:'none'}}
                  disabled={NAME_REGEX
                    .test(inputs.firstName) &&
                    NAME_REGEX
                    .test(inputs.lastName) &&
                    USERNAME_REGEX
                    .test(inputs.userName) &&
                    EMAIL_REGEX
                    .test(inputs.email) &&
                    PASSWORD_REGEX
                    .test(inputs.password) ? false : true}
                  cursor={'pointer'}
                  background={"#02897A"} color={'white'}  _hover={{ background: "#02897A", color: "gray.200",}} variant="outline"  width="full" type="submit">
                  {isLoading ? 
                      <CircularProgress isIndeterminate 
                      mt={1}
                      size="20px" color="#02897A" />
                      : 'Register'}
                  </Button>
                </form>
              </Box>
              </Box> 
            </Flex>
        </div>
        <p style={{textAlign: 'center', marginTop: '3px', color: 'black', fontSize:'13px',fontFamily:'Arial'}}>Already have an account? <Link style={{color: '#02897A'}} to = '/login'>Login</Link></p>
    </div>  
    </section>
    </ProtectAuth>
  );
};

export default RegisterPage;