import React from 'react';
import { Box, Alert, AlertIcon, AlertDescription } from '@chakra-ui/react';
import {InfoIcon} from '@chakra-ui/icons';


export const ErrorMessage = ({ message }) => {
  return (
    <Box my={4}>
      <Alert status="error" borderRadius={4}>
        <AlertIcon />
        <AlertDescription>{message}</AlertDescription>
      </Alert>
    </Box>
  );
}

export const ValidationMessage  = ( {message, width} ) => {
  return (
    <p style = {validationStyle(width)}>
      <InfoIcon mr={1} />
      <span>
        {message}
      </span>
    </p>
  );
}



const validationStyle = (width) => {
   return {
  color: 'white',
  dispaly: 'flex',
  alignItems: 'center',
  backgroundColor: '#2E2E2E',
  width,
  fontFamily: '',
  fontWeight: '500',
  fontSize: '13px',
  padding: '6px 10px 6px 7px',
  borderRadius: '4px',
  marginTop: '5px',
   }
}

