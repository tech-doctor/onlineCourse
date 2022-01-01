import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faBars, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import SideBar from './sideBar'

const  MobileHeader = (props) =>  {
  // Set the state for the sidebar visibility before the hamburger icon is being clicked
  const [sidebarVisible, setSidebarVisible]  = useState(false)

  // set display of sidebarContent as "none" before click, and "block" when clicked
  const 	getSidebarStyle =  {
		display: sidebarVisible? 
		'block' : 'none',
	}

  //  setting the isLoggedIn props variable
   const {cartList, htmlId, cssId, javascriptId, jqueryId} = props;

  return (
    <div className = "mobile-header">
      <div className = "mobile-icons">
        <div  className = "menu-barIcon">
          <FontAwesomeIcon
           onClick = {() => setSidebarVisible(!sidebarVisible)} 
           style ={{fontSize: '20px'}}  
           icon={faBars}
          />
        </div>
        <div className = "logo">
        <h3><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/">LOGO</Link></h3>
        </div>
        <div style ={{fontSize: '20px'}}
          className =    "search-cart">
           <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/cart"><FontAwesomeIcon
            style ={{marginLeft: '20px'}}
            icon={faShoppingCart}
          />
          <small>{cartList.length}</small>
          </Link>  
        </div>
      </div>
      <div style={getSidebarStyle}>
        <SideBar
          htmlId = {htmlId}
          cssId = {cssId}
          javascriptId = {javascriptId}
          jqueryId = {jqueryId}
        />
      </div>
    </div> 
  )
}

export default MobileHeader
