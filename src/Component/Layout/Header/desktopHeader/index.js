import React, { Suspense,useEffect, useState, useRef } from 'react'
import { useSelector } from 'react-redux';
import {Menu, MenuButton, Popover,} from '@chakra-ui/react';
import CategoryList from './categoryList'
import Profile from './profile'
import  MobileHeader from '../mobileHeader/mobileHeader';
import Logo from '../../Logo';
import { Link } from 'react-router-dom';
import { Login, Register } from '../../../styles/extra';
import '../../../../Styles/header.scss'
const Search = React.lazy(() => import('./search'));


const htmlId  = 'PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK'
const cssId = 'PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2'
const javascriptId = 'PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI'
const jqueryId =  'PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808'

const  Header = () => {
 const isLoggedIn = useSelector(state => state.rootReducer.authSlice.userLoggedin)
 const cartCount = useSelector(state => state.rootReducer.databaseSlice.cartCount);
 const [searchItem, setSearchItem] = useState('');
 const [showSearch, setShowSearch] = useState(false);
 const  searchRef = useRef(null);

 useEffect(() => {
   const clickOutside = (e) => {
      if(showSearch && searchRef.current && !searchRef.current.contains(e.target)){
        setShowSearch(false);
      }
   }
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    }
 },[ showSearch])



 const handleSearch = (e) => {
  setSearchItem(e.target.value);
  setShowSearch(true);
}

	return (
		<>
      <div className = "header">
        <header>
          <div className = "desktop-header">
            <div style={{marginLeft: '-10px'}}>
              <Logo
               src={'/Assets/Logo.png'}
               color={'#173A56'}
               />
            </div>
            <div className = "nav">
              <nav>
                <Menu
                isLazy = {true}
                trigger = {'hover'}
                >
                  <MenuButton
                  border={'none'}
                  backgroundColor={'white'}
                  fontSize={'1em'}
                  fontWeight = {'600'}
                  fontFamily = {'-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Open Sans, Helvetica Neue, sans-serif;'}
                  cursor = {'pointer'}
                  _hover = {{textDecoration:'underline'}}
                  >
                  Categories 
                  </MenuButton>
                  
                  <CategoryList
                  htmlId = {htmlId}
                  cssId = {cssId}
                  javascriptId = {javascriptId}
                  jqueryId = {jqueryId}
                  />
                </Menu>
                <p><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/random">Random</Link> </p>					
              </nav>
            </div>
            <div ref={searchRef} className = "search">
              <input 
              onChange={handleSearch}
              type = "text" placeholder = "Search courses" className = "search-input"/>	
              <img src = '/Assets/search.png' style = {{width: '18px', height: '18px'}} className = "search-icon" alt='search'/>
              <Suspense fallback = {<div>loading...</div>}>
                {showSearch &&
                 <Search 
                 searchItem = {searchItem}
                 />}
              </Suspense>
            </div>
            {/* Conditions on what to  display when the user is Logged In or Out  */}
            {isLoggedIn && <div className = "course">
              <p><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/home/my-courses">Courses</Link></p>
            </div>}
            
            <div className = "cart-icon" style = {{cursor: 'pointer'}}>
              <Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} >
                <img src='/Assets/cart.png' className='cart_png' style = {{width: '25px', height: '25px'}} alt = 'cart' />
                {cartCount > 0 && <small>{cartCount}</small>}
              </Link>  
            </div>
            {isLoggedIn &&
             <>
              <Popover
              boxShadow = "3xl"
              >
                <Profile/>
              </Popover>
            </>}
            {!isLoggedIn &&  <div className = "Authentication">
              <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/login"><Login className = 'loginButton'>Login</Login></Link>
              <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/register"><Register className = 'loginButton'>Register</Register></Link>
            </div>}
          </div>

          <div className = "mobile-view">
            <MobileHeader
            htmlId = {htmlId}
            cssId = {cssId}
            javascriptId = {javascriptId}
            jqueryId = {jqueryId}/>
          </div>
        </header>	
      </div>	
      <div>
      </div>
		  <div>
		  </div>
	  </>
	)
}


export default Header
