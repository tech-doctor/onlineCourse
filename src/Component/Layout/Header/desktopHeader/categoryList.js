import React from 'react'
import {Link} from 'react-router-dom';
import { MenuList, MenuItem,} from '@chakra-ui/react'


const  CategoryList = ({htmlId, cssId, javascriptId, jqueryId}) => {

	return (
      <MenuList
        boxShadow={'2xl'}
      >
        <MenuItem
        padding={0}
        border = {'none'}
        borderBottom = {'1px solid #e6e6e6'}
        >
        <Link 
        onMouseOver={(e) => {
          e.target.style.background = 'rgb(97%, 97%, 97%)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'white';
        }}
        to = {`/category/${htmlId}`} style = {{textDecoration: 'none', color: 'black', width: '100%', padding: '10px 15px', fontSize: '12px', backgroundColor:'white',}}>HTML</Link>
        </MenuItem>

        <MenuItem
          padding={0}
          border = {'none'}
          borderBottom = {'1px solid #e6e6e6'}
        >
        <Link 
        onMouseOver={(e) => {
          e.target.style.background = 'rgb(97%, 97%, 97%)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'white';
        }}
        to = {`/category/${cssId}`} style = {{textDecoration: 'none', color: 'black', width: '100%',padding: '10px 15px', fontSize: '12px', backgroundColor:'white'}} >CSS</Link>
        </MenuItem>

        <MenuItem
          padding={0}
          border = {'none'}
          borderBottom = {'1px solid #e6e6e6'}
        >
        <Link 
        onMouseOver={(e) => {
          e.target.style.background = 'rgb(97%, 97%, 97%)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'white';
        }}
        to = {`/category/${javascriptId}`} style = {{textDecoration: 'none', color: 'black', width: '100%',padding: '10px 15px', fontSize: '12px', backgroundColor:'white'}} >Javascript</Link>
        </MenuItem>
        
        <MenuItem
          padding={0}
          border = {'none'}
        >
        <Link 
        onMouseOver={(e) => {
          e.target.style.background = 'rgb(97%, 97%, 97%)';
        }}
        onMouseLeave={(e) => {
          e.target.style.background = 'white';
        }}
        to = {`/category/${jqueryId}`} style = {{textDecoration: 'none', color: 'black', width: '100%',padding: '10px 15px', fontSize: '12px', backgroundColor:'white'}} >JQuery</Link>
        </MenuItem>
      </MenuList>
	)
}

export default React.memo(CategoryList);