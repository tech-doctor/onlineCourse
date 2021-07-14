import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import  { faUserCircle}  from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

const  Profile = (props) => {


  return (
		<div style = {props.getProfileDetailStyle} className = 'profile'>
			<div className = 'profile-details'>
				<div className = "avatar" style = {{fontSize: '40px'}}>
				  <FontAwesomeIcon className = "user-icon" icon={faUserCircle}/>
				</div>
			  <div className = "email-name">
					<span style = {{fontWeight: '700', fontSize: '20px'}} className = "name">Oluka Damilola Isaac</span><br/>
					<span className = "email">hilghsilk2damson@gmail.com</span>
			  </div>         
			</div>
			<hr/>
			<div className = "profile-list">
			  <ul>
					<li><Link to = "/home/my-courses" style = {{textDecoration: 'none', color: 'black'}} >My courses</Link><small>2</small></li>
					<li><Link to = "/cart" style = {{textDecoration: 'none', color: 'black'}} >My Cart</Link><small>1</small></li>
					<li><Link to = "/dashboard/purchase-history" style = {{textDecoration: 'none', color: 'black'}} >Purchase history</Link><small>3</small></li>
			  </ul>
			</div>
			<hr/>
			<div className = "logOut">
        <p style = {{cursor: 'pointer'}}>LogOut</p>
			</div>
		</div>
  )
}

export default Profile 
