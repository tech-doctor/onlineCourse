import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch, faShoppingCart, faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import '../../../Styles/header.css'
import CategoryList from './categoryList'
import Profile from './profile'
import  MobileHeader from '../mobileHeader/mobileHeader'
import Language from '../../language'


const  Header = () => {
  const [isLoggedIn] = useState(false);
    
	return (
		<div className = "">
		 <div className = "header">
			<header>
			  <div className = "desktop-header">
			    <div className = "logo">
				  <h1>LOGO</h1>
				</div>
			    <div className = "nav">
					<nav>
						<p>Categories</p>
						<p>Random </p>					
					</nav>
				</div>
				<div className = "search">
                 <input type = "text" placeholder = "Enter search query" className = "search-input"/>	
					<FontAwesomeIcon className = 'search-icon'  icon={faSearch}/>
				</div> 
					{isLoggedIn? 
				<div className = "course">
				  <p>Course</p>
				</div> : ''
				}
				<div className = "cart-icon" style = {{cursor: 'pointer'}}>
				  <FontAwesomeIcon icon={faShoppingCart} />
				</div>
				{isLoggedIn? 
					<div className = "user">
				  <FontAwesomeIcon className = "user-icon" icon={faUserCircle}/>
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
			 <CategoryList/>
		 </div>
		 <div>
			<Profile/>
		 </div>
		</div>

	)
}


export default Header
