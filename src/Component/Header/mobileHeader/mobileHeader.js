import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faBars} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import SideBar from './sideBar'
import Logo from '../../Logo';
import {Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure,} from '@chakra-ui/react'


const  MobileHeader = (props) =>  {
 const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
  

  //  setting the isLoggedIn props variable
   const { htmlId, cssId, javascriptId, jqueryId} = props;

   const { isOpen, onOpen, onClose } = useDisclosure()
   const btnRef = React.useRef()

  return (
    <div className = "mobile-header">
      <div className = "mobile-icons">
        <div  className = "menu-barIcon">
        <div ref={btnRef} 
        onClick={onOpen}
        >
          <FontAwesomeIcon 
            style ={{fontSize: '22px'}}  
            icon={faBars}
          />  
        </div>     
        <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
        //isFullHeight={false}
        >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton 
          border={'none'}
          backgroundColor={'transparent'}
          color={'black'}
          cursor={'pointer'}
          _focus = {{
            outline: 'none',
          }}
          />
          <DrawerHeader>{null}</DrawerHeader>
          <DrawerBody>
            <SideBar
              htmlId = {htmlId}
              cssId = {cssId}
              javascriptId = {javascriptId}
              jqueryId = {jqueryId}
            />
          </DrawerBody>
          {/* <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter> */}
        </DrawerContent>
      </Drawer>
        </div>
          <Logo
          src={'/Assets/logo.png'}
          color={'#173A56'}
          />
        <div style ={{fontSize: '20px'}}
          className =    "search-cart"><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/cart">
            <img 
            alt='cart'
            src='/Assets/cart.png' className='cart_png' style = {{width: '25px', height: '25px'}} />
          {cartList.length > 0 && <small>{cartList.length}</small>}
          </Link>  
        </div>
      </div>
    </div> 
  )
}

export default React.memo(MobileHeader);
