import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { Provider } from "react-redux";
import  store from  './Store';

ReactDOM.render( 
  <Provider store = {store}>
    <ChakraProvider resetCSS={false}>
       <App />
    </ChakraProvider>
  </Provider>
   
,document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


//reportWebVitals();


// "node-sass": "^4.14.1",

// "engines": {
//   "node": "14.x",
//   "npm": "6.x"
// },
