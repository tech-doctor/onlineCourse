import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  {faAngleRight, faUserCircle, faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom';

const  SideBar = (props) => {
  const isLoggedIn = useSelector(state => state.rootReducer.authSlice.userLoggedin)
  const [closedCategory, setCategory] = useState(true)
  const { htmlId, cssId, javascriptId, jqueryId} = props



	const MobileCategories = function category(){
    return (
      <div className = "category">
        <p 
          onClick = {onAngleIconClick} 
          style  = {{ cursor: 'pointer', fontSize: '17px'}}>
          Categories {closedCategory? 
            <FontAwesomeIcon icon={faAngleRight}/> :
            <FontAwesomeIcon icon={faAngleDown}/>
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
        <p style = {{fontWeight : '700', cursor: 'pointer'}}><Link to = "/random">Random</Link></p>
      </div>  
    )
  }


	 const  onAngleIconClick = () => {
      setCategory(!closedCategory)
	 }
	
   
	return(
		<div>
		  <div className = "side-bar" style = {props.getSidebarStyle} >
        {!isLoggedIn? 
          <div className ="category">
          <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/login"> <button>Login</button> </Link><br/>
          <Link style = {{textDecoration: 'none', color: 'black'}}  to = "/Register"> <button>Register</button> </Link><br/>
          <MobileCategories/>
        </div>
         : 
        <div  className = "sidebar-profile">
          <div className = 'profile-details'>
            <div className = "avatar" style = {{fontSize: '40px'}}>
              <FontAwesomeIcon className = "user-icon" icon={faUserCircle}/>
            </div>
            <div className = "email-name">
              <span style = {{fontWeight: '700', fontSize: '20px'}} className = "name">Oluka Damilola Isaac</span><br/>
              <span className = "email">hilghsilk2damson@gmail.com</span>
            </div>      
          </div>
          <div className = "profile-list">
            <MobileCategories/>
            <ul>
              <li><Link to = "/home/my-courses">My courses</Link></li>
              <li><Link to = "/cart">My Cart</Link></li>
              <li><Link to = "/dashboard/purchase-history">Purchase history</Link></li>
            </ul>  
          </div>
          <div className = "logOut">
            <p style  = {{cursor: "pointer"}}>LogOut</p>
          </div>
        </div>  
        }
        
        
      </div>	
		</div>
	)
}

export default React.memo(SideBar);
