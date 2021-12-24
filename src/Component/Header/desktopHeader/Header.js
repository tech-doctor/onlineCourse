import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faSearch, faShoppingCart, faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import { useSelector } from 'react-redux'
import '../../../Styles/header.scss'
import CategoryList from './categoryList'
import Profile from './profile'
import  MobileHeader from '../mobileHeader/mobileHeader'
import Language from '../../language'
import { Link } from 'react-router-dom'
//import { updateCartList } from '../../../Store/mySlice'


const  Header = () => {
 const isLoggedIn = useSelector(state => state.myState.userLoggedin)
 
 const cartList = useSelector(state => state.myState.cartList);
 const itemsBought = useSelector(state => state.myState.itemsBought)
 
//set the initial visibility state of the category list and profile details as false 
  const [profileVisibility, setProfileVisibility]  = useState(false)
  const [categoryVisibility, setCategoryVisibility]  = useState(false)
  
	return (
		<div className = "">
		 <div className = "header">
			<header>
			  <div className = "desktop-header">
			    <div className = "logo">
				    <h1><Link to = "/" style = {{textDecoration: 'none', color: 'black'}} >LOGO</Link ></h1>
				  </div>
			    <div className = "nav">
					  <nav>
              <p
              onClick = {() => setCategoryVisibility(!categoryVisibility)}
              >Categories</p>
              <p><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/courses/category">Random</Link> </p>					
					  </nav>
				  </div>
				  <div className = "search">
            <input type = "text" placeholder = "Enter search query" className = "search-input"/>	
            <FontAwesomeIcon className = 'search-icon'  icon={faSearch}/>
				  </div> 

          {/* Conditions on what to  display when the user is Logged In or Out  */}
					{isLoggedIn? 
          <div className = "course">
            <p><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/home/my-courses">Course</Link></p>
          </div> : ''
				  }
				  <div className = "cart-icon" style = {{cursor: 'pointer'}}>
            <Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} >
              <FontAwesomeIcon icon={faShoppingCart} style = {{fontSize: '20px'}} />
			        <small>{cartList.length}</small>
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
			  <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/login"><button className = 'loginButton'>Login</button></Link>
              <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/register"><button className = 'loginButton'>Register</button></Link>
          </div> : ''
          }
			  </div>
			  <div className = "mobile-view">
				 <MobileHeader isLoggedIn = {isLoggedIn} cartList = {cartList} itemsBought = {itemsBought}/> 
			  </div>
			</header>		
		</div>
		 <div>
			<CategoryList
				categoryVisibility = {categoryVisibility}
				setCategoryVisibility = {setCategoryVisibility}
			/>
		 </div>
		 <div>
			<Profile
				profileVisibility = {profileVisibility} 
				cartList = {cartList} 
				itemsBought = {itemsBought}
				setProfileVisibility = {setProfileVisibility}
			/>
		 </div>
		</div>

	)
}


export default Header
