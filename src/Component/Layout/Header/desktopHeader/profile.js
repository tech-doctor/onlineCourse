import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Link} from 'react-router-dom';
import { Popover, PopoverTrigger, PopoverContent, PopoverArrow} from '@chakra-ui/react';
import { logout } from '../../../../Store/authSlice';
import Account from '../../../Account';

const  Profile = () => {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
 const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)

  
  return (
    <Popover
    boxShadow = "2xl"
    isLazy = {true}
    trigger="hover"
    >
    <PopoverTrigger>
      <div className = "user">
        <img src='/Assets/User.png' alt = 'user' className = "user-icon" />
        <span>My Account</span>
      </div>
    </PopoverTrigger>
    <PopoverContent
     borderRadius = {'0px'}
     boxShadow = "2xl"
     outline = {'none'}
      _focus= {{border: 'none'}}
    >
      <PopoverArrow />
        <div className = 'profile'>
         	<Account/>
         <div className = "profile-list">
           <ul>
           <Link to = "/home/my-courses" style = {{textDecoration: 'none', color: 'black'}} > <li>My courses <small>{purchasedItem.length}</small></li></Link>
             <Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} > <li>My Cart<small>{cartList.length}</small></li></Link>
             <Link to = "/dashboard/purchase-history" style = {{textDecoration: 'none', color: 'black'}} ><li>Purchase history<small>{purchasedItem.length}</small></li></Link>
           </ul>
         </div>
         <div 
         onClick={() => dispatch(logout())}
         className = "logOut">
           <span>LogOut</span>
         </div>
        </div> 
    </PopoverContent>
  </Popover>
    
		
  )
}

export default React.memo(Profile); 
