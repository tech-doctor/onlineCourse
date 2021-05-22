import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faBars, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import SideBar from './sideBar'
import Search from './search'

const  MobileHeader = (props) =>  {
  
  // Set the state for the sidebar visibility before the hamburger icon is being clicked
  const [sidebarVisible, setSidebarVisible]  = useState(false)

  //Setting the search input state before clicking the search icon
  const [searchInputVisible, setSearchInput] = useState(false)
  
  // set display of sidebarContent as "none" before click, and "block" when clicked
  const 	getSidebarStyle =  {
		display: sidebarVisible? 
		'block' : 'none',	
	}

   // styling the Search input field 
   const searchDiv = {
    border: '1px solid grey', 
    width: '100%',
    position: 'fixed', 
    right: '0px',
    // code for Search field visibility before and after clicking the search-bar Icon.
    display: searchInputVisible? 
    '' : 'none'
   }
  
  //  setting the isLoggedIn props variable
   const {isLoggedIn} = props;

  return (
    <div className = "mobile-header">
      <div className = "mobile-icons">
        <div  className = "menu-barIcon">
          <FontAwesomeIcon
           onClick = {() => setSidebarVisible(!sidebarVisible)} 
           style ={{fontSize: '20px'}} 
           className = 'search-icon'  
           icon={faBars}
          />
        </div>
        <div className = "logo">
        <h3><Link to = "/">LOGO</Link></h3>
        </div>
        <div style ={{fontSize: '20px'}}
          className =    "search-cart">
          <FontAwesomeIcon
            onClick =  {() => {setSearchInput(true)}} className = 'search-icon' 
            icon={faSearch} 
            />
           <Link to = "/cart"><FontAwesomeIcon
            style ={{marginLeft: '20px'}}
            className = 'search-icon' 
            icon={faShoppingCart}
          /></Link>
        </div>
      </div>
      <div>
        <SideBar 
        // pass isLogged in as a prop (may be transferred to the redux later) to make the sidebar content mutable
        isLoggedIn = {isLoggedIn}
        getSidebarStyle =  {getSidebarStyle}/>
      </div>
      <div style ={ searchDiv } className = 'mobileSearchDiv'>

       {/* Pass the searchInputVisibility state as props to the 'Search' component to make it useful at the handleSearchCancel function */}
        <Search setSearchInput = {setSearchInput}/>
      </div>
    </div>  
  )
}

export default MobileHeader
