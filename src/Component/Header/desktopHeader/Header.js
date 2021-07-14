import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch, faShoppingCart, faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import '../../../Styles/header.scss'
import CategoryList from './categoryList'
import Profile from './profile'
import  MobileHeader from '../mobileHeader/mobileHeader'
import Language from '../../language'
import { Link } from 'react-router-dom'


const  Header = () => {
  // Set the loggedIn state(might enter the global Redux state later)
  const [isLoggedIn] = useState(true);
    
  //set the initial visibility state of the category list and profile details as false 
  const [profileVisibility, setProfileVisibility]  = useState(false)
  const [categoryVisibility, setCategoryVisibility]  = useState(false)

  
  // set display Visibility as "none" before click, and "block" when clicked
  const visibility = (Visibility) => {
    const 	getStyle =  {
      display: Visibility? 
      'block' : 'none',	
    }
    return getStyle
  }
  

	return (
		<div className = "">
		 <div className = "header">
			<header>
			  <div className = "desktop-header">
			    <div className = "logo">
				    <h1><Link to = "/">LOGO</Link></h1>
				  </div>
			    <div className = "nav">
					  <nav>
              <p
              onClick = {() => setCategoryVisibility(!categoryVisibility)}
              >Categories</p>
              <p><Link to = "/courses/category">Random</Link> </p>					
					  </nav>
				  </div>
				  <div className = "search">
            <input type = "text" placeholder = "Enter search query" className = "search-input"/>	
            <FontAwesomeIcon className = 'search-icon'  icon={faSearch}/>
				  </div> 
          {/* Conditions on what to  display when the user is Logged In or Out  */}
					{isLoggedIn? 
          <div className = "course">
            <p><Link style = {{cursor: 'pointer'}} to = "/home/my-courses">Course</Link></p>
          </div> : ''
				  }
				  <div className = "cart-icon" style = {{cursor: 'pointer'}}>
            <Link to = "/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link> 
				  </div>
				    {isLoggedIn? 
					<div className = "user">
				    <FontAwesomeIcon 
            onClick = {() => setProfileVisibility(!profileVisibility)}
            className = "user-icon" icon={faUserCircle}/>
				  </div> 
          : ''}
          <div className = 'language'>
            <Language/>
          </div>
          {!isLoggedIn? 
          <div className = "Authentication">
            <button className = 'loginButton'>Login</button>
            <button className = 'registerButton'>Register</button>
          </div> : ''
          }
			  </div>
			  <div className = "mobile-view">
				 <MobileHeader isLoggedIn = {isLoggedIn}/> 
			  </div>
			</header>		
		</div>
		 <div>
			 <CategoryList getCategortListStyle = {visibility(categoryVisibility)}/>
		 </div>
		 <div>
			<Profile getProfileDetailStyle = {visibility(profileVisibility)}/>
		 </div>
		</div>

	)
}


export default Header
