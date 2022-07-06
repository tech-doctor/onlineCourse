import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';
import Account from '../../Account';

const  SideBar = (props) => {
  const isLoggedIn = useSelector(state => state.rootReducer.authSlice.userLoggedin)
  const [closedCategory, setCategory] = useState(false)
  const { htmlId, cssId, javascriptId, jqueryId} = props


	const MobileCategories = function category(){
    return (
      <div  className='mobile_category'>
        <p 
          onClick = {onAngleIconClick} 
          style  = {{ cursor: 'pointer', fontSize: '16px', fontWeight: '600', width: 'fit-content'}}>
          Categories {closedCategory? 
            <FontAwesomeIcon 
            color='black'
            icon={faAngleRight}/> :
            <FontAwesomeIcon 
            color='black'
            icon={faAngleDown}/>
					}
				</p>
      {closedCategory? '' :
      <ul>
        <li><Link to = {`/category/${htmlId}`}>HTML</Link></li>
				<li><Link to = {`/category/${cssId}`}>CSS</Link></li>
				<li><Link to = {`/category/${javascriptId}`}>Javascript</Link></li>
				<li><Link to = {`/category/${jqueryId}`}>JQuery</Link></li>
      </ul> 
    }
        <p style = {{fontWeight : '600', cursor: 'pointer', width: 'fit-content'}}><Link 
        style={{textDecoration: 'none', color: 'black', fontSize: '16px'}}
        to = "/random">Random</Link></p>
      </div>  
    )
  }


	 const  onAngleIconClick = () => {
      setCategory(!closedCategory)
	 }

	
   
	return(
    <div className = "side-bar">
      {!isLoggedIn? 
        <div className ="category">
        <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/login"> <button>Login</button> </Link><br/>
        <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/Register"> <button>Register</button> </Link><br/>
        <MobileCategories/>
      </div>
        : 
      <div  className = "sidebar-profile">
        <>
          <Account/>
        </> 
        <div className = "profile-list">
          <MobileCategories/>
          <ul className='my_data'>
            <li><Link to = "/home/my-courses">My courses</Link></li>
            <li><Link 
            to = "/cart">My Cart</Link>
            </li>
            <li><Link to = "/dashboard/purchase-history">Purchase history</Link></li>
          </ul>  
        </div>
        <div className = "logOut">
          <p style  = {{cursor: "pointer"}}>LogOut</p>
        </div>
      </div>} 
    </div>	
	)
}

export default React.memo(SideBar);
