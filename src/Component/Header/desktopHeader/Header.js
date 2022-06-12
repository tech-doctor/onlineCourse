import React, {useState} from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import  {faSearch, faShoppingCart, faUserCircle}  from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux'
import '../../../Styles/header.scss'
import CategoryList from './categoryList'
import Profile from './profile'
import  MobileHeader from '../mobileHeader/mobileHeader';
import Logo from '../../Logo';
import { Link } from 'react-router-dom';


const  Header = () => {
 const isLoggedIn = useSelector(state => state.rootReducer.authSlice.userLoggedin)
 const cartList = useSelector(state => state.rootReducer.databaseSlice.cartList);
 const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem)
 
//set the initial visibility state of the category list and profile details as false 
  const [profileVisibility, setProfileVisibility]  = useState(false)
  const [categoryVisibility, setCategoryVisibility]  = useState(false)
  
   
  const htmlId  = 'PLEu7Y7_blvLXlM820Uy30N8ay-eoZVyIK'
  const cssId = 'PLEu7Y7_blvLVwibRK9szNWmTios4OsLF2'
  const javascriptId = 'PLEu7Y7_blvLVNfrsztZmfWEw57lWyuUfI'
  const jqueryId =  'PLEu7Y7_blvLVVwb0lGCk9J1E4mJcDO808'

	return (
		<div className = "">
      <div className = "header">
        <header>
          <div className = "desktop-header">
            <div style={{marginLeft: '-10px'}}>
              <Logo
               src={'/Assets/logo.png'}
               color={'#173A56'}
               />
            </div>
            <div className = "nav">
              <nav>
                <p
                onClick = {() => setCategoryVisibility(!categoryVisibility)}
                >Categories</p>
                <p><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/random">Random</Link> </p>					
              </nav>
            </div>
            <div className = "search">
              <input type = "text" placeholder = "Search" className = "search-input"/>	
              <img src = '/Assets/search.png' style = {{width: '18px', height: '18px'}} className = "search-icon" alt='search'/>
            </div> 

            {/* Conditions on what to  display when the user is Logged In or Out  */}
            {isLoggedIn && <div className = "course">
              <p><Link style = {{textDecoration: 'none', color: 'black'}}  to = "/home/my-courses">Courses</Link></p>
            </div>}
            
            <div className = "cart-icon" style = {{cursor: 'pointer'}}>
              <Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} >
                <img src='/Assets/cart.png' className='cart_png' style = {{width: '25px', height: '25px'}} alt = 'cart' />
                {cartList.length > 0 && <small>{cartList.length}</small>}
              </Link>  
            </div>

            {isLoggedIn && <div 
            onClick = {() => setProfileVisibility(!profileVisibility)}
            className = "user">
              <img src='/Assets/User.png' alt = 'user' className = "user-icon" />
              <span>My Account</span>
            </div>}

            {!isLoggedIn &&  <div className = "Authentication">
              <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/login"><button className = 'loginButton'>Login</button></Link>
              <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/register"><button className = 'loginButton'>Register</button></Link>
            </div>}
          </div>

          <div className = "mobile-view">
            <MobileHeader
            htmlId = {htmlId}
            cssId = {cssId}
            javascriptId = {javascriptId}
            jqueryId = {jqueryId}
            isLoggedIn = {isLoggedIn} 
            cartList = {cartList} 
            purchasedItem = {purchasedItem}/> 
          </div>
        </header>	
      </div>	
      <div>
        <CategoryList
          htmlId = {htmlId}
          cssId = {cssId}
          javascriptId = {javascriptId}
          jqueryId = {jqueryId}
          categoryVisibility = {categoryVisibility}
          setCategoryVisibility = {setCategoryVisibility}
        />
      </div>
		  <div>
        <Profile
          profileVisibility = {profileVisibility} 
          cartList = {cartList} 
          purchasedItem = {purchasedItem}
          setProfileVisibility = {setProfileVisibility}
        />
		  </div>
	  </div>
	)
}


export default Header
