import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faBars, faSearch, faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import SideBar from './sideBar'
import Search from './search'

const  MobileHeader = (props) =>  {
  
  // Set the state for the sidebar visibility before the hamburger icon is being clicked
  const [sidebarVisible, setSidebarVisible]  = useState(false)
  
  // set display of sidebar as "none' before click, and "block" when clicked
  const 	getSidebarStyle =  {
		display: sidebarVisible? 
		'block' : 'none',	
	}
  
  //Setting the search input state before clicking the search icon
  const [searchInputVisible, setSearchInput] = useState(false)
   // styling the icon(display) before and after click.
   const searchDiv = {
    border: '1px solid grey', 
    width: '100%',
    position: 'fixed', 
    right: '0px',
    display: searchInputVisible? 
    '' : 'none'
   }
  

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
          <h3>LOGO</h3>
        </div>
        <div style ={{fontSize: '20px'}}
          className =    "search-cart">
          <FontAwesomeIcon
            onClick =  {() => {setSearchInput(true)}} className = 'search-icon' 
            icon={faSearch} 
            />
          <FontAwesomeIcon
            style ={{marginLeft: '20px'}}
            className = 'search-icon' 
            icon={faShoppingCart}
          />
        </div>
      </div>
      <div>
        <SideBar 
        isLoggedIn = {isLoggedIn}
        getSidebarStyle =  {getSidebarStyle}/>
      </div>
      <div style ={ searchDiv } className = 'mobileSearchDiv'>

       {/* Passing the searchInputVisibility state as props to the 'Search' component*/}
        <Search setSearchInput = {setSearchInput}/>
      </div>
    </div>  
  )
}

export default MobileHeader
